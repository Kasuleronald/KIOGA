// Initialize slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Function to navigate slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to set the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display the slides
function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Hide all slides
    Array.from(slides).forEach(slide => {
        slide.style.display = "none";
    });

    // Remove active class from all dots
    Array.from(dots).forEach(dot => {
        dot.className = dot.className.replace(" active", "");
    });

    // Show the current slide and set active class
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto slideshow (change slide every 5 seconds)
let slideInterval = setInterval(() => {
    plusSlides(1);
}, 5000);

// Pause slideshow when hovering over it
const slideshow = document.querySelector('.slideshow-container');
slideshow.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume slideshow when mouse leaves
slideshow.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
});

// Change header on scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    const topBar = document.querySelector('.top-bar');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        topBar.style.top = '-50px';
    } else {
        header.classList.remove('scrolled');
        topBar.style.top = '0';
    }
};

// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (!navMenu.contains(event.target) && event.target !== hamburger) {
        navMenu.classList.remove('show');
    }
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will contact you soon.');
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('show');
        }
    });
});

// Mobile submenu toggle
document.querySelectorAll('nav .dropdown > a').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            document.querySelectorAll('nav .dropdown').forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
        }
    });
});

// Translation system
const translations = {
    'page-title': {
        en: 'KIOGA Energies SARL - Petroleum Products',
        fr: 'KIOGA Energies SARL - Produits Pétroliers'
    },
    'meta-description': {
        en: 'Leading petroleum products company in Lubumbashi',
        fr: 'Entreprise leader en produits pétroliers à Lubumbashi'
    },
    // Slides
    'slide1-title': {
        en: 'Premium Fuel Storage Solutions',
        fr: 'Solutions Premium de Stockage de Carburant'
    },
    'slide1-text': {
        en: 'State-of-the-art storage facilities with the highest safety standards in the region',
        fr: 'Installations de stockage de pointe avec les normes de sécurité les plus élevées de la région'
    },
    'slide2-title': {
        en: 'Extensive Distribution Network',
        fr: 'Réseau de Distribution Étendu'
    },
    'slide2-text': {
        en: 'Reliable fuel distribution across Lubumbashi and surrounding regions',
        fr: 'Distribution fiable de carburant à Lubumbashi et dans les régions environnantes'
    },
    'slide3-title': {
        en: 'Efficient Supply Chain Management',
        fr: 'Gestion Efficace de la Chaîne d\'Approvisionnement'
    },
    'slide3-text': {
        en: 'Optimized logistics to ensure timely delivery of petroleum products',
        fr: 'Logistique optimisée pour assurer une livraison ponctuelle des produits pétroliers'
    },
    'slide4-title': {
        en: 'Expert Team',
        fr: 'Équipe d\'Experts'
    },
    'slide4-text': {
        en: 'Our qualified professionals ensure quality service and operational excellence',
        fr: 'Nos professionnels qualifiés garantissent un service de qualité et une excellence opérationnelle'
    },
    // Navigation
    'nav-home': {
        en: 'Home',
        fr: 'Accueil'
    },
    'nav-services': {
        en: 'Services',
        fr: 'Services'
    },
    'nav-about': {
        en: 'About Us',
        fr: 'À Propos'
    },
    'nav-career': {
        en: 'Career',
        fr: 'Carrière'
    },
    'nav-contact': {
        en: 'Contact',
        fr: 'Contact'
    },
    // Submenu items
    'sub-who': {
        en: 'Who We Are',
        fr: 'Qui Nous Sommes'
    },
    'sub-team': {
        en: 'Our Team',
        fr: 'Notre Équipe'
    },
    'sub-ethics': {
        en: 'Our Ethics',
        fr: 'Notre Éthique'
    },
    'sub-safety': {
        en: 'Safety Policy',
        fr: 'Politique de Sécurité'
    },
    'sub-find': {
        en: 'Find Us',
        fr: 'Nous Trouver'
    },
    'sub-hiring': {
        en: 'Current Hiring',
        fr: 'Offres d\'Emploi'
    },
    'sub-internship': {
        en: 'Internship',
        fr: 'Stage'
    },
    // Main content
    'welcome-title': {
        en: 'Welcome to KIOGA Energies SARL',
        fr: 'Bienvenue chez KIOGA Energies SARL'
    },
    'welcome-text': {
        en: 'KIOGA Energies SARL is a premier petroleum products company based in Lubumbashi, Democratic Republic of Congo. We specialize in providing top-quality fuel storage services, retail distribution, and bulk fuel supply solutions to meet the energy needs of businesses and communities across the region. With our commitment to excellence, safety, and environmental responsibility, we have established ourselves as a trusted partner in the energy sector.',
        fr: 'KIOGA Energies SARL est une entreprise leader en produits pétroliers basée à Lubumbashi, République Démocratique du Congo. Nous nous spécialisons dans la fourniture de services de stockage de carburant de haute qualité, la distribution au détail et des solutions d\'approvisionnement en carburant en vrac pour répondre aux besoins énergétiques des entreprises et des communautés de la région. Grâce à notre engagement envers l\'excellence, la sécurité et la responsabilité environnementale, nous nous sommes imposés comme un partenaire de confiance dans le secteur de l\'énergie.'
    },
    'services-title': {
        en: 'Our Services',
        fr: 'Nos Services'
    },
    'service-storage': {
        en: 'Fuel Storage',
        fr: 'Stockage de Carburant'
    },
    'service-storage-desc': {
        en: 'Our state-of-the-art storage facilities offer secure and efficient solutions for all types of petroleum products. With a capacity of over 5 million liters, we provide temperature-controlled storage, advanced leak detection systems, and 24/7 security monitoring. Our facilities are compliant with all local and international safety regulations, ensuring your fuel is stored under optimal conditions.',
        fr: 'Nos installations de stockage de pointe offrent des solutions sécurisées et efficaces pour tous types de produits pétroliers. Avec une capacité de plus de 5 millions de litres, nous proposons un stockage à température contrôlée, des systèmes avancés de détection de fuites et une surveillance de sécurité 24h/24. Nos installations sont conformes à toutes les réglementations de sécurité locales et internationales, garantissant que votre carburant est stocké dans des conditions optimales.'
    },
    'service-retail': {
        en: 'Retail Distribution',
        fr: 'Distribution au Détail'
    },
    'service-retail-desc': {
        en: 'We operate an extensive network of retail stations across Lubumbashi and surrounding regions, providing high-quality fuels to businesses and individual consumers. Our distribution network includes 10 strategically located stations, all equipped with modern dispensing technology and staffed by trained professionals committed to excellent customer service.',
        fr: 'Nous exploitons un vaste réseau de stations-service à Lubumbashi et dans les régions avoisinantes, fournissant des carburants de haute qualité aux entreprises et aux consommateurs individuels. Notre réseau de distribution comprend 10 stations situées stratégiquement, toutes équipées de technologies de distribution modernes et dotées de professionnels formés engagés dans un service client excellent.'
    },
    'service-bulk': {
        en: 'Bulk Fuel Supply',
        fr: 'Approvisionnement en Vrac'
    },
    'service-bulk-desc': {
        en: 'We provide reliable bulk fuel supply solutions for industrial clients, mining operations, and large-scale commercial projects. Our direct supply from refineries ensures competitive pricing and consistent quality. With our specialized transport fleet and experienced team, we guarantee timely deliveries to meet your operational requirements.',
        fr: 'Nous fournissons des solutions fiables d\'approvisionnement en carburant en vrac pour les clients industriels, les opérations minières et les projets commerciaux à grande échelle. Notre approvisionnement direct auprès des raffineries garantit des prix compétitifs et une qualité constante. Avec notre flotte de transport spécialisée et notre équipe expérimentée, nous garantissons des livraisons ponctuelles pour répondre à vos besoins opérationnels.'
    },
    'service-consulting': {
        en: 'Energy Consulting',
        fr: 'Conseil en Énergie'
    },
    // Footer
    'footer-quick': {
        en: 'Quick Links',
        fr: 'Liens Rapides'
    },
    'footer-services': {
        en: 'Our Services',
        fr: 'Nos Services'
    },
    'footer-contact': {
        en: 'Contact Us',
        fr: 'Contactez-Nous'
    },
    'footer-connect': {
        en: 'Connect With Us',
        fr: 'Connectez-vous Avec Nous'
    },
    // Form
    'form-name': {
        en: 'Your Name',
        fr: 'Votre Nom'
    },
    'form-email': {
        en: 'Your Email',
        fr: 'Votre Email'
    },
    'form-phone': {
        en: 'Phone Number',
        fr: 'Numéro de Téléphone'
    },
    'form-message': {
        en: 'Your Message',
        fr: 'Votre Message'
    },
    'form-submit': {
        en: 'Send Message',
        fr: 'Envoyer le Message'
    },
    // Copyright
    'footer-copyright': {
        en: '© 2025 KIOGA Energies SARL. All rights reserved. | Designed with ♥ for a sustainable energy future',
        fr: '© 2025 KIOGA Energies SARL. Tous droits réservés. | Conçu avec ♥ pour un avenir énergétique durable'
    }
};

// Enhanced translation function
function translatePage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            if (el.tagName === 'META') {
                el.content = translations[key][lang];
            } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[key][lang];
            } else {
                el.textContent = translations[key][lang];
            }
        }
    });
}

// Language switcher functionality
let currentLanguage = 'en';

// Initialize language from localStorage or browser preference
function initLanguage() {
    const savedLang = localStorage.getItem('languagePreference');
    const browserLang = navigator.language.substring(0, 2);
    
    if (savedLang) {
        setLanguage(savedLang);
    } else if (browserLang === 'fr') {
        setLanguage('fr');
    } else {
        setLanguage('en');
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('languagePreference', lang);
    
    // Update language switcher UI
    const dropbtn = document.querySelector('.dropbtn');
    const flag = dropbtn.querySelector('.flag-icon');
    const languageCode = dropbtn.querySelector('.language-code');
    
    if (lang === 'fr') {
        flag.src = "images/france-flag.png";
        flag.alt = "FR";
        languageCode.textContent = "FR";
        document.documentElement.lang = 'fr';
    } else {
        flag.src = "images/england-flag.svg";
        flag.alt = "EN";
        languageCode.textContent = "EN";
        document.documentElement.lang = 'en';
    }
    
    // Close dropdown
    document.querySelector('.dropdown-content').style.display = 'none';
    
    // Apply translations
    translatePage(lang);
}

// Initialize language when page loads
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    
    // Language selection
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLanguage) {
                setLanguage(lang);
            }
        });
    });
    
    // Hover functionality for desktop dropdowns
    if (window.innerWidth > 768) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.addEventListener('mouseenter', () => {
                dropdown.querySelector('.dropdown-content').style.display = 'block';
            });
            
            dropdown.addEventListener('mouseleave', () => {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            });
        });
    }
});