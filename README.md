# News Explorer

Aplicación web para **buscar noticias** sobre cualquier tema (a través de una API
de noticias) y **guardarlas** en una cuenta personal. Este repositorio contiene el
**frontend en React** del proyecto final.

## 🔗 Demo

> _Pendiente de desplegar._ Se publicará en Vercel/Render y el enlace se colocará aquí.
> (Ej.: `https://news-explorer-tuusuario.vercel.app`)

## 🛠️ Tecnologías

- **React 18** (componentes funcionales + hooks)
- **React Router** para la navegación y las rutas protegidas
- **Vite** como herramienta de construcción y servidor de desarrollo
- **CSS** con metodología **BEM**, `normalize.css`, diseño responsivo (flexbox/grid)
  y fuentes vía `@font-face` (WOFF/WOFF2)

## ✨ Funcionalidades

- Buscador de noticias con listado de resultados en tarjetas y "Mostrar más".
- Registro e inicio de sesión mediante una API de autenticación.
- Página de artículos guardados (`/saved-news`) como **ruta protegida**.
- Página "No encontrado" (404) para rutas inexistentes.
- Ventana emergente de autenticación (iniciar sesión / inscribirse).
- Diseño adaptable sin desplazamiento horizontal desde 320px.

## 📋 Requisitos previos

- **Node.js** 18 o superior y **npm** 9 o superior.

## 🚀 Puesta en marcha

```bash
# 1. Clonar el repositorio
git clone https://github.com/MauriDan1226/MauriDan1226--news-explorer-frontend.git
cd MauriDan1226--news-explorer-frontend

# 2. Instalar dependencias
npm install

# 3. Crear el archivo de variables de entorno (ver más abajo)
cp .env.example .env

# 4. Arrancar el servidor de desarrollo
npm run dev
```

La app quedará disponible en `http://localhost:5173`.

## 🔑 Variables de entorno

Crea un archivo **`.env`** en la raíz (usa `.env.example` como plantilla). Vite
solo expone las variables que empiezan por `VITE_`:

| Variable             | Descripción                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `VITE_NEWS_API_KEY`  | Clave de la API de noticias. Regístrate gratis en https://newsapi.org y copia tu API key. |
| `VITE_AUTH_API_URL`  | URL base de la API de autenticación (registro/login). Temporalmente se puede crear en https://mockapi.io |

Ejemplo de `.env`:

```env
VITE_NEWS_API_KEY=tu_api_key_de_newsapi
VITE_AUTH_API_URL=https://xxxxxxxx.mockapi.io/api/v1
```

> ⚠️ El archivo `.env` **no** se sube al repositorio (está en `.gitignore`). Nunca
> publiques tus claves.

## 📁 Estructura del proyecto

```
src/
├── components/   Componentes de React (cada uno con su .jsx y su .css)
├── utils/        Funciones auxiliares y llamadas a la API
├── images/       Imágenes e iconos SVG
└── vendor/       Recursos de terceros (normalize.css y fuentes)
```

## 🧭 Rutas

| Ruta          | Página                         | Acceso     |
| ------------- | ------------------------------ | ---------- |
| `/`           | Página principal               | Público    |
| `/saved-news` | Artículos guardados            | Protegido  |
| `*`           | No encontrado (404)            | Público    |

## 📜 Scripts

```bash
npm run dev      # servidor de desarrollo
npm run build    # construir para producción
npm run preview  # previsualizar la build de producción
```

## 🎨 Diseño

El maquetado sigue el UI Kit de Figma del proyecto final de News Explorer
(fuentes Roboto, Roboto Slab, Source Sans Pro e Inter).
