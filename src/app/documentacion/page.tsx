import {
  CidrBitGridDiagram,
  CidrIpPrefixDiagram,
  CidrMaskDiagram,
} from "@/components/cidr-diagrams";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DocumentacionPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12">
      <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-2xl border border-border/60 bg-muted/30 p-5 text-sm text-muted-foreground lg:sticky lg:top-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            Índice
          </p>
          <nav className="mt-4 grid gap-2">
            <a className="hover:text-foreground" href="#intro">
              Introducción
            </a>
            <a className="hover:text-foreground" href="#que-es">
              ¿Qué es una red?
            </a>
            <a className="hover:text-foreground" href="#tipos">
              Tipos de redes
            </a>
            <a className="hover:text-foreground" href="#dispositivos">
              Dispositivos esenciales
            </a>
            <a className="hover:text-foreground" href="#direccionamiento">
              Direccionamiento IP
            </a>
            <a className="hover:text-foreground" href="#protocolos">
              Protocolos clave
            </a>
            <a className="hover:text-foreground" href="#osi">
              Modelo OSI
            </a>
            <a className="hover:text-foreground" href="#topologias">
              Topologías
            </a>
            <a className="hover:text-foreground" href="#rendimiento">
              Rendimiento
            </a>
            <a className="hover:text-foreground" href="#seguridad">
              Seguridad
            </a>
            <a className="hover:text-foreground" href="#wireless">
              Redes inalámbricas
            </a>
            <a className="hover:text-foreground" href="#cidr">
              CIDR y máscaras
            </a>
            <a className="hover:text-foreground" href="#notacion">
              Notación CIDR
            </a>
            <a className="hover:text-foreground" href="#prefijos">
              Prefijos y tamaños
            </a>
            <a className="hover:text-foreground" href="#dispositivos-capa">
              Dispositivos por capa
            </a>
            <a className="hover:text-foreground" href="#conceptos">
              Conceptos extra
            </a>
            <a className="hover:text-foreground" href="#ejemplo">
              Ejemplo completo
            </a>
          </nav>
        </aside>

        <div className="grid gap-10">
          <section id="intro" className="grid gap-4">
        <p className="text-sm font-medium text-muted-foreground">Documentación</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          CIDR en redes modernas
        </h1>
        <p className="text-base text-muted-foreground">
          CIDR (Classless Inter-Domain Routing) reemplazó al modelo antiguo por
          clases para asignar bloques de direcciones de forma mucho más precisa.
          En lugar de depender de rangos rígidos (A, B, C), CIDR usa un prefijo
          como /24 para indicar cuántos bits pertenecen a la red.
        </p>
        <p className="text-sm text-muted-foreground">
          En esta guía veremos desde los fundamentos de redes hasta conceptos de
          direccionamiento, protocolos y seguridad. La idea es que entiendas el
          “por qué” y el “para qué” de cada concepto, y puedas interpretar una
          red real con criterio técnico.
        </p>
        <p className="text-sm text-muted-foreground">
          Si vienes empezando, avanza en orden. Si ya tienes experiencia, puedes
          saltar directamente a la sección de CIDR, al modelo OSI o al análisis
          de dispositivos. Todo está organizado para consulta rápida.
        </p>
          </section>

          <section id="que-es" className="grid gap-4">
            <h2 className="text-2xl font-semibold">¿Qué es una red?</h2>
            <p className="text-sm text-muted-foreground">
              Una red es un conjunto de computadoras y dispositivos conectados
              entre sí para compartir datos y recursos (archivos, impresoras,
              Internet, etc.). Lo importante es que existe un medio de
              comunicación y un conjunto de reglas que permite el intercambio
              de información.
            </p>
            <p className="text-sm text-muted-foreground">
              En una red, cada equipo cumple un rol: algunos producen datos,
              otros los consumen, y otros administran el flujo. Comprender
              estos roles ayuda a diagnosticar fallos y diseñar infraestructuras
              eficientes.
            </p>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Ejemplos:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Wi-Fi del hogar.</li>
                <li>Red LAN de una oficina.</li>
                <li>Internet (la red más grande).</li>
              </ul>
            </div>
          </section>

          <section id="tipos" className="grid gap-4">
            <h2 className="text-2xl font-semibold">Tipos de redes</h2>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <p>
                Se clasifican según el tamaño y la cobertura. Esta clasificación
                te ayuda a dimensionar equipos, costos y tecnologías asociadas.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>LAN: área pequeña (casa, escuela, oficina).</li>
                <li>WAN: área extensa (países o continentes).</li>
                <li>MAN: cobertura metropolitana (una ciudad).</li>
                <li>PAN: red personal muy cercana (Bluetooth).</li>
              </ul>
              <p>
                En la práctica, una organización suele combinar varios tipos:
                por ejemplo, LANs internas conectadas por una WAN corporativa.
              </p>
            </div>
          </section>

          <section id="dispositivos" className="grid gap-4">
            <h2 className="text-2xl font-semibold">Dispositivos esenciales</h2>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <p>
                El hardware de red permite que los datos viajen desde un origen
                hasta un destino. Cada dispositivo cumple una función concreta
                dentro de la topología.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Router: conecta redes diferentes (hogar ↔ Internet).</li>
                <li>Switch: conecta equipos dentro de la misma red.</li>
                <li>Modem: enlaza con el proveedor de Internet.</li>
                <li>Access Point: brinda conectividad Wi-Fi.</li>
                <li>Firewall: controla y protege el tráfico.</li>
              </ul>
              <p>
                Un diseño correcto considera redundancia, capacidad y seguridad.
                Por eso no basta con “conectar cables”: hay que entender el rol
                de cada equipo.
              </p>
            </div>
          </section>

          <section id="direccionamiento" className="grid gap-4">
            <h2 className="text-2xl font-semibold">Direccionamiento IP</h2>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <p>
                Cada dispositivo necesita una IP para identificarse, igual que
                una dirección postal.
              </p>
              <p>
                Una IP permite saber a qué red pertenece un equipo y cómo
                alcanzarlo. Además, sirve para segmentar y controlar el acceso
                entre diferentes zonas de una infraestructura.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>IPv4: formato clásico como 192.168.1.1.</li>
                <li>IPv6: formato más largo para expansión global.</li>
                <li>IP pública: visible en Internet.</li>
                <li>IP privada: usada dentro de redes locales.</li>
              </ul>
              <p>
                Distinguir entre públicas y privadas es clave para entender NAT,
                seguridad perimetral y acceso remoto.
              </p>
            </div>
          </section>

          <section id="protocolos" className="grid gap-4">
            <h2 className="text-2xl font-semibold">Protocolos clave</h2>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <p>
                Los protocolos son reglas que siguen los dispositivos para
                comunicarse.
              </p>
              <p>
                Cada protocolo resuelve un problema específico: algunos priorizan
                confiabilidad, otros velocidad, y otros seguridad o facilidad de
                acceso. En conjunto, permiten que Internet funcione como un
                ecosistema coordinado.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>TCP: entrega fiable y ordenada.</li>
                <li>UDP: rápido, menos confiable.</li>
                <li>HTTP/HTTPS: navegación web.</li>
                <li>FTP: transferencia de archivos.</li>
                <li>DNS: traduce dominios a IPs.</li>
                <li>DHCP: asigna IPs automáticamente.</li>
              </ul>
              <p>
                Aprender protocolos te ayuda a leer capturas de tráfico y a
                identificar dónde se produce un fallo en la comunicación.
              </p>
            </div>
          </section>

          <section id="cidr" className="grid gap-6">
        <h2 className="text-2xl font-semibold">Máscara, bits y prefijo</h2>
        <div className="grid gap-4 text-sm text-muted-foreground">
          <p>
            Una máscara de red es un patrón de bits: los 1 indican la parte de red
            y los 0 indican la parte de host. Por eso, una máscara con 32 bits en 1
            equivale a un prefijo /32 y representa una sola IP.
          </p>
          <p>
            Pensar en bits ayuda a comprender cómo se calcula el rango: cuantos
            más bits para la red, menos hosts disponibles. Y viceversa.
          </p>
          <div className="rounded-2xl border border-border/60 bg-muted/30 p-5">
            <div className="grid gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Esquema binario
            </div>
            <div className="mt-3 grid gap-2 text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-foreground">Binario</span>
                <span className="rounded-full bg-background px-3 py-1 font-mono text-xs">
                  11111111.11111111.11111111.11111111
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-foreground">Decimal</span>
                <span className="rounded-full bg-background px-3 py-1 font-mono text-xs">
                  255.255.255.255
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-foreground">CIDR</span>
                <span className="rounded-full bg-background px-3 py-1 font-mono text-xs">
                  /32
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                /32 significa 32 bits en 1. En IPv4 esto indica una única dirección.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="notacion" className="grid gap-6">
        <h2 className="text-2xl font-semibold">Notación CIDR: cómo se interpreta</h2>
        <div className="grid gap-4 text-sm text-muted-foreground">
          <p>
            La notación CIDR une una dirección base con un prefijo. En
            192.168.1.0/24 la IP marca el inicio del bloque y el /24 indica que
            24 bits son de red. El resto queda para hosts.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              La IP base representa la red (bits de host en 0).
            </li>
            <li>
              El prefijo define cuántos bits están “fijos” para identificar la red.
            </li>
            <li>
              La máscara es el prefijo expresado en decimal (por ejemplo /24 →
              255.255.255.0).
            </li>
            <li>
              El rango va desde la IP de red hasta el broadcast (salvo /31 y /32).
            </li>
          </ul>
          <p>
            Estos esquemas resumen la lectura visual del prefijo, con colores para
            distinguir red y hosts.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-border/60 bg-muted/30 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              IP + prefijo
            </div>
            <div className="mt-4 flex items-center justify-center">
              <CidrIpPrefixDiagram baseIp="192.168.1.0" prefix={24} />
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-muted/30 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Bits de red vs hosts
            </div>
            <CidrBitGridDiagram prefix={24} />
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-muted/30 p-5">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Máscara equivalente en decimal
          </div>
          <div className="mt-4">
            <CidrMaskDiagram prefix={24} />
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle>Antes: clases A, B, C</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-muted-foreground">
            <p>
              El modelo antiguo separaba las redes según el primer octeto:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Clase A: /8 (16 millones de IPs por red).</li>
              <li>Clase B: /16 (65 mil IPs por red).</li>
              <li>Clase C: /24 (254 IPs útiles por red).</li>
            </ul>
            <p>
              Era fácil de memorizar, pero muy ineficiente: muchas empresas
              recibían bloques enormes sin necesidad real.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle>Ahora: CIDR</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm text-muted-foreground">
            <p>
              CIDR permite definir prefijos de longitud variable (/17, /20,
              /28...). Esto hace que la asignación sea flexible y escalable.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Se reduce el desperdicio de direcciones.</li>
              <li>Se pueden sumarizar rutas para simplificar el enrutamiento.</li>
              <li>Las redes se adaptan mejor al crecimiento real.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <section id="osi" className="grid gap-6">
        <h2 className="text-2xl font-semibold">Modelo OSI explicado</h2>
        <p className="text-sm text-muted-foreground">
          El modelo OSI divide las comunicaciones en capas. Esto permite entender
          qué hace cada dispositivo y en qué nivel opera dentro de la red.
        </p>
        <p className="text-sm text-muted-foreground">
          No es necesario memorizarlo de golpe: lo importante es relacionar cada
          capa con ejemplos reales. Así podrás identificar en qué nivel ocurre un
          problema y qué herramientas usar.
        </p>
        <p className="text-sm text-muted-foreground">
          Piensa en el OSI como un LEGO: cada capa aporta su pieza. La capa física
          coloca los “bloques” (señal y medio), la de enlace los une con reglas de
          vecinos, la de red decide el camino, la de transporte asegura el envío,
          y las capas superiores presentan el resultado final a la aplicación.
        </p>
        <div className="grid gap-4">
          {[
            {
              title: "Capa 1 - Física",
              body: "Medios y señales: cables, radio, conectores y niveles eléctricos.",
              color: "bg-sky-100 text-sky-700 border-sky-200",
            },
            {
              title: "Capa 2 - Enlace",
              body: "Tramas, MAC, switching y VLANs. Aquí trabajan los switches.",
              color: "bg-emerald-100 text-emerald-700 border-emerald-200",
            },
            {
              title: "Capa 3 - Red",
              body: "IP, subredes y routing. Los routers operan en esta capa.",
              color: "bg-amber-100 text-amber-700 border-amber-200",
            },
            {
              title: "Capa 4 - Transporte",
              body: "TCP/UDP, puertos y control de errores entre aplicaciones.",
              color: "bg-rose-100 text-rose-700 border-rose-200",
            },
            {
              title: "Capa 5 - Sesión",
              body: "Gestión de sesiones y control de diálogo entre sistemas.",
              color: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
            },
            {
              title: "Capa 6 - Presentación",
              body: "Formato de datos, cifrado y compresión.",
              color: "bg-violet-100 text-violet-700 border-violet-200",
            },
            {
              title: "Capa 7 - Aplicación",
              body: "Servicios de red visibles: HTTP, DNS, correo, APIs.",
              color: "bg-indigo-100 text-indigo-700 border-indigo-200",
            },
          ].map((item) => (
            <Card key={item.title} className="border-border/60 shadow-sm">
              <CardHeader className="flex flex-col gap-2">
                <span
                  className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${item.color}`}
                >
                  {item.title}
                </span>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {item.body}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="rounded-2xl border border-border/60 bg-muted/30 p-5 text-sm text-muted-foreground">
          <h3 className="text-base font-semibold text-foreground">
            Paso a paso en una red real (detallado)
          </h3>
          <p className="mt-2">
            Imagina un usuario en la red A que solicita una API alojada en la red
            B. Ambas redes están conectadas por un router y cada red tiene su
            propio switch. Vamos a seguir la petición desde el equipo del usuario
            hasta el servidor, capa por capa, como si cada LEGO se fuera encajando
            con cuidado.
          </p>

          <div className="mt-4 grid gap-4">
            <div className="grid gap-2">
              <h4 className="text-sm font-semibold text-foreground">
                1) Capa 7 - Aplicación (programa del usuario)
              </h4>
              <p>
                El proceso inicia en la aplicación: un navegador, una app móvil o
                un cliente HTTP. Esta aplicación construye la solicitud (método,
                headers, body). El “programa” entrega esos datos al sistema
                operativo para que los envíe por la red.
              </p>
            </div>

            <div className="grid gap-2">
              <h4 className="text-sm font-semibold text-foreground">
                2) Capa 6 - Presentación (librerías y sistema operativo)
              </h4>
              <p>
                Aquí se define el formato y, si corresponde, el cifrado. En una
                conexión HTTPS, las librerías criptográficas del sistema o del
                runtime (por ejemplo, OpenSSL) encapsulan y cifran los datos. Esta
                capa asegura que el receptor pueda “entender” y descifrar el
                contenido.
              </p>
            </div>

            <div className="grid gap-2">
              <h4 className="text-sm font-semibold text-foreground">
                3) Capa 5 - Sesión (control de diálogo)
              </h4>
              <p>
                El sistema operativo y la aplicación mantienen el contexto: si la
                sesión está abierta, si hay tokens o cookies válidas y si la
                conexión puede reutilizarse. En la práctica, esta capa se percibe
                como “estado” de la comunicación.
              </p>
            </div>

            <div className="grid gap-2">
              <h4 className="text-sm font-semibold text-foreground">
                4) Capa 4 - Transporte (TCP/UDP en el OS)
              </h4>
              <p>
                El sistema operativo crea un socket y decide el protocolo de
                transporte (TCP para fiabilidad, UDP para velocidad). TCP divide
                los datos en segmentos, los numera y exige confirmaciones (ACK).
                Esto garantiza que el mensaje llegue completo y en orden.
              </p>
            </div>

            <div className="grid gap-2">
              <h4 className="text-sm font-semibold text-foreground">
                5) Capa 3 - Red (IP en el OS)
              </h4>
              <p>
                El sistema operativo encapsula los segmentos TCP en paquetes IP,
                añadiendo la IP origen y la IP destino (red B). Al detectar que la
                IP destino no está en la subred local, decide enviar el paquete al
                gateway (router) configurado.
              </p>
            </div>

            <div className="grid gap-2">
              <h4 className="text-sm font-semibold text-foreground">
                6) Capa 2 - Enlace (tarjeta de red + driver)
              </h4>
              <p>
                Ahora entra en juego la tarjeta de red (NIC) con su driver. Para
                enviar la trama Ethernet necesita una MAC destino. Como el destino
                está fuera de la red local, la MAC destino será la del router.
              </p>
              <p>
                Si el equipo no conoce la MAC del gateway, utiliza ARP: envía una
                petición broadcast “¿Quién tiene la IP del gateway?”; el router
                responde con su MAC. El sistema guarda esa relación IP↔MAC en la
                caché ARP.
              </p>
              <p>
                Con la MAC destino resuelta, el equipo encapsula el paquete IP en
                una trama Ethernet y la envía al switch.
              </p>
            </div>

            <div className="grid gap-2">
              <h4 className="text-sm font-semibold text-foreground">
                7) Capa 1 - Física (medio de transmisión)
              </h4>
              <p>
                La trama se convierte en señales eléctricas u ondas de radio y se
                transmite por cable o Wi‑Fi hacia el switch.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4">
            <h4 className="text-sm font-semibold text-foreground">
              Qué hacen los dispositivos intermedios
            </h4>
            <p>
              El <strong>switch</strong> opera en capa 2. Al recibir la trama,
              observa la MAC origen y la guarda en su tabla de MACs (aprendizaje).
              Luego busca la MAC destino: si la conoce, reenvía por el puerto
              correspondiente; si no la conoce, hace flooding (envía por todos los
              puertos excepto el de entrada). Con el tiempo, la tabla se completa.
            </p>
            <p>
              El <strong>router</strong> recibe la trama, descapsula hasta la capa
              3 y analiza la IP destino. Consulta su tabla de rutas para decidir
              la mejor interfaz de salida hacia la red B. Luego crea una nueva
              trama de capa 2 con la MAC del siguiente salto (o del host destino
              si ya está en la red B).
            </p>
            <p>
              En la red B, el switch repite el proceso de aprendizaje y entrega la
              trama al servidor. El servidor descapsula las capas en orden
              inverso (física → enlace → red → transporte → sesión → presentación →
              aplicación) y procesa la petición. La respuesta vuelve al cliente
              siguiendo el camino inverso.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-background p-5">
          <h3 className="text-base font-semibold text-foreground">
            Flujo animado (capa por capa)
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            El diagrama muestra cómo los datos “viajan” desde el host A al host B.
            Las líneas animadas representan los segmentos que atraviesan el switch
            (capa 2) y el router (capa 3). Cada paso va “apilando” las capas del
            modelo OSI hasta llegar a la aplicación del servidor.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-border/60 bg-muted/30 p-4">
            <svg
              className="h-56 w-full"
              viewBox="0 0 720 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Flujo animado de paquetes entre dos hosts con switch y router"
            >
              <rect x="24" y="16" width="120" height="36" rx="10" className="fill-card" />
              <text x="84" y="39" textAnchor="middle" className="fill-foreground text-[12px] font-semibold">
                Host A
              </text>
              <rect x="576" y="16" width="120" height="36" rx="10" className="fill-card" />
              <text x="636" y="39" textAnchor="middle" className="fill-foreground text-[12px] font-semibold">
                Host B
              </text>

              <rect x="250" y="16" width="90" height="36" rx="10" className="fill-card" />
              <text x="295" y="39" textAnchor="middle" className="fill-muted-foreground text-[11px]">
                Switch
              </text>
              <rect x="380" y="16" width="90" height="36" rx="10" className="fill-card" />
              <text x="425" y="39" textAnchor="middle" className="fill-muted-foreground text-[11px]">
                Router
              </text>

              <line x1="84" y1="70" x2="84" y2="200" className="stroke-border" strokeWidth="2" />
              <line x1="636" y1="70" x2="636" y2="200" className="stroke-border" strokeWidth="2" />

              <line x1="84" y1="80" x2="636" y2="80" className="flow-line" strokeWidth="2" />
              <line x1="84" y1="110" x2="636" y2="110" className="flow-line flow-delay-1" strokeWidth="2" />
              <line x1="84" y1="140" x2="636" y2="140" className="flow-line flow-delay-2" strokeWidth="2" />
              <line x1="84" y1="170" x2="636" y2="170" className="flow-line flow-delay-3" strokeWidth="2" />

              <circle cx="295" cy="95" r="10" className="fill-amber-300" />
              <circle cx="425" cy="125" r="10" className="fill-rose-300" />
              <text x="295" y="99" textAnchor="middle" className="fill-foreground text-[10px]">L2</text>
              <text x="425" y="129" textAnchor="middle" className="fill-foreground text-[10px]">L3</text>
            </svg>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            L2 indica decisiones a nivel de enlace (switch). L3 indica decisiones
            a nivel de red (router). El resto de capas se “apilan” en el host y se
            desempacan al llegar.
          </p>
        </div>
      </section>

      <Separator />

      <section id="topologias" className="grid gap-6">
        <h2 className="text-2xl font-semibold">Topologías de red</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          <p>
            Una topología describe cómo se conectan los nodos. Algunas son más
            económicas, otras más resilientes. La elección afecta rendimiento,
            costos y tolerancia a fallos.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Estrella: todo pasa por un nodo central.</li>
            <li>Bus: un cable troncal conecta a todos.</li>
            <li>Anillo: cada nodo conecta con el siguiente en círculo.</li>
            <li>Malla: múltiples caminos redundantes.</li>
          </ul>
        </div>
      </section>

      <section id="rendimiento" className="grid gap-6">
        <h2 className="text-2xl font-semibold">Ancho de banda y latencia</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          <p>
            El ancho de banda indica cuánta información puede pasar a la vez.
            La latencia es el tiempo de retraso. El throughput es la velocidad
            real obtenida en condiciones normales.
          </p>
          <p>
            Un enlace puede tener gran ancho de banda pero alta latencia, lo que
            afecta aplicaciones en tiempo real. Por eso se analizan ambas métricas
            y se miden con pruebas repetidas.
          </p>
        </div>
      </section>

      <section id="seguridad" className="grid gap-6">
        <h2 className="text-2xl font-semibold">Seguridad en redes</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          <p>
            La seguridad busca proteger confidencialidad, integridad y
            disponibilidad. No basta con un firewall: se requieren capas de
            defensa complementarias.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Cifrado de datos.</li>
            <li>Firewalls y segmentación.</li>
            <li>VPN para conexiones seguras.</li>
            <li>Autenticación y control de acceso.</li>
            <li>Antivirus e IDS/IPS.</li>
          </ul>
          <p>
            En entornos empresariales se añaden registros, monitoreo y respuesta
            ante incidentes para detectar amenazas a tiempo.
          </p>
        </div>
      </section>

      <section id="wireless" className="grid gap-6">
        <h2 className="text-2xl font-semibold">Redes inalámbricas</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          <p>
            Las redes inalámbricas ofrecen movilidad y flexibilidad, pero requieren
            un diseño cuidadoso para evitar interferencias y garantizar cobertura.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Wi-Fi (estándares 802.11).</li>
            <li>Bluetooth para conexiones personales.</li>
            <li>Redes celulares 4G/5G.</li>
          </ul>
          <p>
            En Wi-Fi es clave planificar canales, potencia y seguridad (WPA2/WPA3)
            para mantener estabilidad.
          </p>
        </div>
      </section>

      <section id="prefijos" className="grid gap-6">
        <h2 className="text-2xl font-semibold">Cómo leer un prefijo CIDR</h2>
        <div className="grid gap-4 text-sm text-muted-foreground">
          <p>
            El prefijo indica cuántos bits pertenecen a la red. El resto de bits
            se reserva para hosts. Por ejemplo, en /24 la red ocupa 24 bits y
            quedan 8 bits para hosts.
          </p>
          <p>
            Esta relación es la base del subnetting: cuando aumentas el prefijo,
            divides la red en subredes más pequeñas para segmentar usuarios o
            servicios.
          </p>
          <div className="rounded-2xl border border-border/60 bg-muted/30 p-5">
            <div className="grid gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-foreground">/24</span>
                <span className="text-xs text-muted-foreground">
                  8 bits para hosts → 2^8 = 256 IPs totales
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-foreground">/29</span>
                <span className="text-xs text-muted-foreground">
                  3 bits para hosts → 2^3 = 8 IPs totales
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-foreground">/30</span>
                <span className="text-xs text-muted-foreground">
                  2 bits para hosts → 2^2 = 4 IPs totales (2 útiles)
                </span>
              </div>
            </div>
          </div>
          <p>
            Las IPs útiles excluyen la dirección de red y la de broadcast (salvo
            /31 y /32). Por eso, en /24 hay 256 IPs totales pero 254 útiles.
          </p>
          <p>
            En redes empresariales, calcular correctamente estos valores evita
            desperdicio y previene problemas de direccionamiento futuro.
          </p>
        </div>
      </section>

      <Separator />

      <section id="dispositivos-capa" className="grid gap-6">
        <h2 className="text-2xl font-semibold">Dispositivos y su capa</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>Router (Capa 3)</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <p>
                El router toma decisiones de enrutamiento según la red de destino.
                Analiza la IP y envía paquetes entre subredes distintas.
              </p>
              <p>
                También puede aplicar políticas de calidad de servicio, filtrado
                y rutas de respaldo. Es el corazón de la conectividad entre redes.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Usa tablas de rutas y protocolos dinámicos.</li>
                <li>Conecta múltiples redes y aplica políticas de tránsito.</li>
                <li>Opera principalmente en la capa 3 del modelo OSI.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>Switch (Capa 2)</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <p>
                El switch envía tramas dentro de la misma red basándose en las
                direcciones MAC. No enruta entre subredes por defecto.
              </p>
              <p>
                Los switches modernos agregan funciones de seguridad, como
                port-security y control de tormentas de broadcast.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Segmenta el tráfico a nivel de enlace.</li>
                <li>Soporta VLANs para separar dominios de broadcast.</li>
                <li>Enrutamiento solo en switches de capa 3 específicos.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>Modem</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <p>
                El modem conecta la red local con el proveedor de Internet. Convierte
                señales físicas (cable, fibra o DSL) en tráfico IP utilizable.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Se ubica en el borde de la red doméstica o empresarial.</li>
                <li>Trabaja junto al router para dar acceso a Internet.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>Servidor DHCP</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <p>
                Asigna IPs de forma automática. Define rango, gateway, DNS y
                tiempo de concesión para los clientes.
              </p>
              <p>
                Al centralizar la configuración, evita inconsistencias y facilita
                la administración en redes grandes.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Reduce errores de configuración manual.</li>
                <li>Se apoya en broadcast dentro de la red local.</li>
                <li>Trabaja en conjunto con routers o servidores dedicados.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>Firewall</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <p>
                Aplica políticas de seguridad filtrando tráfico por IP, puertos,
                protocolos y estado de conexión.
              </p>
              <p>
                Los firewalls de nueva generación pueden inspeccionar contenido
                a nivel de aplicación y detectar amenazas avanzadas.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Puede operar en capa 3/4 e incluso capa 7.</li>
                <li>Define reglas de acceso entre zonas.</li>
                <li>Inspección profunda para detectar amenazas.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>Access Point</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <p>
                Extiende la red cableada a dispositivos inalámbricos. Opera en la
                capa 2 y suele integrarse con switches y controladores.
              </p>
              <p>
                En entornos grandes, un controlador central gestiona múltiples
                puntos de acceso para ofrecer roaming sin cortes.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Gestiona SSIDs, autenticación y roaming.</li>
                <li>Convierte tramas Wi-Fi a Ethernet.</li>
                <li>Puede aplicar segmentación por VLAN.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>IDS/IPS</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 text-sm text-muted-foreground">
              <p>
                Sistemas de detección y prevención de intrusiones que monitorean
                patrones de tráfico sospechosos en tiempo real.
              </p>
              <p>
                Se apoyan en firmas y análisis de comportamiento para detectar
                ataques antes de que causen daños.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Operan entre capas 3 y 7 según la inspección.</li>
                <li>Alertan o bloquean tráfico malicioso.</li>
                <li>Complementan a los firewalls perimetrales.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section className="grid gap-4">
        <h2 className="text-2xl font-semibold">Beneficios clave</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Eficiencia</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Ajusta el tamaño exacto de la red según la necesidad real.
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Escalabilidad</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Permite crecer sin depender de bloques rígidos predefinidos.
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Routing limpio</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              La sumarización de prefijos reduce tablas de rutas y complejidad.
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="conceptos" className="grid gap-4">
        <h2 className="text-2xl font-semibold">Conceptos adicionales útiles</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>Gateway y rutas</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              El gateway es la puerta de salida de una subred. Cuando la IP de
              destino está fuera de la red local, el equipo envía el tráfico al
              router mediante su gateway configurado.
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>Broadcast y dominios</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Cada subred tiene un broadcast propio. Las VLANs ayudan a dividir
              dominios de broadcast para mejorar rendimiento y seguridad.
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>NAT</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Traduce direcciones privadas a públicas. Permite que múltiples
              equipos compartan una misma IP pública hacia Internet.
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>DNS y servicios</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              DNS traduce nombres a IPs. Es esencial para acceder a servicios sin
              memorizar direcciones numéricas.
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>ARP y MAC</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              ARP resuelve IPs a direcciones MAC dentro de una red local. Esto
              permite que los switches entreguen tramas al dispositivo correcto.
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>MTU</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              La MTU define el tamaño máximo de una trama. Si un paquete supera
              la MTU, se fragmenta o se descarta según la configuración.
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>QoS</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              La calidad de servicio prioriza tráfico sensible a latencia como
              voz o video, evitando cortes en momentos de congestión.
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>VPN</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Una VPN crea un túnel cifrado para conectar redes remotas o usuarios
              móviles con seguridad sobre Internet.
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="ejemplo" className="grid gap-4">
        <h2 className="text-2xl font-semibold">Ejemplo completo</h2>
        <div className="rounded-2xl border border-border/60 bg-muted/30 p-5 text-sm text-muted-foreground">
          <p>
            Red: 10.0.8.0/21 → Máscara 255.255.248.0. Esto agrupa ocho redes /24.
            El rango completo va desde 10.0.8.0 hasta 10.0.15.255. La primera IP
            útil es 10.0.8.1 y la última 10.0.15.254.
          </p>
          <p className="mt-3">
            Este tipo de ejercicio te permite visualizar el salto entre subredes
            y cómo cambia el número de hosts. Practicar con distintos prefijos
            consolida el dominio de CIDR y evita errores al planificar redes.
          </p>
        </div>
      </section>
        </div>
      </div>
    </main>
  );
}
