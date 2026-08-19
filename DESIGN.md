# Referencia de diseño — News Explorer

Datos extraídos del archivo `Tu proyecto final es.fig` (Figma). Úsalos como fuente
de verdad al maquetar. Los valores de **color exactos** deben confirmarse en el
panel **Inspect / Dev Mode** de Figma (los nombres de estilo sí están confirmados).

## Tipografías

| Rol | Fuente | Pesos | Uso |
| --- | --- | --- | --- |
| Título | **Roboto Slab** | Regular, Bold | Logo, título del hero, títulos de sección y de tarjeta |
| UI / cuerpo | **Roboto** | Regular, Medium, Black | Navegación, botones, subtítulos, formularios |
| Texto de tarjeta | **Source Sans Pro** | Regular, Bold | Fecha, texto y fuente de las NewsCard |
| Detalle | **Inter** | Medium | Etiquetas de formulario y textos pequeños |

## Estilos de color (nombres confirmados; hex por verificar en Figma)

- `main/primary` — azul de acento (botones, enlaces activos)
- `main/black` — texto y fondo oscuro (~#1A1B22)
- `main/white` — blanco
- `main/white-hover` — blanco con hover
- `simulator/gray/text`, `simulator/gray/divider`, `simulator/gray/selected` — grises

## Pantallas del diseño

- `Main_Not_Logged_In` / `Main_Logged_In`
- `Main_Results_Not_Logged_In` / `Main_Results_Logged_In`
- `Saved_News_Logged_In`
- `Server_Error`
- `Overlay` (popup de autenticación)

## Textos exactos

- **Logo:** NewsExplorer
- **Nav:** Inicio · Iniciar sesión (con sesión: Artículos guardados · Cerrar sesión)
- **Hero título:** ¿Qué está pasando en el mundo?
- **Hero subtítulo:** Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu cuenta personal.
- **Buscador:** placeholder «Introduce un tema» · botón «Buscar»
- **Resultados:** Resultados de la búsqueda · botón «Mostrar más»
- **Card (sin sesión) tooltip:** Inicia sesión para guardar artículos
- **Card guardada tooltip:** Eliminar de guardados
- **About título:** Acerca del autor
- **About texto:** «Este bloque describe al autor del proyecto. Aquí debe indicar tu
  nombre, a qué te dedicas y qué tecnologías de desarrollo conoces. También puedes
  hablar de tu experiencia con Practicum/TripleTen, de lo que aprendiste allí y cómo
  puedes ayudar a los clientes potenciales.»
- **Saved header:** «{Nombre}, tienes {N} artículos guardados»
- **Saved keywords:** «Por palabras clave: Naturaleza, Yellowstone, y 2 más»
- **Footer:** © {año} Supersite, Powered by News API · enlaces: Inicio, Practicum ·
  redes: GitHub, Facebook, VK
- **Popup:** Inicia sesión / Inscribirse · enlace «o Inscribirse» / «o Iniciar sesión»
- **Validación formulario:** «Este es un campo obligatorio.»

## Tarjetas de ejemplo (para poblar la maqueta con datos realistas)

| keyword | Título | Fuente | Fecha |
| --- | --- | --- | --- |
| — | Los científicos no saben por qué la estrella polar es tan extraña | treehugger | 16 de marzo de 2020 |
| Parques | El Grand Teton renueva el histórico Camino de la Cresta | National parks traveler | 4 de noviembre de 2020 |
| Yellowstone | Fotos nostálgicas hechas por turistas en los parques nacionales de EE. UU. | national geographic | 19 de octubre de 2020 |
| Naturaleza | La naturaleza te hace mejor | national geographic | 19 de febrero de 2019 |
| Naturaleza | Todo el mundo necesita un lugar de reflexión en la naturaleza | national geographic | — |

## Assets de imagen (dentro del .fig)

El `.fig` incluye 18 imágenes (fondo del hero, avatar del autor y fotos de las
tarjetas), muchas en resolución original (hasta 4096 px / 16 MB). Antes de usarlas
hay que **recortarlas y optimizarlas** (WEBP/JPEG comprimido):

- **Hero:** foto de cielo estrellado (`georgia-de-lotz…unsplash`)
- **Avatar About:** retrato (`jakayla-toney…unsplash`)
- **Tarjetas:** polaris, grandteton, yellowstone, nature1, nature2, treehugger

> Nota: los nombres de archivo en el `.fig` son hashes de contenido; hay que
> identificar cada imagen visualmente antes de importarla a `src/images/`.
