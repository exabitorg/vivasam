/**
* Template Name: VIVASAM
* Template URL: https://bootstrapmade.com/clinic-bootstrap-template/
* Updated: Jul 23 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });


  /**
   * Language Selector
   */
  // main.js

const translations = {
  uz: {
    home: "Bosh sahifa",
    contact: "Bog'lanish",
    products: "Mahsulotlarimiz",
    partners: "Hamkorlarimiz",
    sectionTitle: "Mahsulotlar",
    modal: { specialty: "Mutaxassislik", experience: "Tajriba" },
    slogan: "Sog`lig`ingiz poydevori.",
    quickContact: "Tezkor bog'lanish",
    trusted: "Ishonchli",
    contact247: "24/7 Aloqadamiz",
    certificate: "Sertifikatlar",
    about: {title: "Vivasam Group haqida", lead: "Vivasam Group — 2022-yilda bozorga chiqadigan zamonaviy parhez qo‘shimchalar ishlab chiqaruvchisi. Qisqa vaqt ichida kompaniya o‘zini yuqori sifatli oziq-ovqat qo‘shimchalarining ishonchli ishlab chiqaruvchisi va yetkazib beruvchisi sifatida ko‘rsatdi, innovatsion formulalar, tabiiy ingredientlar va salomatlikka ilmiy yondashuvni tarqatdi.", text1: "Bugungi kunda Vivasam assortimentida immunitetni saqlash, ovqat hazm qilishni yaxshilash, uyquni normallashtirish, energiyani oshirish va tana salomatligini har tomonlama yaxshilashga qaratilgan 11 dan ortiq turdagi mahsulotlar mavjud. Barcha mahsulotlar qat'iy sifat nazorati ostida va zamonaviy ishlab chiqarish standartlariga mos keladi.", text2: "Kompaniyaning vazifasi sog'liqni saqlashni qulay, samarali va xavfsiz qilishdir. Vivasam Group ko'p yillar davomida faol hayot tarzini saqlab qolish va salomatlikni yaxshilash uchun barchaga tabiiy echimlarni taklif qilishga intiladi."},
    partners: "Hamkorlarimiz",
    contact_description: "Biz bilan bog'laning, biz sizga yordam berishga tayyormiz.",
    location: "Manzil",
    footer:{location: "Toshkent shahar, Yakkasaroy tumani, Bobur kochasi 73 A ",  phone: "Telefon",social: "Ijtimoiy tarmoqlar", rights: "Barcha huquqlar himoyalangan © 2022 Vivasam Group"}
  },
  uz_cyrl: {
    home: "Бош саҳифа",
    contact: "Боғланиш",
    products: "Маҳсулотларимиз",
    partners: "Ҳамкорларимиз",
    sectionTitle: "Маҳсулотлар",
    modal: { specialty: "Мутаxассислик", experience: "Тажриба" },
    slogan: "Монолит здоровья.",
    quickContact: "Тезкор боғланиш",
    trusted: "Ишончли",
    contact247: "24/7 Алоқадамиз",
    certificate: "Сертификатлар",
    about: {title: "Vivasam Group haqida", lead: "Vivasam Group — 2022-йилда бозорга чиқадиган замонавий парҳез қўшимчалар ишлаб чиқарувчиси. Қисқа вақт ичида компания ўзини юқори сифатли озиқ-овқат қўшимчаларининг ишончли ишлаб чиқарувчиси ва етказиб берувчиси сифатида кўрсатди, инновацион формулалар, табиий ингредиентлар ва саломатликка илмий ёндашувни тарқатди.", text1: "Бугунги кунда Vivasam ассортиментида иммунитетни сақлаш, овқат ҳазм қилишни яхшилаш, уйқуни нормаллаштириш, энергияни ошириш ва тана саломатлигини ҳар томонлама яхшилашга қаратилган 11 дан ортиқ турдаги маҳсулотлар мавжуд. Барча маҳсулотлар қатъий сифат назорати остида ва замонавий ишлаб чиқариш стандартларига мос келади.", text2: "Компаниянинг вазифаси соғлиқни сақлашни қулай, самарали ва хавфсиз қилишдир. Vivasam Group кўп йиллар давомида фаол ҳаёт тарзини сақлаб қолиш ва саломатликни яхшилаш учун барчага табиий ечимларни таклиф қилишга интилмоқда."},
    partners: "Ҳамкорларимиз",
    contact_description: "Биз билан боғланинг, биз сизга ёрдам беришга тайёрмиз.",
    location: "Манзил",
    footer: {location: "Ташкент щаxap, Яккасарой райони, Бабур koчаси 73 A", phone: "Телефон", social: "Ижтимоий тармоқлар", rights: "Барча ҳуқуқлар ҳимояланган © 2022 Vivasam Group"}

  },
  ru: {
    home: "Главная",
    contact: "Контакты",
    products: "Наши продукты",
    partners: "Партнёры",
    sectionTitle: "Продукты",
    modal: { specialty: "Специальность", experience: "Опыт" },
    slogan: "Монолит здоровья.",
    quickContact: "Быстрый контакт",
    trusted: "Надежный",
    contact247: "Контакт 24/7",
    certificate: "Сертификаты",
    about: {title: "О компании Vivasam Group", lead: "Компания Vivasam Group — современный производитель биологически активных добавок, работающий на рынке с 2022 года. За короткий срок компания зарекомендовала себя как надёжный разработчик и поставщик качественных БАДов, сочетающих инновационные формулы, натуральные ингредиенты и научный подход к здоровью.", text1: "Сегодня в ассортименте Vivasam представлено более 11 наименований препаратов, направленных на поддержание иммунитета, улучшение пищеварения, нормализацию сна, повышение энергии, а также комплексное оздоровление организма. Все продукты проходят строгий контроль качества и соответствуют современным стандартам производства.", text2: "Миссия компании — сделать заботу о здоровье доступной, эффективной и безопасной. Vivasam Group стремится предложить каждому человеку натуральные решения для поддержания активного образа жизни и укрепления здоровья на долгие годы."},
    partners: "Наши партнёры",
    contact_description: "Свяжитесь с нами, мы готовы помочь вам.",
    location: "Адрес",
    footer: {location: "г.Ташкент, Яккасаройский район, улица Бабура 73 А", phone: "Телефон", social: "Социальные сети", rights: "Все права защищены © 2022 Vivasam Group"}
  },
  en: {
    home: "Home",
    contact: "Contact",
    products: "Products",
    partners: "Partners",
    sectionTitle: "Products",
    modal: { specialty: "Specialty", experience: "Experience" },
    slogan: "Base of your health.",
    quickContact: "Quick Contact",
    trusted: "Trusted",
    contact247: "24/7 Contact",
    certificate: "Certificates",
    about: {title: "About Vivasam Group", lead: "Vivasam Group is a modern manufacturer of dietary supplements that will enter the market in 2022. In a short period of time, the company has established itself as a reliable developer and supplier of high-quality dietary supplements, distributing innovative formulas, natural ingredients and a scientific approach to health.z", text1: "Today, Vivasam's range includes more than 11 types of products aimed at maintaining immunity, improving digestion, normalizing sleep, increasing energy, and comprehensively improving the health of the body. All products undergo strict quality control and comply with modern production standards.", text2: "The company's mission is to make health care accessible, effective and safe. Vivasam Group strives to offer everyone natural solutions to maintain an active lifestyle and improve health for many years."},
    partners: "Our Partners",
    contact_description: "Contact us, we are ready to help you.",
    location: "Location",
    footer: {location: "Tashkent city, Yakkasaroy district, Babur street 73 A", phone: "Phone", social: "Social Networks", rights: "All rights reserved © 2022 Vivasam Group"}
  }
};

const langSelect = document.getElementById("language-select");
langSelect.addEventListener("change", (e) => {
  localStorage.setItem("selectedLanguage", e.target.value);
  const lang = e.target.value;
  const t = translations[lang];
  document.querySelector(".nav-home").textContent = t.home;
  document.querySelector(".nav-contact").textContent = t.contact;
  document.querySelector(".nav-products").textContent = t.products;
  document.querySelector(".nav-partners").textContent = t.partners;
  document.querySelector("#find-a-product h2").textContent = t.sectionTitle;
  document.querySelector("#hero .slogan").textContent = t.slogan;
  document.querySelector("#hero .quickContact").textContent = t.quickContact;
  document.querySelector("#hero .trusted").textContent = t.trusted;
  document.querySelector("#hero .contact247").textContent = t.contact247;
  document.querySelector("#featured-departments h2").textContent = t.certificate;
  document.querySelector("#home-about .section-heading").textContent = t.about.title;
  document.querySelector("#home-about .lead-text").textContent = t.about.lead;
  document.querySelector("#home-about .second-paragraph").textContent = t.about.text1;
  document.querySelector("#home-about .third-paragraph").textContent = t.about.text2
  document.querySelector("#partners h2").textContent = t.partners;
  document.querySelector("#quick-contact h2").textContent = t.quickContact;
  document.querySelector("#quick-contact p").textContent = t.contact_description;
  document.querySelector("#quick-contact #location").textContent = t.location;
  document.querySelector("#footer span").textContent = t.footer.location;
  document.querySelector("#footer h5").textContent = t.footer.social;
  document.querySelector("#footer #footer-bottom .rights").textContent = t.footer.rights;


  //

    fetch("data/products.json")
      .then(res => res.json())
      .then(products => {
        const container = document.getElementById("products-grid");
        container.innerHTML = products.map((p, i) => {
          const swiperClass = `swiper-related-${i}`;
        return `
          <div class="col-md-4 mb-4">
            <div class="doctor-profile">
              <div class="profile-header">
                <div class="swiper ${swiperClass}">
                  <div class="swiper-wrapper">
                    ${p.images.map(img => `
                      <div class="swiper-slide">
                        <img src="${img}" class="img-fluid rounded border product-image" />
                      </div>
                    `).join("")}
                  </div>
                  <div class="swiper-pagination py-2"></div>
                </div>
              </div>
              <div class="doctor-details p-3">
                <h4>${p.name?.[lang] || p.name?.ru}</h4>
              </div>
              <div class="action-buttons p-3">
                <a href="product.html?index=${i}" class="text-white fs-6">
                  <button class="btn btn-primary">
                    ${lang === "uz" ? "Batafsil" : lang === "en" ? "Learn More" : "Подробнее"}
                  </button>
                </a>
              </div>
            </div>
          </div>
        `}).join("");
        products.forEach((_, i) => {
        const swiperClass = `.swiper-related-${i}`;
        new Swiper(swiperClass, {
          loop: true,
          pagination: {
            el: `${swiperClass} .swiper-pagination`,
            clickable: true,
          },
        });
      });
      });
});

let currentLang = langSelect.value;

// Fetch and display products
fetch("products.json")
  .then((res) => res.json())
  .then((products) => {
    const grid = document.getElementById("products-grid");
    grid.innerHTML = "";
    products.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-md-4 mb-4";
      col.innerHTML = `
        <div class="card product-card shadow-sm h-100" role="button">
          <img src="${product.image}" class="card-img-top previewable-image" alt="${product.name[currentLang]}" />
          <div class="card-body">
            <h5 class="card-title">${product.name[currentLang]}</h5>
            <p class="card-text">${product.specialty[currentLang]}</p>
            <small class="text-muted">${product.experience[currentLang]}</small>
          </div>
        </div>
      `;
      col.querySelector(".product-card").addEventListener("click", () => showProductModal(product));
      grid.appendChild(col);
    });

    document.querySelectorAll(".previewable-image").forEach((img) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", (e) => {
        e.stopPropagation();
        const overlay = document.createElement("div");
        overlay.classList.add("image-overlay");
        overlay.innerHTML = `
          <img src="${img.src}" class="zoomed-image" />
          <span class="close-overlay">&times;</span>
        `;
        document.body.appendChild(overlay);
        overlay.querySelector(".close-overlay").onclick = () => overlay.remove();
      });
    });
  });

function showProductModal(product) {
  const lang = document.getElementById("language-select").value;
  document.getElementById("productModalLabel").textContent = product.name[lang];
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalSpecialty").textContent = `${translations[lang].modal.specialty}: ${product.specialty[lang]}`;
  document.getElementById("modalExperience").textContent = `${translations[lang].modal.experience}: ${product.experience[lang]}`;
  new bootstrap.Modal(document.getElementById("productModal")).show();
}

document.addEventListener("DOMContentLoaded", function () {
  const productModal = document.getElementById("productModal");
  const modalTitle = document.getElementById("productModalLabel");
  const modalImage = document.getElementById("modalImage");
  const modalSpecialty = document.getElementById("modalSpecialty");
  const modalExperience = document.getElementById("modalExperience");

  const viewButtons = document.querySelectorAll('[data-bs-target="#productModal"]');

  viewButtons.forEach(button => {
    button.addEventListener("click", function () {
      const name = button.getAttribute("data-name");
      const specialty = button.getAttribute("data-specialty");
      const experience = button.getAttribute("data-experience");
      const image = button.getAttribute("data-image");

      modalTitle.textContent = name;
      modalSpecialty.textContent = specialty;
      modalExperience.textContent = experience;
      modalImage.src = image;
    });
  });
});
})();



// (function () {
//   "use strict";

//   const translations = {
//     uz: {
//       home: "Bosh sahifa",
//       contact: "Bog'lanish",
//       products: "Mahsulotlarimiz",
//       partners: "Hamkorlarimiz",
//       sectionTitle: "Mahsulotlar",
//       modal: { specialty: "Yo‘nalish", experience: "Tajriba" },
//     },
//     uz_cyrl: {
//       home: "Бош саҳифа",
//       contact: "Боғланиш",
//       products: "Маҳсулотларимиз",
//       partners: "Ҳамкорларимиз",
//       sectionTitle: "Маҳсулотлар",
//       modal: { specialty: "Йўналиш", experience: "Тажриба" },
//     },
//     ru: {
//       home: "Главная",
//       contact: "Контакты",
//       products: "Наши продукты",
//       partners: "Партнёры",
//       sectionTitle: "Продукты",
//       modal: { specialty: "Специальность", experience: "Опыт" },
//     },
//     en: {
//       home: "Home",
//       contact: "Contact",
//       products: "Products",
//       partners: "Partners",
//       sectionTitle: "Products",
//       modal: { specialty: "Specialty", experience: "Experience" },
//     },
//   };

//   const langSelect = document.getElementById("language-select");
//   let currentLang = langSelect?.value || "uz";

//   const applyTranslations = () => {
//     const t = translations[currentLang];
//     document.querySelector(".nav-home").textContent = t.home;
//     document.querySelector(".nav-contact").textContent = t.contact;
//     document.querySelector(".nav-products").textContent = t.products;
//     document.querySelector(".nav-partners").textContent = t.partners;
//     document.querySelector("#find-a-product h2").textContent = t.sectionTitle;
//   };

//   langSelect?.addEventListener("change", (e) => {
//     currentLang = e.target.value;
//     applyTranslations();
//     renderProducts(); // products.js dan keyin ishlaydi
//   });

//   window.renderProducts = function () {
//     if (!window.productsData) return;

//     const grid = document.getElementById("products-grid");
//     grid.innerHTML = "";

//     window.productsData.forEach((product, i) => {
//       const col = document.createElement("div");
//       col.className = "col-lg-4 col-md-6 g-4 mb-4";

//       col.innerHTML = `
//         <div class="doctor-profile" data-aos="zoom-in" data-aos-delay="${100 + i * 100}">
//           <div class="profile-header">
//             <img src="${product.image}" alt="${product.name[currentLang]}" height="600px" class="img-fluid contain previewable-image" />
//           </div>
//           <div class="doctor-details mx-4">
//             <h4>${product.name[currentLang]}</h4>
//             <span class="specialty-tag">${product.specialty[currentLang]}</span>
//             <div class="experience-info">
//               <span>${product.experience[currentLang]}</span>
//             </div>
//             <div class="action-buttons mt-4">
//               <a href="#" class="btn-secondary">View Details</a>
//               <a href="#quick-contact" class="btn-primary">Book Now</a>
//             </div>
//           </div>
//         </div>
//       `;

//       col.querySelector(".doctor-profile").addEventListener("click", () => {
//         showProductModal(product);
//       });

//       grid.appendChild(col);
//     });

//     // Zoom image preview
//     document.querySelectorAll(".previewable-image").forEach((img) => {
//       img.style.cursor = "zoom-in";
//       img.addEventListener("click", (e) => {
//         e.stopPropagation();
//         const overlay = document.createElement("div");
//         overlay.classList.add("image-overlay");
//         overlay.innerHTML = `
//           <img src="${img.src}" class="zoomed-image" />
//           <span class="close-overlay">&times;</span>
//         `;
//         document.body.appendChild(overlay);
//         overlay.querySelector(".close-overlay").onclick = () => overlay.remove();
//       });
//     });
//   };

//   function showProductModal(product) {
//     const t = translations[currentLang].modal;
//     document.getElementById("productModalLabel").textContent = product.name[currentLang];
//     document.getElementById("modalImage").src = product.image;
//     document.getElementById("modalSpecialty").textContent = `${t.specialty}: ${product.specialty[currentLang]}`;
//     document.getElementById("modalExperience").textContent = `${t.experience}: ${product.experience[currentLang]}`;
//     new bootstrap.Modal(document.getElementById("productModal")).show();
//   }

//   applyTranslations();
// })();
