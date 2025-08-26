import React, { useState, useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import hintIcon from '../assets/imagesUnimed/gestoArrastarEmoj.png';

// Componente de página individual (sem alterações)
const Page = React.forwardRef((props, ref) => (
    <div className="bg-white" ref={ref}>
        <img src={props.src} alt="" className="select-none w-full h-full object-cover" />
    </div>
));

function MagazineScreen({ magazine, onClose }) {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const [showHint, setShowHint] = useState(true);
    const flipBookRef = useRef(null);
    const inactivityTimerRef = useRef(null); // Ref para guardar o "ID" do temporizador

    // --- LÓGICA DO TEMPORIZADOR DE INATIVIDADE ---
    // Esta função reinicia o temporizador sempre que há uma interação
    const resetInactivityTimer = () => {
        // Limpa o temporizador anterior para evitar que ele dispare
        clearTimeout(inactivityTimerRef.current);

        // Cria um novo temporizador de 2 minutos
        inactivityTimerRef.current = setTimeout(() => {
            console.log("Inatividade detetada, a voltar para o início.");
            // Se o tempo se esgotar, volta para a primeira página (página 0)
            flipBookRef.current?.pageFlip()?.turnToPage(0);
        }, 120000); // 120,000 milissegundos = 2 minutos
    };

    // Este useEffect gere o ciclo de vida do temporizador
    useEffect(() => {
        // Inicia o temporizador assim que a revista abre
        resetInactivityTimer();

        // Adiciona "ouvintes" para qualquer clique ou toque na tela
        document.addEventListener('mousedown', resetInactivityTimer);
        document.addEventListener('touchstart', resetInactivityTimer);

        // Função de limpeza: remove os "ouvintes" e o temporizador quando a revista fecha
        return () => {
            clearTimeout(inactivityTimerRef.current);
            document.removeEventListener('mousedown', resetInactivityTimer);
            document.removeEventListener('touchstart', resetInactivityTimer);
        };
    }, []); // O array vazio garante que isto só corre uma vez quando o componente é montado

    // Gesto "secreto" para fechar (tocar com 3 dedos)
    useEffect(() => {
        const handleMultiTouch = (event) => {
            if (event.touches.length >= 3) {
                onClose();
            }
        };
        window.addEventListener('touchstart', handleMultiTouch);
        return () => window.removeEventListener('touchstart', handleMultiTouch);
    }, [onClose]);

    // Previne o menu de contexto e o zoom por toque duplo
    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        const handleTouchStart = (e) => {
            if (e.touches.length === 1) e.preventDefault();
        };

        window.addEventListener("contextmenu", handleContextMenu);
        window.addEventListener("touchstart", handleTouchStart, { passive: false });

        return () => {
            window.removeEventListener("contextmenu", handleContextMenu);
            window.removeEventListener("touchstart", handleTouchStart);
        };

    }, []);

    // Define o tamanho da tela e a dica
    useEffect(() => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    return (
        <div className="select-none fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center">
            {size.width > 0 && (
                <HTMLFlipBook
                    ref={flipBookRef}
                    width={size.width}
                    height={size.height}
                    maxShadowOpacity={0.5}
                    drawShadow={false}
                    showPageCorners={true}
                    showCover={true}
                    mobileScrollSupport={true}
                    flippingTime={1000}
                    className="w-full h-full"
                    // A interação mais importante: virar a página também reinicia o temporizador
                    onFlip={resetInactivityTimer}
                >
                    {magazine.pages.map((pageSrc, index) => (
                        <Page key={index} src={pageSrc} />
                    ))}
                </HTMLFlipBook>
            )}

            {/* Dica de interação (sem alterações) */}
            {showHint && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full shadow-lg flex items-center gap-0 select-none">
                    <span className="animate-pulse font-semibold text-white text-shadow-black text-lg">
                        Deslize para folhar
                    </span>
                    <img
                        src={hintIcon}
                        alt="Gesto de deslizar"
                        className="w-20 h-20 animate-page-hint"
                    />
                </div>
            )}
        </div>
    );
}

export default MagazineScreen;