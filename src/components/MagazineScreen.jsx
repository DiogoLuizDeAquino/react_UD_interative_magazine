import React, { useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

// Componente de página individual para o flipbook
const Page = React.forwardRef((props, ref) => {
    return (
        // Cada página é um div branco com uma imagem de fundo
        <div className="bg-white" ref={ref}>
            <img src={props.src} alt="" className="w-full h-full object-cover" />
        </div>
    );
});

// Componente principal da tela da revista
function MagazineScreen({ magazine, onClose }) {
    // Estado para armazenar o tamanho da tela
    const [size, setSize] = useState({ width: 0, height: 0 });

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
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center">
            {/* Só renderiza o flipbook se o tamanho da tela for maior que zero */}
            {size.width > 0 && (
                <HTMLFlipBook
                    width={size.width}
                    height={size.height}
                    maxShadowOpacity={0}
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
            
        </div>
    );
}

export default MagazineScreen;