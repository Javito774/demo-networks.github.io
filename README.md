# Demo Network

Aplicación en Next.js para explicar redes modernas con CIDR y un dashboard interactivo.

## Páginas

- Inicio: introducción a redes modernas y acceso rápido al dashboard.
- Documentación: explicación de CIDR vs clases A, B, C y sus beneficios.
- Playground: calculadora interactiva de red con IP, máscara/CIDR y rango.

## Comandos

- Desarrollo: `npm run dev`
- Build: `npm run build`
- Export estático (GitHub Pages): `npm run export`
- Lint: `npm run lint`

Luego abre el navegador en localhost:3000.

## GitHub Pages

Este proyecto se exporta como sitio estático. Configura la variable de entorno
`NEXT_PUBLIC_BASE_PATH` con el nombre del repositorio cuando publiques en
GitHub Pages. Ejemplo:

- `NEXT_PUBLIC_BASE_PATH=/mi-repo`

El resultado estará en la carpeta `out` después de ejecutar el export.
