type CidrDiagramProps = {
  prefix: number;
};

type CidrIpPrefixDiagramProps = CidrDiagramProps & {
  baseIp: string;
};

type CidrBitGridDiagramProps = CidrDiagramProps & {
  dotColumnWidth?: string;
};

const COLOR_PALETTE = [
  "bg-slate-100",
  "bg-slate-200",
  "bg-slate-300",
  "bg-slate-200",
];

const clampPrefix = (prefix: number) => Math.min(32, Math.max(0, prefix));

const getMaskOctets = (prefix: number) => {
  const safePrefix = clampPrefix(prefix);
  return Array.from({ length: 4 }).map((_, index) => {
    const remaining = safePrefix - index * 8;
    if (remaining >= 8) return 255;
    if (remaining <= 0) return 0;
    return 256 - 2 ** (8 - remaining);
  });
};

const getColumnTemplate = (dotColumnWidth: string) =>
  `repeat(8, minmax(0, 1fr)) ${dotColumnWidth} repeat(8, minmax(0, 1fr)) ${dotColumnWidth} repeat(8, minmax(0, 1fr)) ${dotColumnWidth} repeat(8, minmax(0, 1fr))`;

const getDotsBefore = (prefix: number) => Math.floor(clampPrefix(prefix) / 8);

export function CidrIpPrefixDiagram({ baseIp, prefix }: CidrIpPrefixDiagramProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex w-full flex-wrap items-center justify-center gap-3">
        <div className="flex min-w-[200px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-lg font-semibold text-slate-700 shadow-sm">
          {baseIp}
        </div>
        <div className="flex min-w-[80px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 px-6 py-4 text-lg font-semibold text-slate-700 shadow-sm">
          /{clampPrefix(prefix)}
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-4 text-xs text-muted-foreground">
        <span>Dirección base</span>
        <span>Prefijo</span>
      </div>
    </div>
  );
}

export function CidrBitGridDiagram({ prefix, dotColumnWidth = "0.35fr" }: CidrBitGridDiagramProps) {
  const safePrefix = clampPrefix(prefix);
  const hostBits = 32 - safePrefix;
  const dotsBefore = getDotsBefore(safePrefix);
  const dotsAfter = 3 - dotsBefore;
  const netSpan = safePrefix + dotsBefore;
  const hostSpan = hostBits + dotsAfter;

  const cells = [0, 1, 2, 3].flatMap((octetIndex) => {
    const start = octetIndex * 8;
    const bits = Array.from({ length: 8 }).map((_, bitIndex) => {
      const isNet = start + bitIndex < safePrefix;
      return (
        <div
          key={`bit-${octetIndex}-${bitIndex}`}
          className={`flex h-8 items-center justify-center rounded-xs text-xs font-semibold ${
            isNet
              ? "bg-slate-200 text-slate-700"
              : "bg-slate-400 text-white"
          }`}
        >
          {isNet ? 1 : 0}
        </div>
      );
    });

    if (octetIndex < 3) {
      bits.push(
        <div
          key={`dot-${octetIndex}`}
          className="flex h-8 items-center justify-center text-lg font-semibold text-muted-foreground"
        >
          .
        </div>
      );
    }

    return bits;
  });

  return (
    <div className="mt-4 grid gap-4">
      <div className="grid gap-2">
        <div
          className="grid gap-1 text-center text-xs text-muted-foreground"
          style={{ gridTemplateColumns: getColumnTemplate(dotColumnWidth) }}
        >
          <span style={{ gridColumn: `1 / span ${netSpan}` }}>
            {safePrefix} bits de red (mismo número que el prefijo de red)
          </span>
          <span style={{ gridColumn: `${netSpan + 1} / span ${hostSpan}` }}>
            {hostBits} bits para hosts
          </span>
        </div>
        <div
          role="img"
          aria-label={`Separación de bits para /${safePrefix}`}
          className="grid gap-1"
          style={{ gridTemplateColumns: getColumnTemplate(dotColumnWidth) }}
        >
          {cells}
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>0</span>
        <span>32</span>
      </div>
    </div>
  );
}

export function CidrMaskDiagram({ prefix }: CidrDiagramProps) {
  const safePrefix = clampPrefix(prefix);
  const octets = getMaskOctets(safePrefix);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid w-full grid-cols-4 gap-3">
        {octets.map((value, index) => (
          <div
            key={`mask-${index}`}
            className={`flex h-14 items-center justify-center rounded-2xl border border-slate-200 text-lg font-semibold text-slate-700 shadow-sm ${
              COLOR_PALETTE[0]
            }`}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="text-xs text-muted-foreground">
        /{safePrefix} → {octets.join(".")}
      </div>
    </div>
  );
}
