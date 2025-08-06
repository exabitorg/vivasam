/* ========================================
   VIVASAM - Modern JavaScript Application
   ======================================== */

class VivasamApp {
    constructor() {
        this.init();
    }

    init() {
        this.initAOS();
        this.initNavbar();
        this.initSmoothScrolling();
        this.initBackToTop();
        this.initLanguageSelector();
        this.loadProducts();
        this.initContactForm();
        this.initScrollAnimations();
    }

    // Initialize AOS (Animate On Scroll)
    initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 50
            });
        }
    }

    // Initialize navbar scroll behavior
    initNavbar() {
        const navbar = document.getElementById('mainNav');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Handle scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Handle active link highlighting
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', () => {
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
        });
    }

    // Initialize smooth scrolling for navigation links
    initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    // Initialize back to top button
    initBackToTop() {
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initialize language selector
    initLanguageSelector() {
        const languageSelect = document.getElementById('language-select');
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
        
        languageSelect.value = savedLanguage;
        this.setLanguage(savedLanguage);
        
        languageSelect.addEventListener('change', (e) => {
            const selectedLanguage = e.target.value;
            localStorage.setItem('selectedLanguage', selectedLanguage);
            this.setLanguage(selectedLanguage);
        });
    }

    // ...existing code...
    // Set language and translate content
    setLanguage(language) {
        const translations = {
            en: {
                home: 'Home',
                about: 'About',
                products: 'Products',
                partners: 'Partners',
                contact: 'Contact',
                trusted: 'Trusted',
                available24: '24/7 Available',
                heroSubtitle: 'Foundation of Health.',
                heroDescription: 'Premium natural supplements crafted with scientific precision for your optimal health and wellness journey.',
                exploreProducts: 'Explore Products',
                getInTouch: 'Get in Touch',
                quickContact: 'Quick Contact',
                aboutTitle: 'About VIVASAM Group',
                aboutLead: "Vivasam Group is a modern manufacturer of dietary supplements that has been on the market since 2022. In a short period, the company has established itself as a reliable developer and supplier of high-quality dietary supplements, combining innovative formulas, natural ingredients, and a scientific approach to health.",
                aboutText1: "Today, Vivasam's range includes more than 11 types of products aimed at supporting immunity, improving digestion, normalizing sleep, increasing energy, and comprehensive health improvement. All products undergo strict quality control and comply with modern production standards.",
                aboutText2: "The company's mission is to make health care accessible, effective, and safe. Vivasam Group strives to offer everyone natural solutions to maintain an active lifestyle and strengthen health for many years.",
                learnMore: 'Learn More',
                certificates: 'Certificates',
                sectionTitle: 'Our Products',
                contactDescription: 'Get in touch with us. We\'re ready to help you with your health journey.',
                brandTagline: 'Foundation of Health.',
                partners: 'Partners',
                address: 'Address',
    phone: 'Phone',
    email: 'Email',
    callNow: 'Call Now',
    viewLocation: 'View Location',
    contactInfo: 'Contact Info',
    followUs: 'Follow Us',
    copyright: '© 2022 VIVASAM Group. All rights reserved.'
            },
            ru: {
                home: 'Главная',
                about: 'О компании',
                products: 'Наши продукты',
                partners: 'Партнёры',
                contact: 'Контакты',
                trusted: 'Надежный',
                available24: 'Доступно 24/7',
                heroSubtitle: 'Монолит здоровья.',
                heroDescription: 'Премиальные натуральные добавки, созданные с научной точностью для вашего оптимального здоровья и благополучия.',
                exploreProducts: 'Наши продукты',
                getInTouch: 'Связаться с нами',
                quickContact: 'Быстрый контакт',
                aboutTitle: 'О компании Vivasam Group',
                aboutLead: "Компания Vivasam Group — современный производитель биологически активных добавок, работающий на рынке с 2022 года. За короткий срок компания зарекомендовала себя как надёжный разработчик и поставщик качественных БАДов, сочетающих инновационные формулы, натуральные ингредиенты и научный подход к здоровью.",
                aboutText1: "Сегодня в ассортименте Vivasam представлено более 11 наименований препаратов, направленных на поддержание иммунитета, улучшение пищеварения, нормализацию сна, повышение энергии, а также комплексное оздоровление организма. Все продукты проходят строгий контроль качества и соответствуют современным стандартам производства.",
                aboutText2: "Миссия компании — сделать заботу о здоровье доступной, эффективной и безопасной. Vivasam Group стремится предложить каждому человеку натуральные решения для поддержания активного образа жизни и укрепления здоровья на долгие годы.",
                learnMore: 'Подробнее',
                certificates: 'Сертификаты',
                sectionTitle: 'Наши продукты',
                contactDescription: 'Свяжитесь с нами. Мы готовы помочь вам в вашем путешествии к здоровью.',
                brandTagline: 'Монолит здоровья.',
                address: 'Адрес',
                phone: 'Телефон',
                email: 'Эл. почта',
                callNow: 'Позвонить',
                viewLocation: 'Посмотреть на карте',
                contactInfo: 'Контактная информация',
                followUs: 'Мы в соцсетях',
                copyright: '© 2022 VIVASAM Group. Все права защищены.'
            },
            uz: {
                home: 'Bosh sahifa',
                about: 'Kompaniya haqida',
                products: 'Mahsulotlarimiz',
                partners: 'Hamkorlar',
                contact: 'Aloqa',
                trusted: 'Ishonchli',
                available24: '24/7 mavjud',
                heroSubtitle: 'Salomatlik poydevori.',
                heroDescription: 'Sizning optimal salomatlik va farovonlik sayohatingiz uchun ilmiy aniqlik bilan yaratilgan premium tabiiy qo\'shimchalar.',
                exploreProducts: 'Mahsulotlarni ko\'rish',
                getInTouch: 'Bog\'lanish',
                quickContact: 'Tezkor aloqa',
                aboutTitle: 'VIVASAM Group haqida',
                aboutLead: "Vivasam Group — 2022-yildan buyon bozorda faoliyat yuritayotgan zamonaviy parhez qo‘shimchalar ishlab chiqaruvchisi. Qisqa vaqt ichida kompaniya o‘zini yuqori sifatli oziq-ovqat qo‘shimchalarining ishonchli ishlab chiqaruvchisi va yetkazib beruvchisi sifatida ko‘rsatdi, innovatsion formulalar, tabiiy ingredientlar va salomatlikka ilmiy yondashuvni birlashtirdi.",
                aboutText1: "Bugungi kunda Vivasam assortimentida immunitetni saqlash, ovqat hazm qilishni yaxshilash, uyquni normallashtirish, energiyani oshirish va tana salomatligini har tomonlama yaxshilashga qaratilgan 11 dan ortiq turdagi mahsulotlar mavjud. Barcha mahsulotlar qat'iy sifat nazorati ostida va zamonaviy ishlab chiqarish standartlariga mos keladi.",
                aboutText2: "Kompaniyaning vazifasi sog'liqni saqlashni qulay, samarali va xavfsiz qilishdir. Vivasam Group ko'p yillar davomida faol hayot tarzini saqlab qolish va salomatlikni yaxshilash uchun barchaga tabiiy echimlarni taklif qilishga intiladi.",
                learnMore: 'Batafsil',
                certificates: 'Sertifikatlar',
                sectionTitle: 'Bizning mahsulotlar',
                contactDescription: 'Biz bilan bog\'laning. Biz sizning salomatlik sayohatingizda yordam berishga tayyormiz.',
                brandTagline: 'Salomatlik poydevori.',
                address: 'Manzil',
                phone: 'Telefon',
                email: 'Email',
                callNow: 'Qo‘ng‘iroq qilish',
                viewLocation: 'Joylashuvni ko‘rish',
                contactInfo: 'Aloqa ma’lumotlari',
                followUs: 'Biz ijtimoiy tarmoqlarda',
                copyright: '© 2022 VIVASAM Group. Barcha huquqlar himoyalangan.'
            }
        };

        const currentTranslations = translations[language];

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTranslations[key]) {
                element.textContent = currentTranslations[key];
            }
        });

        // Translate placeholder attributes if needed
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (currentTranslations[key]) {
                element.setAttribute('placeholder', currentTranslations[key]);
            }
        });

        // Re-render products on language change
        this.loadProducts();
    }

    // Load and display products
    async loadProducts() {
        try {
            const response = await fetch('data/products.json');
            const products = await response.json();
            const currentLang = localStorage.getItem('selectedLanguage') || 'ru';
            
            this.renderProducts(products, currentLang);
        } catch (error) {
            console.error('Error loading products:', error);
            this.showFallbackProducts();
        }
    }

    // Render products grid
    renderProducts(products, language) {
        const container = document.getElementById('products-grid');
        if (!container) return;

        container.innerHTML = products.map((product, index) => {
            const productName = product.name?.[language] || product.name?.ru || 'Product';
            const swiperClass = `swiper-product-${index}`;
            
            return `
                <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="product-card">
                        <div class="product-image-container">
                            ${this.createProductSwiper(product.images, swiperClass)}
                        </div>
                        <div class="product-content">
                            <h4 class="product-title">${productName}</h4>
                            <div class="product-actions">
                                <a href="product.html?index=${index}" class="btn btn-primary w-100">
                                    ${this.getTranslation('learnMore', language)}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Initialize Swiper for each product
        this.initProductSwipers(products.length);
    }

    // Create Swiper HTML for product images
    createProductSwiper(images, swiperClass) {
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

    // Initialize Swiper instances for products
    initProductSwipers(count) {
        for (let i = 0; i < count; i++) {
            const swiperElement = document.querySelector(`.swiper-product-${i}`);
            if (swiperElement && typeof Swiper !== 'undefined') {
                new Swiper(swiperElement, {
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: `.swiper-product-${i} .swiper-pagination`,
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

    // Get translation for given key and language
    getTranslation(key, language) {
        const translations = {
            learnMore: {
                en: 'Learn More',
                ru: 'Подробнее',
                uz: 'Batafsil'
            }
        };

        return translations[key]?.[language] || translations[key]?.ru || key;
    }

    // Show fallback products if JSON fails to load
    showFallbackProducts() {
        const container = document.getElementById('products-grid');
        if (!container) return;

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

    // Initialize contact form
    initContactForm() {
        const contactForms = document.querySelectorAll('.contact-form');
        
        contactForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactSubmission(form);
            });
        });
    }

    // Handle contact form submission
    handleContactSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            this.showNotification('Message sent successfully!', 'success');
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} position-fixed`;
        notification.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // Initialize scroll animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe elements that should animate on scroll
        document.querySelectorAll('.feature-item, .product-card, .partner-logo').forEach(el => {
            observer.observe(el);
        });
    }

    // Utility: Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Utility: Throttle function
    throttle(func, limit) {
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
}

// Performance optimizations
const optimizedScrollHandler = (() => {
    let ticking = false;
    
    return (callback) => {
        if (!ticking) {
            requestAnimationFrame(() => {
                callback();
                ticking = false;
            });
            ticking = true;
        }
    };
})();

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VivasamApp();
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause any intensive operations when page is hidden
        console.log('Page hidden - pausing operations');
    } else {
        // Resume operations when page is visible
        console.log('Page visible - resuming operations');
    }
});

// Export for potential external use
window.VivasamApp = VivasamApp;
