// document.addEventListener("DOMContentLoaded", function () {
//   let lang = localStorage.getItem("selectedLanguage");

//   fetch("data/products.json")
//     .then((res) => res.json())
//     .then((products) => {
//       const grid = document.getElementById("products-grid");
//   let lang = localStorage.getItem("selectedLanguage") || "en"; // Default to English if no language is set

//       products.forEach((doc, i) => {
//         const col = document.createElement("div");
//         col.className = "col-lg-4 col-md-6 g-4 mb-4";

//         col.innerHTML = `
//           <div class="doctor-profile" data-aos="zoom-in" data-aos-delay="${100 + i * 100}">
//             <div class="profile-header">
//               <img src="${doc.image}" alt="${doc.name[lang]}" height="600px" class="img-fluid contain" />
//             </div>
//             <div class="doctor-details mx-4">
//               <h4>${doc.name[lang]}</h4>
//               <span class="specialty-tag">${doc.specialty[lang]}</span>

//               <div class="action-buttons mt-4">
//                 <a href="#" class="btn-secondary">View Details</a>
//                 <a href="#quick-contact" class="btn-primary">Book Now</a>
//               </div>
//             </div>
//           </div>
//         `;
//         grid.appendChild(col);
//       });
//     })
//     .catch((err) => {
//       console.error("Failed to load products:", err);
//     });
// });


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
    footer:{location: "Toshkent shahar, Yakkasaroy tumani, Bobur kochasi 73 A ",  phone: "Telefon",social: "Ijtimoiy tarmoqlar", rights: "Barcha huquqlar himoyalangan © 2022 Vivasam Group"},
    more: "Batafsil"
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
    footer: {location: "Ташкент щаxap, Яккасарой райони, Бабур koчаси 73 A", phone: "Телефон", social: "Ижтимоий тармоқлар", rights: "Барча ҳуқуқлар ҳимояланган © 2022 Vivasam Group"},
    
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
    footer: {location: "г.Ташкент, Яккасаройский район, улица Бабура 73 А", phone: "Телефон", social: "Социальные сети", rights: "Все права защищены © 2022 Vivasam Group"},
    more: "Подробнее"
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
    footer: {location: "Tashkent city, Yakkasaroy district, Babur street 73 A", phone: "Phone", social: "Social Networks", rights: "All rights reserved © 2022 Vivasam Group"},
    more: "Learn more"
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
  document.querySelector("#moreBtn").textContent = t.more

  //
   fetch("data/products.json")
      .then(res => res.json())
      .then(products => {
        const container = document.getElementById("related-products");
        container.innerHTML = products.map((p, i) => `
          <div class="col-md-4">
          <div class="doctor-profile">
      <div class="profile-header">
              <img src="${p.images?.[0]}" height="400px" class="card-img-top product-image" alt="${p.name?.[lang] || p.name?.ru}">
              </div>
              <div class="card-body px-4 py-3">
                <h5 class="card-title">${p.name?.[lang] || p.name?.ru}</h5>
                <p class="card-text text-truncate">${p.description?.[lang] || ""}</p>
              </div>
              <div class="doctor-details px-4 py-3">
                <a href="product.html?index=${i}" class="btn btn-primary" id="moreBtn">${lang == "uz" ? "Batafsil":lang == "en" ? "Learn More" : "Подробнее" }</a>
              </div>
            </div>
          </div>
        `).join("");
      });

});
// document.addEventListener("DOMContentLoaded", function () {
//   fetch("data/products.json")
//     .then((res) => res.json())
//     .then((products) => {
//       window.productsData = products;
// console.log("Products loaded successfully:", products);

//       if (typeof window.renderProducts === "function") {
//         window.renderProducts();
//       }
//     })
//     .catch((err) => {
//       console.error("Mahsulotlar yuklanmadi:", err);
//     });
// });
