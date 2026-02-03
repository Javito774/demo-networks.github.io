"use client";

import { useMemo, useState } from "react";
import { calculateNetwork } from "@/lib/network";
import {
  CidrBitGridDiagram,
  CidrIpPrefixDiagram,
  CidrMaskDiagram,
} from "@/components/cidr-diagrams";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const LIST_LIMIT = 256;

export function NetworkCalculator() {
  const [ip, setIp] = useState("192.168.1.10");
  const [mask, setMask] = useState("/24");

  const { result, error } = useMemo(
    () => calculateNetwork(ip, mask, LIST_LIMIT),
    [ip, mask]
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">Parámetros de red</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-5">
          <div className="grid gap-2">
            <Label htmlFor="ip">Dirección IP</Label>
            <Input
              id="ip"
              value={ip}
              onChange={(event) => setIp(event.target.value)}
              placeholder="Ej: 10.0.0.34"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="mask">Máscara o CIDR</Label>
            <Input
              id="mask"
              value={mask}
              onChange={(event) => setMask(event.target.value)}
              placeholder="Ej: /24 o 255.255.255.0"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="secondary" onClick={() => {
              setIp("192.168.0.20");
              setMask("/24");
            }}>
              Ejemplo hogar
            </Button>
            <Button type="button" variant="secondary" onClick={() => {
              setIp("10.10.5.4");
              setMask("/20");
            }}>
              Ejemplo empresa
            </Button>
            <Button type="button" variant="secondary" onClick={() => {
              setIp("172.16.100.2");
              setMask("255.255.255.248");
            }}>
              Ejemplo /29
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            {"Acepta prefijo CIDR (\"/24\") o máscara decimal (\"255.255.255.0\")."}
          </p>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between gap-3">
          <CardTitle className="text-xl">Resultado</CardTitle>
          {result && (
            <Badge variant="secondary">CIDR /{result.maskBits}</Badge>
          )}
        </CardHeader>
        <CardContent className="grid gap-4">
          {error && (
            <div className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              {error}
            </div>
          )}
          {!error && result && (
            <div className="grid gap-4 text-sm">
              <div className="grid gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">Máscara decimal</span>
                  <span className="font-medium">{result.maskDotted}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">Red</span>
                  <span className="font-medium">{result.network}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">Broadcast</span>
                  <span className="font-medium">{result.broadcast}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">Primera IP útil</span>
                  <span className="font-medium">{result.firstHost}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">Última IP útil</span>
                  <span className="font-medium">{result.lastHost}</span>
                </div>
              </div>

              <Separator />

              <div className="grid gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">IPs totales</span>
                  <span className="font-semibold">{result.totalIps}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">IPs utilizables</span>
                  <span className="font-semibold">{result.usableIps}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-muted-foreground">Rango completo</span>
                  <span className="font-medium">{result.rangeLabel}</span>
                </div>
              </div>

              <Separator />

              <div className="grid gap-4">
                <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    IP + prefijo
                  </div>
                  <div className="mt-4">
                    <CidrIpPrefixDiagram
                      baseIp={result.network}
                      prefix={result.maskBits}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Bits de red vs hosts
                  </div>
                  <CidrBitGridDiagram prefix={result.maskBits} />
                </div>

                <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Máscara equivalente en decimal
                  </div>
                  <div className="mt-4">
                    <CidrMaskDiagram prefix={result.maskBits} />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Listado de IPs</span>
                  <Badge variant="outline">{result.ipList.length}</Badge>
                </div>
                {result.ipList.length > -1 ? (
                  <div className="max-h-49 overflow-auto rounded-md border border-border/60 bg-muted/30 p-3 text-xs">
                    {result.ipList.join(" · ")}
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    El rango es grande. Mostramos la lista solo cuando la red tiene
                    hasta {LIST_LIMIT} IPs.
                  </p>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
