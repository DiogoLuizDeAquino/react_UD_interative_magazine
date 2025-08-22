import React from 'react';
import { presidentsList } from '../data/magazines';

function SelectionScreen({ onSelectMagazine }) {
  return (
    // Container principal: fundo verde, ocupa a tela inteira, com padding no topo
    <div className="w-full h-full bg-[#00573D] pt-16 overflow-y-auto">

      <header className="flex justify-center mb-1 px-4">
        <img
          src="src/assets/imagesUnimed/logo.png" //logo
          alt="Logo Unimed Santa Catarina"
          className="w-2/4 max-w-xs h-auto"
        />
      </header>

      {/* Texto "Homenagem aos presidentes" */}
      <div className="select-none flex justify-center mb-4 px-9">
        <div className="select-none text-center" style={{ lineHeight: 0.95 }}>
          <div
            style={{
              fontFamily: '"Regular Brush", cursive',
              fontSize: 'clamp(28px, 6vw, 88px)',
              fontWeight: 'normal',
              color: '#fff',
              textShadow: '0 0 10px color: black',
            }}
          >
            Homenagem
          </div>
          <div
            style={{
              fontFamily: '"Regular Brush", cursive',
              fontSize: 'clamp(22px, 5vw, 64px)',
              color: '#b2d14b',
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
              textShadow: '0 0 10px color: black',
            }}
          >
            aos
          </div>
          <div
            style={{
              fontFamily: '"Regular Brush", cursive',
              fontSize: 'clamp(28px, 6vw, 88px)',
              fontWeight: 'normal',
              color: '#fff',
              textShadow: '0 0 10px color: black',
            }}
          >
            presidentes
          </div>
        </div>
      </div>

      <main className="select-none px-5 pb-24">
        {/* Centraliza a lista de cartões */}
        <div className="select-none max-w-2xl mx-auto space-y-3">
          {presidentsList.map((item) => (
            // cartão com layout flexível
            <div
              key={item.id}
              onClick={() => onSelectMagazine(item.id)}
              className="select-none bg-white rounded-2xl p-4 flex items-center space-x-4 cursor-pointer shadow-lg transition-transform hover:scale-[1.02]"
            >
              {/* imagem redonda, com borda verde e responsiva */}
              <img
                src={item.coverImage}
                alt={`Foto de ${item.presidentName}`}
                className="select-none w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-green-400 object-cover flex-shrink-0"
              />
              {/* O container do texto */}
              <div className="select-none flex-1">
                <h2 className="select-none text-lg md:text-xl font-bold text-gray-800">{item.presidentName}</h2>
                <p className="select-none text-sm md:text-base text-gray-600">{item.management}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="select-none fixed bottom-4 w-full text-center text-white text-opacity-60 text-xs">
        Desenvolvido por Diogo Luiz de Aquino
      </footer>
    </div>
  );
}

export default SelectionScreen;
