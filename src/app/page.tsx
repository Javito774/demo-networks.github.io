export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12">
      <section className="grid gap-6 rounded-3xl border border-border/60 bg-muted/30 p-10 shadow-sm">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Redes modernas
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Entiende cómo se construye una red IP hoy
          </h1>
          <p className="text-base text-muted-foreground">
            CIDR hizo que las redes fueran flexibles y escalables. Aquí puedes
            ver cómo se calcula una red, su rango y las IPs disponibles, con un
            dashboard interactivo listo para explorar.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/playground"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Abrir playground
            </a>
            <a
              href="/documentacion"
              className="rounded-full border border-border/60 px-5 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              Ver documentación
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "CIDR claro",
            body: "Usa prefijos /24, /20 o /28 para dimensionar redes exactamente.",
          },
          {
            title: "Dashboard interactivo",
            body: "Ingresa IP y máscara para ver red, broadcast y rango en segundos.",
          },
          {
            title: "Aprendizaje visual",
            body: "Comprende la diferencia con las clases A, B y C con ejemplos reales.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
