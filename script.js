document.addEventListener('DOMContentLoaded', () => {
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const btnCarta = document.getElementById('btnCarta');
    const overlay = document.getElementById('cartaOverlay');
    const cerrarBtn = document.querySelector('.cerrar-btn');
    const musica = document.getElementById('musica');
    const mensaje = document.getElementById('mensaje');

    // Animación de corazones
    function crearCorazon() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        
        // Posición horizontal aleatoria
        const leftPosition = Math.random() * 100;
        heart.style.left = `${leftPosition}vw`;
        
        // Movimiento horizontal aleatorio
        const drift = (Math.random() - 0.5) * 100;
        heart.style.setProperty('--drift', `${drift}px`);
        
        // Duración aleatoria
        const duration = Math.random() * 3 + 7;
        heart.style.animationDuration = `${duration}s`;
        
        document.querySelector('.hearts-container').appendChild(heart);
        
        setTimeout(() => heart.remove(), duration * 1000);
    }
    setInterval(crearCorazon, 300);

    // Evento para el botón "Sí, porque eres negro y te amo"
    btnSi.addEventListener('click', () => {
        mensaje.textContent = "Mas te vale que dijiste que si sino pichasos tu y yo jaja te amo 💌";
        btnSi.style.display = 'none';
        btnNo.style.display = 'none';
        btnCarta.style.display = 'block'; // Mostrar botón de carta
        musica.play();
    });

    // Evento para el botón "No,porque odio los negros "
    let mensajeCambiado = false;
    btnNo.addEventListener('click', () => {
        if (!mensajeCambiado) {
            mensaje.textContent = "¡Una pregunta, porque no me amas a yo?";
            mensajeCambiado = true;
        }
    });

    btnNo.addEventListener('mouseover', () => {
        const x = Math.random() * 80 + 'vw';
        const y = Math.random() * 80 + 'vh';
        btnNo.style.position = 'absolute';
        btnNo.style.left = x;
        btnNo.style.top = y;
    });

    // Mostrar carta
    btnCarta.addEventListener('click', () => {
        overlay.style.display = 'block';
    });

    // Cerrar carta
    cerrarBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});