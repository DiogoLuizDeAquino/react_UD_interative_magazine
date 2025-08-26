// Dados das revistas com todos os presidentes a terem um array 'pages'
export const MAGAZINES_DATA = {
  'dr-sergio': {
    presidentName: 'Dr. Sérgio Malburg Filho',
    management: 'Gestão 2023 - 2027',
    coverImage: '/images/imagesDrSergio/Dr. Sérgio Malburg Filho_image.jpeg',
    pages: [
      '/images/imagesDrSergio/DrSergio0.png',
      '/images/imagesDrSergio/Dr. Sérgio Malburg Filho_image.jpeg',
      '/images/imagesDrSergio/DrSergio1.png',
      '/images/imagesDrSergio/DrSergio2.png',
      '/images/imagesDrSergio/dr-deska_image.jpeg',
      'https://placehold.co/600x800/FAFAFA/333?text=Diretor+2',
      'https://placehold.co/600x800/FAFAFA/333?text=Diretor+3',
      './src/assets/imagesUnimed/FimCapa.png',
    ],
  },
  'dr-alberto': {
    presidentName: 'Dr. Alberto Gugelmin Neto',
    management: 'Gestão 2015 - 2023 (In Memoriam)',
    coverImage: '/images/imagesDrAlberto/Dr. Alberto Gugelmin Neto_image.jpeg',
    pages: [
      '/images/imagesDrAlberto/Dr.Alberto.png',
      '/images/imagesDrAlberto/Dr. Alberto Gugelmin Neto_image.jpeg',
      '/images/imagesDrAlberto/Dr.Alberto1.png',
      '/images/imagesDrAlberto/Dr.Alberto2.png',
      './src/assets/imagesUnimed/FimCapa.png',
    ],
  },
  'dr-edevard': {
    presidentName: 'Dr. Edevard José de Araújo',
    management: 'Gestão 2011 - 2015',
    coverImage: '/images/imagesDrEdevard/Dr. Edevard José de Araújo_image.jpeg',
    pages: [ // Array 'pages' adicionado
      'images/imagesDrEdevard/DrEdevard0.jpg',
      'images/imagesDrEdevard/Dr. Edevard José de Araújo_image.jpeg',
      'images/imagesDrEdevard/DrEdevard1.png',
      'images/imagesDrEdevard/DrEdevard2.png',
      './src/assets/imagesUnimed/FimCapa.png',
    ],
  },
  'dr-ivan': {
    presidentName: 'Dr. Ivan Savoia Assef',
    management: 'Gestão 2010 - 2011 (In Memoriam)',
    coverImage: '/images/imagesDrIvan/Dr. Ivan Savoia Assef_image.jpeg',
    pages: [ // Array 'pages' adicionado
      'images/imagesDrIvan/DrIvan0.png',
      '/images/imagesDrIvan/Dr. Ivan Savoia Assef_image.jpeg',
      'images/imagesDrIvan/DrIvan1.png',
      'images/imagesDrIvan/DrIvan2.png',
      './src/assets/imagesUnimed/FimCapa.png',
    ],
  },
  'dr-dalmo': {
    presidentName: 'Dr. Dalmo Claro de Oliveira',
    management: 'Gestão 1999 - 2010',
    coverImage: '/images/imagesDrDalmo/Dr. Dalmo Claro de Oliveira.jpeg',
    pages: [ // Array 'pages' adicionado
      'images/imagesDrDalmo/DrDalmo0.png',
      '/images/imagesDrDalmo/Dr. Dalmo Claro de Oliveira.jpeg',
      'images/imagesDrDalmo/DrDalmo1.png',
      'images/imagesDrDalmo/DrDalmo2.png',
      './src/assets/imagesUnimed/FimCapa.png',
    ],
  },
  'dr-ernesto': {
    presidentName: 'Dr. Ernesto Gazziero Filho',
    management: 'Gestão 1991 - 1999 (In Memoriam)',
    coverImage: '/images/imagesDrErnesto/Dr. Ernesto Gazziero Filho_image.jpeg',
    pages: [ // Array 'pages' adicionado
      'images/imagesDrErnesto/DrErnesto0.png',
      '/images/imagesDrErnesto/Dr. Ernesto Gazziero Filho_image.jpeg',
      'images/imagesDrErnesto/DrErnesto1.png',
      'images/imagesDrErnesto/DrErnesto2.png',
      './src/assets/imagesUnimed/FimCapa.png',
    ],
  },
  'dr-ivo': {
    presidentName: 'Dr. Ivo Januário Ferreira',
    management: 'Gestão 1982 - 1991',
    coverImage: '/images/imagesDrIvo/Dr. Ivo Januário Ferreira_image.jpeg',
    pages: [ // Array 'pages' adicionado
      'images/imagesDrIvo/DrIvo0.png',
      '/images/imagesDrIvo/Dr. Ivo Januário Ferreira_image.jpeg',
      'images/imagesDrIvo/DrIvo0GPT.png',
      'images/imagesDrIvo/DrIvo1.png',
      'images/imagesDrIvo/DrIvo2.png',
      './src/assets/imagesUnimed/FimCapa.png',
    ],
  },
};

export const presidentsList = Object.keys(MAGAZINES_DATA).map(key => ({
  id: key,
  ...MAGAZINES_DATA[key]
}));