// Datos de los proyectos con sus rutas
const projectsData = {
    project1: {
        title: "E-Commerce Platform",
        url: "https://astrarothdlcxvi.github.io/styles_gallery_css.github.io/index.html",
        description: "Plataforma completa de comercio electrónico con gestión de productos, carrito de compras, sistema de usuarios y pasarela de pago integrada."
    },
    project2: {
        title: "Chat en Tiempo Real",
        url: "projects/chat.html",
        description: "Aplicación de mensajería instantánea con salas de chat, mensajes privados y notificaciones en tiempo real."
    },
    project3: {
        title: "Dashboard Analytics",
        url: "projects/dashboard.html",
        description: "Panel de control interactivo con visualización de datos en tiempo real y exportación de reportes."
    },
    project4: {
        title: "App Móvil Fitness",
        url: "projects/fitness.html",
        description: "Aplicación móvil para seguimiento de ejercicios y nutrición con React Native."
    },
    project5: {
        title: "Chatbot IA",
        url: "projects/chatbot.html",
        description: "Asistente virtual con procesamiento de lenguaje natural y aprendizaje automático."
    },
    project6: {
        title: "Sistema CRM",
        url: "projects/crm.html",
        description: "Sistema completo de gestión de relaciones con clientes para empresas."
    }
};

// Función para abrir proyecto en nueva página
function openProject(projectId) {
    const project = projectsData[projectId];
    if (project && project.url) {
        // Abrir en la misma ventana
        window.location.href = project.url;
        
        // Si prefieres abrir en nueva pestaña, usa:
        // window.open(project.url, '_blank');
    }
}

// Función para mostrar/ocultar CV
function toggleCV() {
    const cvContent = document.getElementById('cvContent');
    if (cvContent.style.display === 'none' || cvContent.style.display === '') {
        cvContent.style.display = 'block';
        // Animar entrada
        cvContent.style.opacity = '0';
        setTimeout(() => {
            cvContent.style.transition = 'opacity 0.5s';
            cvContent.style.opacity = '1';
        }, 10);
    } else {
        cvContent.style.opacity = '0';
        setTimeout(() => {
            cvContent.style.display = 'none';
        }, 500);
    }
}

// Función para descargar CV
function downloadCV() {
    // Crear un enlace de descarga temporal
    const cvData = {
        nombre: 'Juan Pérez',
        titulo: 'Desarrollador Full-Stack Senior',
        contacto: {
            email: 'juan.perez@email.com',
            telefono: '+34 600 123 456',
            linkedin: 'linkedin.com/in/juanperez',
            github: 'github.com/juanperez'
        },
        experiencia: [
            {
                empresa: 'Tech Innovations Inc.',
                cargo: 'Desarrollador Full-Stack Senior',
                periodo: '2022 - Presente',
                responsabilidades: [
                    'Liderazgo técnico en proyectos de alta complejidad',
                    'Implementación de arquitecturas de microservicios',
                    'Desarrollo de APIs RESTful y GraphQL',
                    'Mentoring a desarrolladores junior'
                ]
            },
            {
                empresa: 'Digital Solutions S.A.',
                cargo: 'Desarrollador Full-Stack',
                periodo: '2020 - 2022',
                responsabilidades: [
                    'Desarrollo de aplicaciones web con React y Node.js',
                    'Integración de sistemas de pago',
                    'Optimización del rendimiento de aplicaciones'
                ]
            }
        ],
        educacion: [
            {
                titulo: 'Ingeniería en Sistemas',
                institucion: 'Universidad Tecnológica',
                año: '2015-2019'
            }
        ],
        habilidades: {
            frontend: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Angular'],
            backend: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'Laravel'],
            baseDatos: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
            devops: ['Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD']
        },
        idiomas: [
            { idioma: 'Español', nivel: 'Nativo' },
            { idioma: 'Inglés', nivel: 'C1 Avanzado' },
            { idioma: 'Francés', nivel: 'B2 Intermedio' }
        ]
    };
    
    // Convertir a formato JSON para descarga
    const dataStr = JSON.stringify(cvData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'CV_Juan_Perez_2024.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    // Mostrar notificación
    showNotification('CV descargado correctamente');
}

// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    const bgColor = type === 'success' ? 'var(--neon-blue)' : '#ff4757';
    
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${bgColor};
        color: ${type === 'success' ? 'black' : 'white'};
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 255, 255, 0.5);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    
    // Agregar animación CSS si no existe
    if (!document.querySelector('#notification-animations')) {
        const style = document.createElement('style');
        style.id = 'notification-animations';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remover notificación después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Actualizar URL sin saltar
            history.pushState(null, null, targetId);
        }
    });
});

// Cambiar estilo del navbar al hacer scroll
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    // Ocultar/mostrar navbar basado en dirección del scroll
    if (currentScroll > lastScroll && currentScroll > 300) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Animación de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animar barras de habilidades cuando sean visibles
            if (entry.target.classList.contains('skill-item')) {
                const skillBar = entry.target.querySelector('.skill-bar');
                if (skillBar) {
                    const targetWidth = skillBar.style.width;
                    skillBar.style.width = '0';
                    setTimeout(() => {
                        skillBar.style.transition = 'width 1.5s ease-out';
                        skillBar.style.width = targetWidth;
                    }, 100);
                }
            }
            
            // Animar números en estadísticas
            if (entry.target.classList.contains('stat')) {
                const statNumber = entry.target.querySelector('h3');
                if (statNumber) {
                    animateNumber(statNumber);
                }
            }
        }
    });
}, observerOptions);

// Función para animar números
function animateNumber(element) {
    const finalValue = parseInt(element.textContent);
    const duration = 2000;
    const step = finalValue / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= finalValue) {
            current = finalValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 16);
}

// Aplicar animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Preparar elementos para animación
    const animatedElements = [
        '.project-card',
        '.skill-item',
        '.timeline-item',
        '.stat',
        '.about-content',
        '.cv-section'
    ];
    
    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(element);
        });
    });
    
    // Animar timeline items desde los lados
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        const direction = index % 2 === 0 ? '-50px' : '50px';
        item.style.transform = `translateX(${direction})`;
    });
    
    // Agregar clase para marcar elementos como visibles
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) translateX(0) !important;
        }
    `;
    document.head.appendChild(style);
});

// Formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const formData = new FormData(this);
        const data = {
            nombre: formData.get('nombre'),
            email: formData.get('email'),
            mensaje: formData.get('mensaje')
        };
        
        // Validación básica
        if (!data.nombre || !data.email || !data.mensaje) {
            showNotification('Por favor completa todos los campos', 'error');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Por favor ingresa un email válido', 'error');
            return;
        }
        
        // Simulación de envío
        console.log('Enviando mensaje:', data);
        
        // Mostrar botón de carga
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simular delay de envío
        setTimeout(() => {
            // Limpiar formulario
            this.reset();
            
            // Restaurar botón
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Mostrar notificación de éxito
            showNotification('¡Mensaje enviado correctamente! Te contactaré pronto.');
        }, 1500);
    });
}

// Efecto de escritura para el título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    element.style.visibility = 'visible';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Agregar cursor parpadeante al final
            element.innerHTML += '<span class="cursor">|</span>';
            
            // Estilo para el cursor
            if (!document.querySelector('#cursor-style')) {
                const style = document.createElement('style');
                style.id = 'cursor-style';
                style.textContent = `
                    .cursor {
                        animation: blink 1s infinite;
                    }
                    @keyframes blink {
                        0%, 50% { opacity: 1; }
                        51%, 100% { opacity: 0; }
                    }
                `;
                document.head.appendChild(style);
            }
        }
    }
    
    type();
}

// Aplicar efecto de escritura cuando la página carga
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.style.visibility = 'hidden';
        
        // Esperar un momento antes de comenzar la animación
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Menú móvil (hamburguesa)
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const navContainer = document.querySelector('.nav-container');
    
    // Crear botón hamburguesa
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Agregar estilos para el menú móvil
    const style = document.createElement('style');
    style.textContent = `
        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            z-index: 1001;
        }
        
        .hamburger span {
            width: 25px;
            height: 3px;
            background: var(--neon-blue);
            margin: 3px 0;
            transition: 0.3s;
            border-radius: 3px;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }
            
            .nav-links {
                display: none;
                position: fixed;
                top: 60px;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.95);
                flex-direction: column;
                padding: 2rem;
                gap: 1.5rem;
                backdrop-filter: blur(10px);
            }
            
            .nav-links.active {
                display: flex;
            }
        }
    `;
    document.head.appendChild(style);
    
    navContainer.appendChild(hamburger);
    
    // Toggle menú móvil
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
}

// Inicializar menú móvil
createMobileMenu();

// Función para precargar imágenes
function preloadImages() {
    const imageUrls = [
        'projects/images/ecommerce-1.jpg',
        'projects/images/chat-1.jpg',
        'projects/images/dashboard-1.jpg',
        // Agregar más URLs de imágenes según sea necesario
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Precargar imágenes cuando la página carga
window.addEventListener('load', preloadImages);