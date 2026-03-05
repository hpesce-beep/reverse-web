# Subir Reverse a GitHub y Vercel

## Qué tienes ya hecho

- Repositorio Git inicializado en el proyecto.
- Primer commit creado (rama `main`).
- `.gitignore` configurado (`node_modules`, `.next`, `.env*.local`, etc.).

---

## 1. GitHub — qué necesitas

- **Cuenta en GitHub** (github.com).
- **Nombre del repositorio** que quieras (ej. `reverse`, `reverse-web`, `reverse-marketing`).
- **Autenticación** para hacer push:
  - **Opción A (recomendada):** SSH. Tener una llave SSH agregada a tu cuenta GitHub.
  - **Opción B:** HTTPS. Usar un Personal Access Token (PAT) como contraseña cuando Git lo pida.

### Pasos en GitHub

1. Entra a [github.com/new](https://github.com/new).
2. **Repository name:** el nombre que elegiste (ej. `reverse`).
3. **Visibility:** Private o Public, a tu gusto.
4. **No** marques “Add a README”, “Add .gitignore” ni “Choose a license” (el proyecto ya tiene contenido).
5. Clic en **Create repository**.

En la página del repo recién creado verás la URL, por ejemplo:

- HTTPS: `https://github.com/TU_USUARIO/reverse.git`
- SSH: `git@github.com:TU_USUARIO/reverse.git`

---

## 2. Hacer el push desde tu máquina

En la terminal, desde la carpeta del proyecto:

```bash
cd "/Users/diegojorreto/Cursor Projects/Reverse"

# Añadir el remoto (sustituye TU_USUARIO y NOMBRE_REPO por los tuyos)
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
# Si usas SSH:
# git remote add origin git@github.com:TU_USUARIO/NOMBRE_REPO.git

# Subir la rama main
git push -u origin main
```

Si te pide usuario/contraseña con HTTPS, usa tu **usuario de GitHub** y como contraseña un **Personal Access Token** (Settings → Developer settings → Personal access tokens).

---

## 3. Vercel — qué necesitas

- **Cuenta en Vercel** (vercel.com, puedes entrar con GitHub).
- **Nada más** para un primer deploy: Vercel detecta Next.js y usa `npm run build` por defecto.

### Pasos en Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión (con GitHub si quieres).
2. **Add New…** → **Project**.
3. **Import Git Repository**: elige el repo de GitHub que acabas de crear (ej. `TU_USUARIO/reverse`).
4. Vercel rellena solo:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (o `next build`)
   - **Output Directory:** (vacío, por defecto)
5. Clic en **Deploy**.
6. En 1–2 minutos tendrás una URL tipo `reverse-xxx.vercel.app`. Opcional: luego puedes añadir un dominio propio en **Settings → Domains**.

---

## Resumen de “data” que necesitas

| Dónde   | Qué necesitas |
|--------|----------------|
| GitHub | Cuenta, nombre del repo, URL del repo (para `git remote add` y `git push`). |
| Push   | Autenticación: SSH (llave en GitHub) o HTTPS (usuario + Personal Access Token). |
| Vercel | Cuenta Vercel (con GitHub es lo más simple). Ninguna variable de entorno obligatoria para este proyecto. |

**Para este proyecto (djorreto/Reverse):**

```bash
cd "/Users/diegojorreto/Cursor Projects/Reverse"
git remote add origin https://github.com/djorreto/Reverse.git
git push -u origin main
```

Si el repo en GitHub se creó con "Add a README" y Git rechaza el push, usa:

```bash
git push -u origin main --force
```

(Eso sustituye el contenido actual del repo por el del proyecto local.)
