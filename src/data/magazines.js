// Dados das revistas com todos os presidentes a terem um array 'pages'
export const MAGAZINES_DATA = {
  'dr-sergio': {
    presidentName: 'Dr. Sérgio Malburg Filho',
    management: 'Gestão 2023 - 2027',
    coverImage: '/images/imagesDrSergio/Dr. Sérgio Malburg Filho_image.jpeg',
    pages: [
      '/images/imagesDrSergio/Dr. Sérgio Malburg Filho_image.jpeg',
      '/images/imagesDrSergio/DrSergio0.png',
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
      '/images/imagesDrAlberto/Dr. Alberto Gugelmin Neto_image.jpeg',
      '/images/imagesDrAlberto/Dr.Alberto.jpg',
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
      'images/imagesDrEdevard/Dr. Edevard José de Araújo_image.jpeg',
      'images/imagesDrEdevard/DrEdevard0.jpg',
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
      'https://placehold.co/600x800/FFFFFF/333?text=Capa+Ivan',
      'https://placehold.co/600x800/FAFAFA/333?text=Página+1',
    ],
  },
  'dr-dalmo': {
    presidentName: 'Dr. Dalmo Claro de Oliveira',
    management: 'Gestão 1999 - 2010',
    coverImage: 'https://placehold.co/200x200/EFEFEF/333?text=Dr.+Dalmo',
    pages: [ // Array 'pages' adicionado
      'https://placehold.co/600x800/FFFFFF/333?text=Capa+Dalmo',
      'https://placehold.co/600x800/FAFAFA/333?text=Página+1',
    ],
  },
  'dr-ernesto': {
    presidentName: 'Dr. Ernesto Gazziero Filho',
    management: 'Gestão 1991 - 1999 (In Memoriam)',
    coverImage: 'https://placehold.co/200x200/EFEFEF/333?text=Dr.+Ernesto',
    pages: [ // Array 'pages' adicionado
      'https://placehold.co/600x800/FFFFFF/333?text=Capa+Ernesto',
      'https://placehold.co/600x800/FAFAFA/333?text=Página+1',
    ],
  },
  'dr-ivo': {
    presidentName: 'Dr. Ivo Januário Ferreira',
    management: 'Gestão 1982 - 1991',
    coverImage: 'https://placehold.co/200x200/EFEFEF/333?text=Dr.+Ivo',
    pages: [ // Array 'pages' adicionado
      'https://placehold.co/600x800/FFFFFF/333?text=Capa+Ivo',
      'https://placehold.co/600x800/FAFAFA/333?text=Página+1',
    ],
  },
};

export const presidentsList = Object.keys(MAGAZINES_DATA).map(key => ({
  id: key,
  ...MAGAZINES_DATA[key]
}));