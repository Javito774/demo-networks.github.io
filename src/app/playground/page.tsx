import { NetworkCalculator } from "@/components/network-calculator";
import { SubnettingCalculator } from "@/components/subnetting-calculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PlaygroundPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
      <section className="grid gap-3">
        <p className="text-sm font-medium text-muted-foreground">Playground</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Calculadora de redes en vivo
        </h1>
        <p className="text-base text-muted-foreground">
          Ingresa una IP y una máscara o prefijo CIDR. Calcularemos la red,
          broadcast, IPs útiles y el rango completo al instante.
        </p>
      </section>

      <NetworkCalculator />

      <SubnettingCalculator />

      <section className="grid gap-4">
        <h2 className="text-2xl font-semibold">Subnetting rápido</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Cómo dividir una red</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <ol className="list-decimal space-y-2 pl-5">
                <li>Define cuántas subredes necesitas.</li>
                <li>Elige un nuevo prefijo más largo (más bits de red).</li>
                <li>Calcula el tamaño del bloque: 2^(32 - prefijo).</li>
                <li>Genera los saltos sumando el tamaño del bloque.</li>
              </ol>
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Ejemplo práctico</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <p>
                Red 192.168.1.0/24 dividida en /26 genera 4 subredes de 64 IPs:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>192.168.1.0 - 192.168.1.63</li>
                <li>192.168.1.64 - 192.168.1.127</li>
                <li>192.168.1.128 - 192.168.1.191</li>
                <li>192.168.1.192 - 192.168.1.255</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Card className="border-border/60 bg-muted/30 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Tips rápidos</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Para redes /31 y /32 las IPs útiles coinciden con las IPs totales. En
          redes más grandes, la primera IP es la de red +1 y la última es la de
          broadcast -1.
        </CardContent>
      </Card>
    </main>
  );
}
