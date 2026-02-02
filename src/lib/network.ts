export type NetworkCalcResult = {
  ip: string;
  maskBits: number;
  maskDotted: string;
  network: string;
  broadcast: string;
  firstHost: string;
  lastHost: string;
  totalIps: number;
  usableIps: number;
  rangeLabel: string;
  ipList: string[];
};

export type SubnetResult = {
  network: string;
  cidr: string;
  broadcast: string;
  firstHost: string;
  lastHost: string;
  totalIps: number;
  usableIps: number;
};

const IPV4_PARTS = 4;
const MAX_OCTET = 255;

export function parseIpv4(input: string): number | null {
  const value = input.trim();
  const parts = value.split(".");
  if (parts.length !== IPV4_PARTS) return null;

  const nums = parts.map((part) => {
    if (!/^[0-9]+$/.test(part)) return NaN;
    const num = Number(part);
    if (num < 0 || num > MAX_OCTET) return NaN;
    return num;
  });

  if (nums.some((num) => Number.isNaN(num))) return null;

  return (
    (nums[0] << 24) |
    (nums[1] << 16) |
    (nums[2] << 8) |
    nums[3]
  ) >>> 0;
}

export function intToIpv4(value: number): string {
  return [
    (value >>> 24) & 255,
    (value >>> 16) & 255,
    (value >>> 8) & 255,
    value & 255,
  ].join(".");
}

export function maskBitsToInt(bits: number): number {
  if (bits <= 0) return 0;
  if (bits >= 32) return 0xffffffff;
  return ((~0 << (32 - bits)) >>> 0) >>> 0;
}

export function maskIntToBits(maskInt: number): number | null {
  let bits = 0;
  for (let i = 31; i >= 0; i -= 1) {
    if (maskInt & (1 << i)) bits += 1;
    else break;
  }

  if (maskBitsToInt(bits) !== maskInt >>> 0) return null;
  return bits;
}

export function maskIntToDotted(maskInt: number): string {
  return intToIpv4(maskInt >>> 0);
}

export function parseMaskInput(input: string): { bits: number; maskInt: number } | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  const normalized = trimmed.startsWith("/") ? trimmed.slice(1) : trimmed;

  if (normalized.includes(".")) {
    const maskInt = parseIpv4(normalized);
    if (maskInt === null) return null;
    const bits = maskIntToBits(maskInt);
    if (bits === null) return null;
    return { bits, maskInt };
  }

  if (!/^[0-9]+$/.test(normalized)) return null;
  const bits = Number(normalized);
  if (Number.isNaN(bits) || bits < 0 || bits > 32) return null;
  return { bits, maskInt: maskBitsToInt(bits) };
}

export function parseCidrNetwork(input: string):
  | { ipInt: number; bits: number; maskInt: number }
  | null {
  const trimmed = input.trim();
  if (!trimmed.includes("/")) return null;
  const [ipPart, maskPart] = trimmed.split("/");
  if (!ipPart || maskPart === undefined) return null;
  const ipInt = parseIpv4(ipPart);
  if (ipInt === null) return null;
  const mask = parseMaskInput(maskPart);
  if (!mask) return null;
  return { ipInt, bits: mask.bits, maskInt: mask.maskInt };
}

export function calculateNetwork(
  ipInput: string,
  maskInput: string,
  listLimit = 256
): { result?: NetworkCalcResult; error?: string } {
  const ipInt = parseIpv4(ipInput);
  if (ipInt === null) return { error: "La IP no es válida." };

  const mask = parseMaskInput(maskInput);
  if (!mask) return { error: "La máscara o CIDR no es válida." };

  const { bits, maskInt } = mask;
  const networkInt = (ipInt & maskInt) >>> 0;
  const broadcastInt = (networkInt | (~maskInt >>> 0)) >>> 0;

  const totalIps = Math.pow(2, 32 - bits);

  let usableIps = totalIps;
  if (bits <= 30) usableIps = Math.max(totalIps - 2, 0);

  let firstHostInt = networkInt;
  let lastHostInt = broadcastInt;

  if (bits <= 30) {
    firstHostInt = networkInt + 1;
    lastHostInt = broadcastInt - 1;
  }

  const rangeLabel = `${intToIpv4(networkInt)} - ${intToIpv4(broadcastInt)}`;

  const ipList: string[] = [];
  if (totalIps <= listLimit) {
    for (let i = 0; i < totalIps; i += 1) {
      ipList.push(intToIpv4((networkInt + i) >>> 0));
    }
  }

  return {
    result: {
      ip: intToIpv4(ipInt),
      maskBits: bits,
      maskDotted: maskIntToDotted(maskInt),
      network: intToIpv4(networkInt),
      broadcast: intToIpv4(broadcastInt),
      firstHost: intToIpv4(firstHostInt),
      lastHost: intToIpv4(lastHostInt),
      totalIps,
      usableIps,
      rangeLabel,
      ipList,
    },
  };
}

export function calculateSubnets(
  cidrInput: string,
  mode: "count" | "splits",
  value: number,
  listLimit = 512
): { result?: SubnetResult[]; error?: string } {
  const parsed = parseCidrNetwork(cidrInput);
  if (!parsed) return { error: "El CIDR no es válido. Usa formato 192.168.1.0/24." };

  const { ipInt, bits: baseBits, maskInt } = parsed;
  const networkInt = (ipInt & maskInt) >>> 0;
  if (networkInt !== ipInt) {
    return { error: "La IP base no es la dirección de red del CIDR." };
  }

  if (!Number.isFinite(value) || value <= 0) {
    return { error: "El valor debe ser mayor que 0." };
  }

  let newBits = baseBits;
  let subnetCount = 1;

  if (mode === "splits") {
    const splits = Math.floor(value);
    newBits = baseBits + splits;
    subnetCount = Math.pow(2, splits);
  } else {
    const count = Math.floor(value);
    const isPowerOfTwo = (count & (count - 1)) === 0;
    if (!isPowerOfTwo) {
      return { error: "El número de subredes debe ser potencia de 2." };
    }
    const extraBits = Math.log2(count);
    newBits = baseBits + extraBits;
    subnetCount = count;
  }

  if (newBits > 32) {
    return { error: "El prefijo resultante es inválido." };
  }

  const blockSize = Math.pow(2, 32 - newBits);
  if (subnetCount > listLimit) {
    return { error: `Demasiadas subredes para listar (máx. ${listLimit}).` };
  }

  const results: SubnetResult[] = [];
  for (let i = 0; i < subnetCount; i += 1) {
    const subnetNetworkInt = (networkInt + i * blockSize) >>> 0;
    const subnetBroadcastInt = (subnetNetworkInt + blockSize - 1) >>> 0;
    const totalIps = blockSize;
    const usableIps = newBits <= 30 ? Math.max(totalIps - 2, 0) : totalIps;
    const firstHost = newBits <= 30 ? subnetNetworkInt + 1 : subnetNetworkInt;
    const lastHost = newBits <= 30 ? subnetBroadcastInt - 1 : subnetBroadcastInt;

    results.push({
      network: intToIpv4(subnetNetworkInt),
      cidr: `${intToIpv4(subnetNetworkInt)}/${newBits}`,
      broadcast: intToIpv4(subnetBroadcastInt),
      firstHost: intToIpv4(firstHost),
      lastHost: intToIpv4(lastHost),
      totalIps,
      usableIps,
    });
  }

  return { result: results };
}
