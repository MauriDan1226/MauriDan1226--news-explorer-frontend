# News Explorer

Aplicación web full-stack para buscar noticias sobre cualquier tema y guardarlas
en una cuenta personal. Este repositorio contiene el **frontend en React**
correspondiente a la Etapa 1 (Etiquetado y JSX) del proyecto final.

## Tecnologías

- **React 18** (componentes funcionales + hooks)
- **React Router** para la navegación entre páginas
- **Vite** como herramienta de construcción y servidor de desarrollo
- **CSS** con metodología **BEM**, `normalize.css`, diseño responsivo (flexbox/grid)
  y fuentes conectadas vía `@font-face` (WOFF/WOFF2)

## Funcionalidades

- Página principal con buscador de noticias y listado de resultados en tarjetas.
- Página de artículos guardados (`/saved-news`).
- Página "No encontrado" (404) para rutas inexistentes.
- Ventana emergente de autenticación (iniciar sesión / inscribirse) con apertura
  y cierre.
- Diseño adaptable sin desplazamiento horizontal desde 320px.

## Estructura del proyecto

```
src/
├── components/   Componentes de React (cada uno con su .jsx y su .css)
├── utils/        Funciones auxiliares y llamadas a la API
├── images/       Imágenes e iconos SVG
└── vendor/       Recursos de terceros (normalize.css y fuentes)
```

## Rutas

| Ruta           | Página                         |
| -------------- | ------------------------------ |
| `/`            | Página principal               |
| `/saved-news`  | Artículos guardados            |
| `*`            | No encontrado (404)            |

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # construir para producción
npm run preview  # previsualizar la build de producción
```

## Diseño

El maquetado sigue el UI Kit de Figma del proyecto final de News Explorer.
