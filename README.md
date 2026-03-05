# Reverse — Sitio de marketing

Sitio de marketing para **Reverse** (Reverse Sourcing + Reverse Marketplace): valorización, liquidación y venta de inventario industrial y activos. Objetivo: generar reuniones calificadas y llevar usuarios a marketplaces activos y subastas.

## Requisitos

- Node.js 18+
- npm

## Cómo ejecutar en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Si localhost usa otro puerto (3001, 3002, 3003…) o no carga

Puede que haya varias instancias de `next dev` o otros proyectos usando el puerto 3000. Para dejar solo una y usar el 3000:

```bash
npm run dev:stop
npm run dev
```

O en un solo paso: `npm run dev:fresh` (para el servidor anterior y arranca de nuevo en el 3000).

### Que el servidor siga aunque cierres la terminal

```bash
npm run dev:keep
```

El servidor queda en segundo plano. Para pararlo cuando quieras:

```bash
npm run dev:stop
```

### Si la página sale sin estilos (solo texto negro/azul)

1. Para el servidor (Ctrl+C).
2. Borra la caché y vuelve a arrancar:

```bash
rm -rf .next
npm run dev
```

3. Abre **http://localhost:3000** en ventana de incógnito o haz **recarga forzada** (Cmd+Shift+R en Mac, Ctrl+Shift+R en Windows).

## Scripts

| Comando        | Descripción              |
|----------------|--------------------------|
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción     |
| `npm run start`| Servidor de producción  |
| `npm run lint` | Ejecutar ESLint         |

## Estructura relevante

- **`src/app/`** — Páginas (App Router): `page.tsx` (Home), `nosotros`, `que-hacemos`, `marketplaces`, `contacto`, `privacidad`, `terminos`.
- **`src/components/`** — Componentes reutilizables: `Header`, `Footer`, `Button`, y secciones del home en `home/`.
- **`src/data/marketplaces.ts`** — Datos mock de marketplaces, subastas, pilares, proceso, FAQ, testimonios y logos de clientes.
- **`src/lib/brand.ts`** — Tokens de marca (colores, tipografía, espaciado). Referencia para mantener consistencia.
- **`tailwind.config.ts`** — Colores (lime `#B6FF3B`, navy `#0B1F3B`), fuentes (Inter), bordes y sombras.

## Cómo cambiar colores y tipografía

- **Colores:** edita `tailwind.config.ts` → `theme.extend.colors.reverse` (lime, navy, black, secondary, muted, border, soft-bg). Los componentes usan clases como `text-reverse-lime`, `bg-reverse-navy`.
- **Tipografía:** en `src/app/layout.tsx` se carga Inter desde Google Fonts. Para cambiar a Manrope, importa `Manrope` de `next/font/google` y usa su variable en `tailwind.config.ts` para `fontFamily.sans`.
- **Tokens de referencia:** `src/lib/brand.ts` expone los mismos valores para uso en JS si lo necesitas.

## Cómo cargar un marketplace o subasta nueva

Todo se hace editando **un solo archivo**: **`src/data/marketplaces.ts`**.

### Pasos

1. Abre **`src/data/marketplaces.ts`**.
2. Localiza el array **`marketplacesData`** (empieza con `[` y una lista de objetos).
3. Añade un **nuevo objeto** con un **`id` único** (por ejemplo `"m4"` para un marketplace o `"a4"` para una subasta). No repitas ids que ya existan.
4. Rellena los campos:
   - **Obligatorios:** `id`, `title`, `description`, `type`, `status`, `tags`, `url`
   - **Opcionales:** `industry`, `country`, `endDate` (recomendado en subastas), `imageUrl`
5. Guarda el archivo. La página **/marketplaces** y el bloque del **home** que muestra marketplaces/subastas se actualizan solos (no hace falta tocar otro código).

### Campos importantes

| Campo      | Descripción |
|-----------|-------------|
| `type`    | `"marketplace"` para marketplace, `"auction"` para subasta. Define el filtro en la web. |
| `status`  | `"active"` (activo, se muestra como disponible) o `"upcoming"` (próximamente). |
| `url`     | Enlace al marketplace o a la subasta (puede ser interna o externa). |
| `endDate` | Fecha de cierre (ej. `"2025-06-30"`). Muy útil en subastas. |
| `tags`    | Array de palabras clave, ej. `["minería", "B2B"]`. |

### Ejemplo: marketplace nuevo

```js
{
  id: "m4",
  title: "Marketplace [Nombre]",
  description: "Breve descripción del marketplace.",
  type: "marketplace",
  status: "active",
  industry: "Energía",
  country: "Chile",
  tags: ["tag1", "tag2"],
  url: "https://tu-url.com/marketplace",
}
```

### Ejemplo: subasta nueva

```js
{
  id: "a4",
  title: "Subasta [Nombre]",
  description: "Breve descripción de la subasta.",
  type: "auction",
  status: "upcoming",
  industry: "Minería",
  country: "Chile",
  tags: ["subasta", "minería"],
  url: "https://tu-url.com/subasta",
  endDate: "2025-07-15",
}
```

Los filtros de la página **Marketplaces y subastas** (industria, país, tipo) se generan a partir de los datos; no hace falta configurarlos aparte.

## Enlaces a configurar

- **Reservar reunión (Calendly):** en el código se usa `https://calendly.com` como placeholder. Busca `CALENDLY_URL` o `calendly.com` y reemplaza por tu URL de Calendly.
- **Marketplaces / subastas:** las entradas en `marketplacesData` tienen un campo `url` que puede apuntar a tu marketplace o a una URL externa. Actualiza cada `url` con el enlace real.

## Formulario de contacto

- Validación en cliente (nombre, email obligatorios; email válido; mensaje obligatorio).
- Envío actual: **simulado** (`console.log`). Para producción conviene conectar a un backend o servicio (API, email, etc.).
- Se incluye un enlace **mailto** como alternativa para abrir el cliente de correo.

## Despliegue (Vercel)

1. Conecta el repo a Vercel.
2. Configura variables de entorno en Production y Preview si las usas.
3. Build command: `npm run build`; output: Next.js por defecto.

## Diseño

- **Tipografía:** Inter (Google Font).
- **Colores:** base neutra (blanco + gris carbón), acento verde/teal (`#0d9488`).
- **CTAs principales:** «Reservar reunión» (Calendly) y «Ver marketplaces y subastas» (enlace a `/marketplaces`).

## Logos y assets

- Los logos (Reverse, Duxpartners, Xinergy, Opticks.AI) se pueden colocar en **`public/`** (por ejemplo `public/logo-reverse.png`) y referenciarlos con `/logo-reverse.png`.
- Favicon: añade `app/icon.ico` o `app/icon.png` para reemplazar el icono por defecto de Next.js.

## Licencia

Uso interno / proyecto Reverse.
