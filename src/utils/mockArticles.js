// Artículos de ejemplo tomados del diseño de Figma (textos e imágenes reales del
// UI Kit). Sirven para poblar la maqueta en la Etapa 1.1; en etapas posteriores
// se reemplazan por los datos que devuelva la API de noticias.

import cardStarry from '../images/card-starry.webp';
import cardMoose from '../images/card-moose.webp';
import cardYellowstone from '../images/card-yellowstone.webp';
import cardForest from '../images/card-forest.webp';
import cardLake from '../images/card-lake.webp';

export const exampleArticles = [
  {
    _id: '1',
    image: cardStarry,
    keyword: 'Espacio',
    date: '16 de marzo de 2020',
    title: 'Los científicos no saben por qué la estrella polar es tan extraña',
    text: 'Los seres humanos se han basado durante mucho tiempo en el cielo estrellado para adentrarse hacia nuevas fronteras, navegar hasta el fin del mundo y encontrar el camino de vuelta.',
    source: 'treehugger',
  },
  {
    _id: '2',
    image: cardMoose,
    keyword: 'Parques',
    date: '4 de noviembre de 2020',
    title: 'El Grand Teton renueva el histórico Camino de la Cresta',
    text: 'La reapertura de los senderos de la Cascada y del Cañón de la Muerte en sus picos marcó el primer paso en la realización de un ambicioso plan de conservación.',
    source: 'National parks traveler',
  },
  {
    _id: '3',
    image: cardYellowstone,
    keyword: 'Yellowstone',
    date: '19 de octubre de 2020',
    title: 'Fotos nostálgicas hechas por turistas en los parques nacionales de EE. UU.',
    text: 'Løvevild Golman y Helle Løvevild Golman son exploradores de National Geographic y fotógrafos de conservación que acaban de completar un proyecto y un libro.',
    source: 'national geographic',
  },
  {
    _id: '4',
    image: cardForest,
    keyword: 'Naturaleza',
    date: '19 de febrero de 2019',
    title: 'La naturaleza te hace mejor',
    text: 'Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas.',
    source: 'national geographic',
  },
  {
    _id: '5',
    image: cardLake,
    keyword: 'Naturaleza',
    date: '30 de enero de 2019',
    title: 'Todo el mundo necesita un lugar de reflexión en la naturaleza',
    text: 'Desde que leí el influyente libro de Richard Louv, "El último niño en el bosque", la idea de tener un "lugar de reflexión" especial se me ha quedado grabada.',
    source: 'national geographic',
  },
];
