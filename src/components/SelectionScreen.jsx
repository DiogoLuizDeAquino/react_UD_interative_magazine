import React from 'react';
import { presidentsList } from '../data/magazines';

function SelectionScreen({ onSelectMagazine }) {
  return (
    // Container principal: fundo verde, ocupa a tela inteira, com padding no topo
    <div className="w-full h-full bg-[#00573D] pt-16 overflow-y-auto">

      <header className="flex justify-center mb-8 px-4">
        <img
          src="src\assets\imagesUnimed\logo.png" //logo
          alt="Logo Unimed Santa Catarina"
          className="w-2/4 max-w-xs h-auto"
        />
      </header>
      {/* Imagem "Homenagem" centralizada entre logo e cartões */}
      <div className="flex justify-center mb-001 px-9">
        <img
          src="src\assets\imagesUnimed\Homenagem aos presidentes1.png" // Altere para o caminho da sua imagem
          alt="Imagem decorativa"
          className="w-2/5 h-auto object-contain"
        />
      </div>

      <main className="px-5 pb-24">
        {/* Centraliza a lista de cartões */}
        <div className="max-w-2xl mx-auto space-y-5">
          {presidentsList.map((item) => (
            // O cartão: fiel ao protótipo, com layout flexível
            <div
              key={item.id}
              onClick={() => onSelectMagazine(item.id)}
              className="bg-white rounded-2xl p-4 flex items-center space-x-4 cursor-pointer shadow-lg transition-transform hover:scale-[1.02]"
            >
              {/* A imagem: redonda, com borda azul e responsiva */}
              <img
                src={item.coverImage}
                alt={`Foto de ${item.presidentName}`}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-green-400 object-cover flex-shrink-0"
              />
              {/* O container do texto */}
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-bold text-gray-800">{item.presidentName}</h2>
                <p className="text-sm md:text-base text-gray-600">{item.management}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="fixed bottom-4 w-full text-center text-white text-opacity-60 text-xs">
        Desenvolvido por Diogo Luiz de Aquino
      </footer>
    </div>
  );
}

export default SelectionScreen;