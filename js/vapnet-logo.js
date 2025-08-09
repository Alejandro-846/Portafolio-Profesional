document.addEventListener("DOMContentLoaded", () => {
    const logoOverlay = document.querySelector('.vapnet-logo-overlay');
    const taglineEl = document.getElementById('tagline');
    const text = "CODE CONNECT INNOVATE";
    
    // Bloquear scroll inicialmente
    document.body.style.overflow = 'hidden';
    
    // Función para reiniciar animaciones
    const resetAnimations = () => {
        // Eliminar clases de animación
        document.querySelectorAll('.vap, .net .t, .sq, .tagline').forEach(el => {
            el.style.animation = 'none';
            void el.offsetHeight; // Trigger reflow
        });
        
        // Reiniciar tagline
        taglineEl.textContent = '';
        taglineEl.style.opacity = '0';
    };
    
    // Función para iniciar animaciones
    const startAnimations = () => {
        logoOverlay.classList.remove('hidden');
        
        // Aplicar animaciones nuevamente
        document.querySelector('.vap').style.animation = 
            'vapEntrance 0.7s cubic-bezier(.2,.9,.2,1) forwards, ' +
            'vapExit 0.7s cubic-bezier(.2,.9,.2,1) 4.5s forwards';
            
        document.querySelector('.net .t').style.animation = 
            'tEntrance 0.7s cubic-bezier(.2,.9,.2,1) 0.8s forwards, ' +
            'tExit 0.7s cubic-bezier(.2,.9,.2,1) 5.3s forwards';
            
        document.querySelectorAll('.sq').forEach(sq => {
            sq.style.animation = 
                `squareEntrance 0.42s cubic-bezier(.2,.9,.2,1) ${sq.style.getPropertyValue('--delay')} forwards, ` +
                `squareExit 0.42s cubic-bezier(.2,.9,.2,1) calc(${sq.style.getPropertyValue('--delay')} + 4.3s) forwards, ` +
                `squareBlink 1.6s ease-in-out calc(${sq.style.getPropertyValue('--delay')} + 0.35s) infinite`;
        });
        
        taglineEl.style.animation = 
            'taglineFadeIn 0.5s ease-out 2.5s forwards, ' +
            'taglineFadeOut 0.5s ease-out 6s forwards';
        
        // Typewriter effect
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                taglineEl.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 70);
            }
        };
        setTimeout(typeWriter, 1600);
    };
    
    // Iniciar animaciones por primera vez
    startAnimations();
    
    // Ocultar después de completar el ciclo
    const hideOverlay = setTimeout(() => {
        logoOverlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 7000);
    
    // Reiniciar cuando se hace scroll al top
    window.addEventListener('scroll', () => {
        if (window.scrollY === 0 && logoOverlay.classList.contains('hidden')) {
            clearTimeout(hideOverlay);
            resetAnimations();
            startAnimations();
            document.body.style.overflow = 'hidden';
            
            // Ocultar nuevamente después del ciclo
            setTimeout(() => {
                logoOverlay.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 7000);
        }
    });
    
    // Limpieza al salir de la página
    window.addEventListener('beforeunload', () => {
        clearTimeout(hideOverlay);
    });
});