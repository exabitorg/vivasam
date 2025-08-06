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
            lead: "Vivasam Group is a modern manufacturer of dietary supplements that will enter the market in 2022. In a short period of time, the company has established itself as a reliable developer and supplier of high-quality dietary supplements, distributing innovative formulas, natural ingredients and a scientific approach to health.z", 
            text1: "Today, Vivasam's range includes more than 11 types of products aimed at maintaining immunity, improving digestion, normalizing sleep, increasing energy, and comprehensively improving the health of the body. All products undergo strict quality control and comply with modern production standards.", 
            text2: "The company's mission is to make health care accessible, effective and safe. Vivasam Group strives to offer everyone natural solutions to maintain an active lifestyle and improve health for many years.",
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
            lead: "Компания Vivasam Group — современный производитель биологически активных добавок, работающий на рынке с 2022 года. За короткий срок компания зарекомендовала себя как надёжный разработчик и поставщик качественных БАДов, сочетающих инновационные формулы, натуральные ингредиенты и научный подход к здоровью.", 
            text1: "Сегодня в ассортименте Vivasam представлено более 11 наименований препаратов, направленных на поддержание иммунитета, улучшение пищеварения, нормализацию сна, повышение энергии, а также комплексное оздоровление организма. Все продукты проходят строгий контроль качества и соответствуют современным стандартам производства.", 
            text2: "Миссия компании — сделать заботу о здоровье доступной, эффективной и безопасной. Vivasam Group стремится предложить каждому человеку натуральные решения для поддержания активного образа жизни и укрепления здоровья на долгие годы.",
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
            lead: "Vivasam Group — 2022-yilda bozorga chiqadigan zamonaviy parhez qo‘shimchalar ishlab chiqaruvchisi. Qisqa vaqt ichida kompaniya o‘zini yuqori sifatli oziq-ovqat qo‘shimchalarining ishonchli ishlab chiqaruvchisi va yetkazib beruvchisi sifatida ko‘rsatdi, innovatsion formulalar, tabiiy ingredientlar va salomatlikka ilmiy yondashuvni tarqatdi.", 
            text1: "Bugungi kunda Vivasam assortimentida immunitetni saqlash, ovqat hazm qilishni yaxshilash, uyquni normallashtirish, energiyani oshirish va tana salomatligini har tomonlama yaxshilashga qaratilgan 11 dan ortiq turdagi mahsulotlar mavjud. Barcha mahsulotlar qat'iy sifat nazorati ostida va zamonaviy ishlab chiqarish standartlariga mos keladi.", 
            text2: "Kompaniyaning vazifasi sog'liqni saqlashni qulay, samarali va xavfsiz qilishdir. Vivasam Group ko'p yillar davomida faol hayot tarzini saqlab qolish va salomatlikni yaxshilash uchun barchaga tabiiy echimlarni taklif qilishga intiladi.",
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
    // Always default to 'ru' if not set
    let savedLanguage = localStorage.getItem('selectedLanguage');
    if (!savedLanguage) {
        savedLanguage = 'ru';
        localStorage.setItem('selectedLanguage', 'ru');
    }
    languageSelect.value = savedLanguage;
    this.setLanguage(savedLanguage);

    languageSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        localStorage.setItem('selectedLanguage', lang);
        this.setLanguage(lang);
    });
}



    /**
     * Set language and translate content
     */
    async function setLanguage(language) {
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
            const container = document.getElementById('products-grid');
            const response = await fetch('data/products.json');
            const products = await response.json();
            const currentLang = localStorage.getItem('selectedLanguage') || 'ru';


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
     * initLanguageSelector
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
function renderProducts(products, language) {
    const container = document.getElementById('products-grid');
    if (!container) return;

    container.innerHTML = products.map((product, index) => {
        const swiperClass = `swiper-product-${index}`;
        return `
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="product-card">
                <div class="product-image-container">
                  <div class="swiper ${swiperClass}">
                    <div class="swiper-wrapper">
                      ${product.images.map(img => `
                        <div class="swiper-slide">
                          <img src="${img}" class="product-image" alt="Product Image">
                        </div>
                      `).join('')}
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
                <div class="product-content">
                  <h4 class="product-title">${product.name?.[language] || product.name?.ru || 'Product'}</h4>
                  <div class="product-actions">
                    <a href="product.html?index=${index}" class="btn btn-primary w-100">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
        `;
    }).join('');

    // Initialize Swiper for each product card
    products.forEach((_, index) => {
        setTimeout(() => {
            new Swiper(`.swiper-product-${index}`, {
                loop: true,
                pagination: {
                    el: `.swiper-product-${index} .swiper-pagination`,
                    clickable: true,
                },
                // Use default slide effect, no fade, no autoplay
            });
        }, 0);
    });
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
