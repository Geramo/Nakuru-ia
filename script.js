document.addEventListener('DOMContentLoaded', () => {

    const trackingForm = document.getElementById('tracking-form');
    const trackingResult = document.getElementById('tracking-result');

    trackingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const trackingNumber = document.getElementById('tracking-number').value.trim();

        if (trackingNumber === '') {
            trackingResult.innerHTML = '<p class="error">Por favor, introduce un número de guía.</p>';
            return;
        }

        // --- SIMULACIÓN DE RASTREO ---
        const trackingData = {
            'NAK-12345': {
                status: 'En tránsito',
                location: 'Ciudad de México, México',
                eta: '25 de Septiembre, 2025'
            },
            'NAK-67890': {
                status: 'Entregado',
                location: 'Los Ángeles, EEUU',
                eta: '10 de Septiembre, 2025'
            }
        };

        const result = trackingData[trackingNumber];

        if (result) {
            trackingResult.innerHTML = `
                <div class="tracking-info">
                    <h3>Estado del Envío:</h3>
                    <p><strong>Número de Guía:</strong> ${trackingNumber}</p>
                    <p><strong>Estado:</strong> ${result.status}</p>
                    <p><strong>Ubicación Actual:</strong> ${result.location}</p>
                    <p><strong>Tiempo Estimado de Entrega (ETA):</strong> ${result.eta}</p>
                </div>
            `;
        } else {
            trackingResult.innerHTML = '<p class="error">Número de guía no encontrado. Por favor, verifica el número e inténtalo de nuevo.</p>';
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // En una aplicación real, enviarías estos datos a un servidor o un servicio de correo
        alert('Mensaje enviado. ¡Gracias por contactarnos!');
        contactForm.reset();
    });

    // --- FUNCIONALIDAD DEL MENÚ HAMBURGUESA ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cierra el menú cuando se hace clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

});