/**
 * VIVASAM - Modern JavaScript for Enhanced User Experience
 * Updated with Bootstrap 5 and modern practices
 */

(function() {
    "use strict";

    // Language translations
    const translations = {
        en: {
            home: 'Home',
            about: 'About',
            products: 'Products',
            partners: 'Partners',
            contact: 'Contact',
            trusted: 'Trusted',
            available24: '24/7 Available',
            heroSubtitle: 'Foundation of Health',
            heroDescription: 'Premium natural supplements crafted with scientific precision for your optimal health and wellness journey.',
            exploreProducts: 'Explore Products',
            getInTouch: 'Get in Touch',
            quickContact: 'Quick Contact',
            aboutTitle: 'About VIVASAM Group',
            learnMore: 'Learn More',
            certificates: 'Certificates',
            sectionTitle: 'Our Products',
            partners: 'Partners',
            contactDescription: 'Get in touch with us. We\'re ready to help you with your health journey.',
            brandTagline: 'Foundation of Health'
        },
        ru: {
            home: 'Главная',
            about: 'О нас',
            products: 'Продукты',
            partners: 'Партнёры',
            contact: 'Контакты',
            trusted: 'Надежный',
            available24: 'Доступно 24/7',
            heroSubtitle: 'Монолит здоровья',
            heroDescription: 'Премиальные натуральные добавки, созданные с научной точностью для вашего оптимального здоровья и благополучия.',
            exploreProducts: 'Наши продукты',
            getInTouch: 'Связаться с нами',
            quickContact: 'Быстрый контакт',
            aboutTitle: 'О компании VIVASAM Group',
            learnMore: 'Узнать больше',
            certificates: 'Сертификаты',
            sectionTitle: 'Наши продукты',
            partners: 'Партнёры',
            contactDescription: 'Свяжитесь с нами. Мы готовы помочь вам в вашем путешествии к здоровью.',
            brandTagline: 'Монолит здоровья'
        },
        uz: {
            home: 'Bosh sahifa',
            about: 'Biz haqimizda',
            products: 'Mahsulotlar',
            partners: 'Hamkorlar',
            contact: 'Aloqa',
            trusted: 'Ishonchli',
            available24: '24/7 mavjud',
            heroSubtitle: 'Salomatlik poydevori',
            heroDescription: 'Sizning optimal salomatlik va farovonlik sayohatingiz uchun ilmiy aniqlik bilan yaratilgan premium tabiiy qo\'shimchalar.',
            exploreProducts: 'Mahsulotlarni ko\'rish',
            getInTouch: 'Bog\'lanish',
            quickContact: 'Tezkor aloqa',
            aboutTitle: 'VIVASAM Group haqida',
            learnMore: 'Batafsil',
            certificates: 'Sertifikatlar',
            sectionTitle: 'Bizning mahsulotlar',
            partners: 'Hamkorlar',
            contactDescription: 'Biz bilan bog\'laning. Biz sizning salomatlik sayohatingizda yordam berishga tayyormiz.',
            brandTagline: 'Salomatlik poydevori'
        }
    };

    /**
     * Initialize the application
     */
    function init() {
        initScrollBehavior();
        initNavigation();
        initLanguageSelector();
        initSmoothScrolling();
        initBackToTop();
        initAOS();
        loadProducts();
        initContactForms();
        initPerformanceOptimizations();
    }

    /**
     * Handle scroll behavior for navbar
     */
    function initScrollBehavior() {
        const navbar = document.querySelector('#header, #mainNav');
        
        function handleScroll() {
            if (window.scrollY > 100) {
                document.body.classList.add('scrolled');
                if (navbar) navbar.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
                if (navbar) navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', throttle(handleScroll, 16));
        window.addEventListener('load', handleScroll);
    }

    /**
     * Initialize navigation functionality
     */
    function initNavigation() {
        // Mobile nav toggle
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle, .navbar-toggler');
        
        if (mobileNavToggle) {
            mobileNavToggle.addEventListener('click', function() {
                document.body.classList.toggle('mobile-nav-active');
                this.classList.toggle('bi-list');
                this.classList.toggle('bi-x');
            });
        }

        // Close mobile nav when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
                document.body.classList.remove('mobile-nav-active');
            });
        });

        // Active link highlighting
        highlightActiveNavLink();
    }

    /**
     * Highlight active navigation link based on scroll position
     */
    function highlightActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

        function updateActiveLink() {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', throttle(updateActiveLink, 16));
    }

    /**
     * Initialize language selector
     */
    function initLanguageSelector() {
        const languageSelect = document.getElementById('language-select');
        if (!languageSelect) return;

        const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
        languageSelect.value = savedLanguage;
        setLanguage(savedLanguage);
        
        languageSelect.addEventListener('change', (e) => {
            const selectedLanguage = e.target.value;
            localStorage.setItem('selectedLanguage', selectedLanguage);
            setLanguage(selectedLanguage);
        });
    }

    /**
     * Set language and translate content
     */
    function setLanguage(language) {
        const currentTranslations = translations[language] || translations.ru;
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTranslations[key]) {
                element.textContent = currentTranslations[key];
            }
        });

        // Reload products if they exist
        if (document.getElementById('products-grid')) {
            loadProducts();
        }
    }

    /**
     * Initialize smooth scrolling
     */
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Initialize back to top button
     */
    function initBackToTop() {
        const scrollTopBtn = document.querySelector('.scroll-top, #back-to-top');
        
        if (scrollTopBtn) {
            function toggleScrollTop() {
                if (window.scrollY > 300) {
                    scrollTopBtn.classList.add('active', 'show');
                } else {
                    scrollTopBtn.classList.remove('active', 'show');
                }
            }

            scrollTopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            window.addEventListener('scroll', throttle(toggleScrollTop, 16));
            window.addEventListener('load', toggleScrollTop);
        }
    }

    /**
     * Initialize AOS (Animate On Scroll)
     */
    function initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 50,
                disable: function() {
                    return window.innerWidth < 768;
                }
            });
        }
    }

    /**
     * Load and display products
     */
    async function loadProducts() {
        const container = document.getElementById('products-grid');
        if (!container) return;

        try {
            const response = await fetch('data/products.json');
            const products = await response.json();
            const currentLang = localStorage.getItem('selectedLanguage') || 'ru';
            
            renderProducts(products, currentLang, container);
        } catch (error) {
            console.error('Error loading products:', error);
            showFallbackProducts(container);
        }
    }

    /**
     * Render products grid
     */
    function renderProducts(products, language, container) {
        container.innerHTML = products.map((product, index) => {
            const productName = product.name?.[language] || product.name?.ru || 'Product';
            const swiperClass = `swiper-related-${index}`;
            
            return `
                <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="product-card">
                        <div class="product-image-container">
                            ${createProductSwiper(product.images, swiperClass)}
                        </div>
                        <div class="product-content">
                            <h4 class="product-title">${productName}</h4>
                            <div class="product-actions">
                                <a href="product.html?index=${index}" class="btn btn-primary w-100">
                                    ${getTranslation('learnMore', language)}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Initialize Swiper instances
        initProductSwipers(products.length);
    }

    /**
     * Create Swiper HTML for product images
     */
    function createProductSwiper(images, swiperClass) {
        if (!images || images.length === 0) {
            return `<img src="assets/img/medicine.png" class="product-image" alt="Product">`;
        }

        return `
            <div class="swiper ${swiperClass}">
                <div class="swiper-wrapper">
                    ${images.map(img => `
                        <div class="swiper-slide">
                            <img src="${img}" class="product-image" alt="Product Image">
                        </div>
                    `).join('')}
                </div>
                <div class="swiper-pagination"></div>
            </div>
        `;
    }

    /**
     * Initialize Swiper instances for products
     */
    function initProductSwipers(count) {
        if (typeof Swiper === 'undefined') return;

        for (let i = 0; i < count; i++) {
            const swiperElement = document.querySelector(`.swiper-related-${i}`);
            if (swiperElement) {
                new Swiper(swiperElement, {
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: `.swiper-related-${i} .swiper-pagination`,
                        clickable: true,
                    },
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    }
                });
            }
        }
    }

    /**
     * Get translation for given key and language
     */
    function getTranslation(key, language) {
        const translationMap = {
            learnMore: {
                en: 'Learn More',
                ru: 'Подробнее',
                uz: 'Batafsil'
            }
        };

        return translationMap[key]?.[language] || translationMap[key]?.ru || key;
    }

    /**
     * Show fallback products if JSON fails to load
     */
    function showFallbackProducts(container) {
        const fallbackProducts = [
            { name: 'Natural Supplement 1', image: 'assets/img/medicine.png' },
            { name: 'Natural Supplement 2', image: 'assets/img/medicine.png' },
            { name: 'Natural Supplement 3', image: 'assets/img/medicine.png' }
        ];

        container.innerHTML = fallbackProducts.map((product, index) => `
            <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="product-card">
                    <div class="product-image-container">
                        <img src="${product.image}" class="product-image" alt="${product.name}">
                    </div>
                    <div class="product-content">
                        <h4 class="product-title">${product.name}</h4>
                        <div class="product-actions">
                            <a href="#contact" class="btn btn-primary w-100">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    /**
     * Initialize contact forms
     */
    function initContactForms() {
        const contactForms = document.querySelectorAll('.contact-form');
        
        contactForms.forEach(form => {
            form.addEventListener('submit', handleContactSubmission);
        });
    }

    /**
     * Handle contact form submission
     */
    function handleContactSubmission(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            showNotification('Message sent successfully!', 'success');
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }

    /**
     * Show notification
     */
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} position-fixed`;
        notification.style.cssText = `
            top: 20px; right: 20px; z-index: 9999; min-width: 300px;
            opacity: 0; transform: translateX(100%); transition: all 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    /**
     * Performance optimizations
     */
    function initPerformanceOptimizations() {
        // Intersection Observer for lazy loading
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Preloader
        const preloader = document.querySelector('#preloader');
        if (preloader) {
            window.addEventListener('load', () => {
                preloader.style.opacity = '0';
                setTimeout(() => preloader.remove(), 300);
            });
        }
    }

    /**
     * Utility: Throttle function for performance
     */
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
        };
    }

    /**
     * Initialize everything when DOM is ready
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Initialize specific components if they exist
    window.addEventListener('load', () => {
        // Initialize GLightbox if available
        if (typeof GLightbox !== 'undefined') {
            GLightbox({ selector: '.glightbox' });
        }

        // Initialize PureCounter if available
        if (typeof PureCounter !== 'undefined') {
            new PureCounter();
        }
    });

})();
