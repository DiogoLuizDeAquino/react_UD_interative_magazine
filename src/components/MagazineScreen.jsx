import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import hintIcon from '../assets/imagesUnimed/gestoArrastarEmoj.png';

// Componente de página individual para o flipbook
const Page = React.forwardRef((props, ref) => {
    return (
        // Cada página é um div branco com uma imagem de fundo
        <div className="bg-white" ref={ref}>
            <img src={props.src} alt="" className="select-none w-full h-full object-cover" />
        </div>
    );
});

// Componente principal da tela da revista
function MagazineScreen({ magazine, onClose }) {
    // Estado para armazenar o tamanho da tela
    const [size, setSize] = useState({ width: 0, height: 0 });
    const [showHint, setShowHint] = useState(true);

    // Fecha a revista se o usuário tocar com 3 dedos na tela (mobile)
    useEffect(() => {
        const handleTouch = (event) => {
            if (event.touches.length >= 3) {
                onClose();
            }
        };
        window.addEventListener('touchstart', handleTouch);
        return () => window.removeEventListener('touchstart', handleTouch);
    }, [onClose]);

    // Atualiza o tamanho da tela ao carregar o componente
    useEffect(() => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        setSize({ width: screenWidth, height: screenHeight });
    }, []);

    // Renderiza o flipbook da revista
    return (
        <div className="select-none fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center">
            {/* Só renderiza o flipbook se o tamanho da tela for maior que zero */}
            {size.width > 0 && (
                <HTMLFlipBook
                    width={size.width}
                    height={size.height}
                    maxShadowOpacity={0.5}
                    drawShadow={false}
                    showPageCorners={true}
                    showCover={true}
                    mobileScrollSupport={true}
                    flippingTime={1000}
                    className="w-full h-full"
                >
                    {/* Renderiza cada página da revista */}
                    {magazine.pages.map((pageSrc, index) => (
                        <Page key={index} src={pageSrc} />
                    ))}
                </HTMLFlipBook>
            )}
            {/* Dica sutil de interação */}
            {showHint && (
                <div
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 
                                bg-white/25 backdrop-blur-md
                                px-8 py-3 rounded-full shadow-lg 
                                flex items-center gap-0 select-none"
                >
                    {/* Texto com a classe de sombra */}
                    <span className="animate-pulse select-none font-bold text-white text-shadow-black text-lg">
                        Deslize para folhar
                    </span>

                    <img
                        src={hintIcon}
                        alt="Gesto de deslizar"
                        className="select-none w-20 h-20 animate-page-hint"
                    />
                </div>
            )}

        </div>
    );
}

export default MagazineScreen;