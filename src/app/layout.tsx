import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redes modernas con CIDR",
  description:
    "Dashboard interactivo para entender CIDR, rangos de IP y redes modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Demo Network
                </p>
                <p className="text-xs text-muted-foreground">
                  Redes modernas explicadas
                </p>
              </div>
              <nav className="flex items-center gap-4 text-sm font-medium">
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="/"
                >
                  Inicio
                </Link>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href="/documentacion"
                >
                  Documentación
                </Link>
                <Link
                  className="rounded-full bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
                  href="/playground"
                >
                  Playground
                </Link>
              </nav>
            </div>
          </header>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
