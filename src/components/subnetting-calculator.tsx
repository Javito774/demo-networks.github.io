"use client";

import { useMemo, useState } from "react";
import { calculateSubnets, type SubnetResult } from "@/lib/network";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LIST_LIMIT = 512;

export function SubnettingCalculator() {
  const [cidr, setCidr] = useState("192.168.1.0/24");
  const [count, setCount] = useState("4");
  const [splits, setSplits] = useState("2");

  const countValue = Number(count);
  const splitValue = Number(splits);

  const countResult = useMemo(
    () => calculateSubnets(cidr, "count", countValue, LIST_LIMIT),
    [cidr, countValue]
  );

  const splitResult = useMemo(
    () => calculateSubnets(cidr, "splits", splitValue, LIST_LIMIT),
    [cidr, splitValue]
  );

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Subnetting en vivo</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="subnet-cidr">CIDR base</Label>
          <Input
            id="subnet-cidr"
            value={cidr}
            onChange={(event) => setCidr(event.target.value)}
            placeholder="Ej: 10.0.0.0/16"
          />
        </div>

        <Tabs defaultValue="count" className="grid gap-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="count">Por número de subredes</TabsTrigger>
            <TabsTrigger value="splits">Por niveles de división</TabsTrigger>
          </TabsList>

          <TabsContent value="count" className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="subnet-count">Cantidad de subredes</Label>
              <Input
                id="subnet-count"
                value={count}
                onChange={(event) => setCount(event.target.value)}
                placeholder="Ej: 4, 8, 16"
              />
              <p className="text-xs text-muted-foreground">
                Debe ser potencia de 2 (2, 4, 8, 16...).
              </p>
            </div>

            {countResult.error && (
              <div className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {countResult.error}
              </div>
            )}
            {countResult.result && (
              <SubnetList results={countResult.result} />
            )}
          </TabsContent>

          <TabsContent value="splits" className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="subnet-splits">Número de divisiones</Label>
              <Input
                id="subnet-splits"
                value={splits}
                onChange={(event) => setSplits(event.target.value)}
                placeholder="Ej: 1, 2, 3"
              />
              <p className="text-xs text-muted-foreground">
                Cada división duplica la cantidad de subredes.
              </p>
            </div>

            {splitResult.error && (
              <div className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {splitResult.error}
              </div>
            )}
            {splitResult.result && (
              <SubnetList results={splitResult.result} />
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function SubnetList({ results }: { results: SubnetResult[] }) {
  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Subredes generadas</span>
        <Badge variant="secondary">{results.length}</Badge>
      </div>
      <div className="grid gap-2 rounded-md border border-border/60 bg-muted/30 p-3 text-xs">
        {results.map((item) => (
          <div key={item.cidr} className="grid gap-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold text-foreground">{item.cidr}</span>
              <span className="text-muted-foreground">
                {item.network} - {item.broadcast}
              </span>
            </div>
            <div className="text-muted-foreground">
              Hosts: {item.usableIps} útiles · Primera: {item.firstHost} · Última: {item.lastHost}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
