// Navigation et interactions
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initImageLoading();
});

// Navigation fluide
function initNavigation() {
    // Scroll fluide pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Compensation pour la navbar fixe
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Effet navbar au scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 100) {
            navbar.classList.add('shadow-lg');
            navbar.classList.remove('shadow-none');
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.add('shadow-none');
        }
    });
}

// Menu mobile toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    mobileMenu.classList.toggle('hidden');
    hamburger.classList.toggle('active');
    
    // Animation des barres du hamburger
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Fonction pour scroll vers section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Animations au scroll avec Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                
                // Animation en cascade pour les cartes de crânes
                if (entry.target.classList.contains('skulls-gallery')) {
                    const cards = entry.target.querySelectorAll('.skull-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.animationDelay = `${index * 0.1}s`;
                            card.classList.add('animate-fade-in-up');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const elementsToAnimate = document.querySelectorAll(
        '.section-title, .skulls-gallery, .philosophy-card, .step'
    );
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Chargement paresseux optimisé des images
function initImageLoading() {
    // Intersection Observer pour le lazy loading si le navigateur ne le supporte pas nativement
    if ('loading' in HTMLImageElement.prototype) {
        // Le navigateur supporte le lazy loading natif
        return;
    }

    // Fallback pour les navigateurs qui ne supportent pas loading="lazy"
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('opacity-0');
                img.classList.add('opacity-100');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Effet parallaxe léger pour les éléments flottants
function initParallaxEffects() {
    const floatingElements = document.querySelectorAll('.animate-float');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.1;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = scrolled * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Gestion d'erreur pour les images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // Ajouter une image de fallback si nécessaire
        e.target.style.display = 'none';
    }
}, true);

// Optimisation des performances
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Application du throttle aux événements de scroll
const throttledScrollHandler = throttle(() => {
    // Gestionnaires de scroll optimisés
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
}, 16); // 60fps

window.addEventListener('scroll', throttledScrollHandler);

// Preload des images critiques
function preloadCriticalImages() {
    const criticalImages = [
        'https://tamboursdelaterre.com/wp-content/uploads/2024/06/20240624_140100-705x1024.jpg',
        'https://tamboursdelaterre.com/wp-content/uploads/2024/06/AtelierLM-682x1024.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Lancer le preload au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadCriticalImages);
} else {
    preloadCriticalImages();
}

// Animation d'entrée pour les cartes au scroll
const skullCards = document.querySelectorAll('.skull-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

skullCards.forEach(card => {
    cardObserver.observe(card);
});


// Fonction pour changer l'image principale
function changeMainImage(craneName, newSrc, viewNumber) {
    const mainImg = document.getElementById(craneName + '-main');
    if (mainImg) {
        mainImg.src = newSrc;
        
        // Mettre à jour le compteur de vue
        const counter = mainImg.nextElementSibling?.querySelector('.font-cinzel');
        if (counter) {
            const totalViews = counter.textContent.split('/')[1];
            counter.textContent = `Vue ${viewNumber}/${totalViews}`;
        }
        
        // Mettre à jour les bordures des miniatures
        const container = mainImg.closest('.bg-white').querySelector('.grid');
        const thumbnails = container.querySelectorAll('.thumbnail');
        
        thumbnails.forEach((thumb, index) => {
            if (index === viewNumber - 1) {
                thumb.classList.remove('opacity-70', 'border-transparent');
                thumb.classList.add('opacity-100');
                // Ajouter la couleur de bordure appropriée selon le crâne
                if (craneName === 'amande') thumb.classList.add('border-gold');
                if (craneName === 'etoile') thumb.classList.add('border-yellow-400');
                if (craneName === 'rose') thumb.classList.add('border-pink-400');
                if (craneName === 'coeur') thumb.classList.add('border-purple-500');
                if (craneName === 'bouche') thumb.classList.add('border-gray-600');
            } else {
                thumb.classList.add('opacity-70', 'border-transparent');
                thumb.classList.remove('opacity-100', 'border-gold', 'border-yellow-400', 'border-pink-400', 'border-purple-500', 'border-gray-600');
            }
        });
    }
}

// Effet de zoom sur les images principales
document.addEventListener('DOMContentLoaded', function() {
    const mainImages = document.querySelectorAll('[id$="-main"]');
    
    mainImages.forEach(img => {
        img.addEventListener('click', function() {
            // Créer un overlay pour afficher l'image en grand
            const overlay = document.createElement('div');
            overlay.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4';
            overlay.style.cursor = 'zoom-out';
            
            const largeImg = document.createElement('img');
            largeImg.src = this.src;
            largeImg.className = 'max-w-full max-h-full object-contain rounded-lg';
            
            overlay.appendChild(largeImg);
            document.body.appendChild(overlay);
            
            // Fermer au clic
            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
            
            // Fermer avec Escape
            document.addEventListener('keydown', function escapeHandler(e) {
                if (e.key === 'Escape') {
                    if (document.body.contains(overlay)) {
                        document.body.removeChild(overlay);
                    }
                    document.removeEventListener('keydown', escapeHandler);
                }
            });
        });
    });
});