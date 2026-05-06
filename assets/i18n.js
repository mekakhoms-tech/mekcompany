// ===== MEK Imports-Exports — Bilingual i18n =====
// Translates elements with data-i18n="key" attribute.
// English remains the source. Lao translations via Claude.
//
// Adding new translations: add a key under both EN and LO maps below,
// then add data-i18n="key" to the element in the HTML.

const I18N = {
  en: {
    // ===== NAV =====
    'nav.about': 'About',
    'nav.performance': 'Performance',
    'nav.services': 'Services',
    'nav.brands': 'Brands',
    'nav.products': 'Products',
    'nav.gallery': 'Gallery',
    'nav.news': 'News',
    'nav.careers': 'Careers',
    'nav.coverage': 'Coverage',
    'nav.partner': 'Partner With Us',
    'nav.tagline': 'The new era of diversity',

    // ===== HERO =====
    'hero.badge': 'Lao PDR · Vientiane Capital',
    'hero.sub': 'MEK Imports-Exports is Lao PDR’s leading import, export and distribution company — bringing trusted regional and global brands to every shelf, in every province. Founded 4 July 2021 by Mr. Mekakhom Sihalath, headquartered in Vientiane.',
    'hero.cta1': 'Explore Our Brands',
    'hero.cta2': 'Become a Partner',
    'hero.stat1': 'Active Stores',
    'hero.stat2': 'Provinces',
    'hero.stat3': 'Market Share',
    'hero.stat4': 'Trusted Brands',

    // ===== ABOUT =====
    'about.eyebrow': 'About MEK',
    'about.quote': '"Mek Gong Fa — let MEK be heard across all of Laos."',
    'about.quoteAttr': 'Company Mission',
    'about.founder': 'Founder & Managing Director · Vientiane Capital, Lao PDR',
    'about.eraTitle': 'MEK ERA',
    'about.eraHeadline': 'Our values, lived every day.',

    // ===== SERVICES =====
    'services.eyebrow': 'What We Do',
    'services.lead': 'From customs clearance and warehousing to nationwide store coverage and in-market activation, MEK is the single partner brand owners need to launch, grow and protect their share in Lao PDR.',
    'services.s1.title': 'Import & Export',
    'services.s1.desc': 'Customs handling, regulatory paperwork, freight forwarding and duty optimisation for brands entering or leaving Lao PDR.',
    'services.s2.title': 'National Distribution',
    'services.s2.desc': 'Direct-to-store delivery across 16 of 18 provinces from three regional hubs — Vientiane, Luang Prabang and Pakse.',
    'services.s3.title': 'Logistics & Warehousing',
    'services.s3.desc': 'Bonded storage, cold-chain capability and inventory management designed for FMCG turnover and seasonal peaks.',
    'services.s4.title': 'Sales & Activation',
    'services.s4.desc': 'Field salesforce, merchandising, sampling and in-store promotions that convert distribution into actual consumer pull.',
    'services.s5.title': 'Brand Partnership',
    'services.s5.desc': 'Long-term distributor partnerships with category exclusivity, joint planning and trade marketing investment.',
    'services.s6.title': 'Market Intelligence',
    'services.s6.desc': 'Province-by-province data on universe, coverage and sell-through — one of the cleanest retail datasets in Laos.',

    // ===== BRANDS / PRODUCTS / WHY =====
    'brands.eyebrow': 'Our Brands',
    'why.eyebrow': 'Why MEK',
    'coverage.eyebrow': 'Coverage',
    'contact.eyebrow': 'Get In Touch',
    'contact.lead': 'Whether you’re a brand owner exploring entry into Laos, a retailer interested in our portfolio, or a supplier looking for a regional partner — we’d love to hear from you.',
    'contact.formTitle': 'Partner With Us',
    'contact.formSub': 'Tell us a little about your brand or business and our team will be in touch within two working days.',
    'contact.fName': 'Full Name',
    'contact.fCompany': 'Company',
    'contact.fEmail': 'Email',
    'contact.fPhone': 'Phone',
    'contact.fInterest': 'I’m interested in',
    'contact.fMsg': 'Your message',
    'contact.submit': 'Send Message',

    // ===== FOOTER =====
    'footer.company': 'Company',
    'footer.catalogue': 'Catalogue',
    'footer.contact': 'Contact',
    'footer.allRights': 'All rights reserved.',

    // ===== GALLERY / NEWS / CAREERS =====
    'page.home': 'Home',
    'page.viewAll': 'View all',
    'page.readArticle': 'Read article',
    'careers.applyNow': 'Apply Now',
    'careers.viewRole': 'View role',
    'careers.allRoles': 'All open roles',
    'careers.applyForRole': 'Apply for this role',
    'careers.openRoles': 'Open Positions',

    // ===== LANGUAGE PICKER =====
    'lang.welcome': 'Welcome to MEK Imports-Exports',
    'lang.choose': 'Please choose your language',
    'lang.en': 'English',
    'lang.lo': 'ລາວ (Lao)',
  },

  lo: {
    // ===== NAV =====
    'nav.about': 'ກ່ຽວກັບພວກເຮົາ',
    'nav.performance': 'ຜົນງານ',
    'nav.services': 'ການບໍລິການ',
    'nav.brands': 'ແບຣນ',
    'nav.products': 'ຜະລິດຕະພັນ',
    'nav.gallery': 'ຮູບພາບ',
    'nav.news': 'ຂ່າວສານ',
    'nav.careers': 'ຮ່ວມງານກັບເຮົາ',
    'nav.coverage': 'ພື້ນທີ່ກວມເອົາ',
    'nav.partner': 'ເປັນຄູ່ຮ່ວມງານ',
    'nav.tagline': 'ຍຸກໃໝ່ແຫ່ງຄວາມຫຼາກຫຼາຍ',

    // ===== HERO =====
    'hero.badge': 'ສປປ ລາວ · ນະຄອນຫຼວງວຽງຈັນ',
    'hero.sub': 'ບໍລິສັດ ເມກ ນຳເຂົ້າ-ສົ່ງອອກ ຈຳກັດຜູ້ດຽວ ເປັນບໍລິສັດນຳເຂົ້າ, ສົ່ງອອກ ແລະ ກະຈາຍສິນຄ້າ ຊັ້ນນຳໃນ ສປປ ລາວ — ນຳເອົາແບຣນທີ່ໜ້າເຊື່ອຖືທັງໃນພາກພື້ນ ແລະ ສາກົນ ມາສູ່ທຸກຮ້ານຄ້າ ໃນທຸກແຂວງ. ສ້າງຕັ້ງໃນວັນທີ 4 ກໍລະກົດ 2021 ໂດຍ ທ່ານ ເມກ້າຄຳ ສີຫາລາດ, ມີສຳນັກງານໃຫຍ່ຢູ່ນະຄອນຫຼວງວຽງຈັນ.',
    'hero.cta1': 'ສຳຫຼວດແບຣນຂອງເຮົາ',
    'hero.cta2': 'ເປັນຄູ່ຮ່ວມງານ',
    'hero.stat1': 'ຮ້ານຄ້າທີ່ກວມເອົາ',
    'hero.stat2': 'ແຂວງ',
    'hero.stat3': 'ສ່ວນແບ່ງຕະຫຼາດ',
    'hero.stat4': 'ແບຣນທີ່ເຊື່ອຖື',

    // ===== ABOUT =====
    'about.eyebrow': 'ກ່ຽວກັບ ເມກ',
    'about.quote': '"ເມກ ກ້ອງຟ້າ — ໃຫ້ຊື່ ເມກ ດັງກ້ອງທົ່ວປະເທດລາວ."',
    'about.quoteAttr': 'ພາລະກິດຂອງບໍລິສັດ',
    'about.founder': 'ຜູ້ກໍ່ຕັ້ງ ແລະ ຜູ້ອຳນວຍການບໍລິຫານ · ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ',
    'about.eraTitle': 'MEK ERA',
    'about.eraHeadline': 'ຄ່ານິຍົມຂອງເຮົາ, ປະຕິບັດທຸກວັນ.',

    // ===== SERVICES =====
    'services.eyebrow': 'ສິ່ງທີ່ເຮົາເຮັດ',
    'services.lead': 'ຈາກການຜ່ານພິທີການສຸກສາລາ ແລະ ການເກັບຮັກສາສິນຄ້າ ໄປຈົນເຖິງການກະຈາຍສິນຄ້າທົ່ວປະເທດ ແລະ ການເຄື່ອນໄຫວຢູ່ໃນຕະຫຼາດ, ເມກ ເປັນຄູ່ຮ່ວມງານດຽວທີ່ເຈົ້າຂອງແບຣນຕ້ອງການ ເພື່ອເປີດຕົວ, ເຕີບໂຕ ແລະ ປົກປ້ອງສ່ວນແບ່ງຕະຫຼາດໃນ ສປປ ລາວ.',
    'services.s1.title': 'ນຳເຂົ້າ ແລະ ສົ່ງອອກ',
    'services.s1.desc': 'ຜ່ານພິທີການສຸກສາລາ, ເອກະສານທາງລະບຽບ, ການຂົນສົ່ງສິນຄ້າ ແລະ ການເພີ່ມປະສິດທິພາບອາກອນ ສຳລັບແບຣນທີ່ເຂົ້າ ຫຼື ອອກຈາກ ສປປ ລາວ.',
    'services.s2.title': 'ການກະຈາຍສິນຄ້າທົ່ວປະເທດ',
    'services.s2.desc': 'ການຈັດສົ່ງໂດຍກົງສູ່ຮ້ານຄ້າ ກວມເອົາ 16 ໃນ 18 ແຂວງ ຈາກ 3 ສູນກາງພາກພື້ນ — ວຽງຈັນ, ຫຼວງພະບາງ ແລະ ປາກເຊ.',
    'services.s3.title': 'ການຂົນສົ່ງ ແລະ ຄັງເກັບສິນຄ້າ',
    'services.s3.desc': 'ຄັງເກັບສິນຄ້າທີ່ມີການຄ້ຳປະກັນ, ລະບົບລະບາຍຄວາມເຢັນ ແລະ ການບໍລິຫານສິນຄ້າຄົງຄັງ ອອກແບບສຳລັບ FMCG ແລະ ໄລຍະສູງສຸດຕາມລະດູການ.',
    'services.s4.title': 'ຂາຍ ແລະ ການເຄື່ອນໄຫວ',
    'services.s4.desc': 'ທີມຂາຍພາກສະໜາມ, ການຈັດຮ້ານ, ການຊົມໃຊ້ສິນຄ້າ ແລະ ການໂຄສະນາໃນຮ້ານ ທີ່ປ່ຽນການກະຈາຍສິນຄ້າ ເປັນຄວາມຕ້ອງການແທ້ຂອງຜູ້ບໍລິໂພກ.',
    'services.s5.title': 'ການຮ່ວມມືຂອງແບຣນ',
    'services.s5.desc': 'ການເປັນຄູ່ຮ່ວມງານໄລຍະຍາວກັບການກະຈາຍສິນຄ້າ ດ້ວຍສິດສະເພາະຕາມໝວດໝູ່, ການວາງແຜນຮ່ວມກັນ ແລະ ການລົງທຶນດ້ານການຕະຫຼາດການຄ້າ.',
    'services.s6.title': 'ຂໍ້ມູນຕະຫຼາດ',
    'services.s6.desc': 'ຂໍ້ມູນແຕ່ລະແຂວງກ່ຽວກັບຈຳນວນຮ້ານຄ້າ, ການກວມເອົາ ແລະ ການຂາຍຜ່ານ — ຫນຶ່ງໃນຊຸດຂໍ້ມູນຮ້ານຄ້າທີ່ສະອາດທີ່ສຸດໃນລາວ.',

    // ===== BRANDS / PRODUCTS / WHY =====
    'brands.eyebrow': 'ແບຣນຂອງເຮົາ',
    'why.eyebrow': 'ເປັນຫຍັງຕ້ອງເລືອກ ເມກ',
    'coverage.eyebrow': 'ພື້ນທີ່ກວມເອົາ',
    'contact.eyebrow': 'ຕິດຕໍ່ກັບເຮົາ',
    'contact.lead': 'ບໍ່ວ່າເຈົ້າຈະເປັນເຈົ້າຂອງແບຣນທີ່ກຳລັງສຳຫຼວດການເຂົ້າຕະຫຼາດລາວ, ຮ້ານຄ້າທີ່ສົນໃຈໃນພອດໂຟໂລຂອງເຮົາ ຫຼື ຜູ້ສະໜອງທີ່ກຳລັງຊອກຫາຄູ່ຮ່ວມງານໃນພາກພື້ນ — ເຮົາຢາກໄດ້ຍິນຈາກເຈົ້າ.',
    'contact.formTitle': 'ເປັນຄູ່ຮ່ວມງານ',
    'contact.formSub': 'ບອກພວກເຮົາສັ້ນໆກ່ຽວກັບແບຣນ ຫຼື ທຸລະກິດຂອງເຈົ້າ ແລະ ທີມງານຂອງເຮົາຈະຕິດຕໍ່ກັບເຈົ້າພາຍໃນສອງມື້ເຮັດການ.',
    'contact.fName': 'ຊື່ເຕັມ',
    'contact.fCompany': 'ບໍລິສັດ',
    'contact.fEmail': 'ອີເມລ',
    'contact.fPhone': 'ເບີໂທ',
    'contact.fInterest': 'ຂ້ອຍສົນໃຈ',
    'contact.fMsg': 'ຂໍ້ຄວາມຂອງເຈົ້າ',
    'contact.submit': 'ສົ່ງຂໍ້ຄວາມ',

    // ===== FOOTER =====
    'footer.company': 'ບໍລິສັດ',
    'footer.catalogue': 'ລາຍການສິນຄ້າ',
    'footer.contact': 'ຕິດຕໍ່',
    'footer.allRights': 'ສະຫງວນລິຂະສິດທັງໝົດ.',

    // ===== GALLERY / NEWS / CAREERS =====
    'page.home': 'ໜ້າຫຼັກ',
    'page.viewAll': 'ເບິ່ງທັງໝົດ',
    'page.readArticle': 'ອ່ານບົດຄວາມ',
    'careers.applyNow': 'ສະໝັກຕອນນີ້',
    'careers.viewRole': 'ເບິ່ງຕຳແໜ່ງ',
    'careers.allRoles': 'ຕຳແໜ່ງເປີດຮັບທັງໝົດ',
    'careers.applyForRole': 'ສະໝັກຕຳແໜ່ງນີ້',
    'careers.openRoles': 'ຕຳແໜ່ງເປີດຮັບ',

    // ===== LANGUAGE PICKER =====
    'lang.welcome': 'ຍິນດີຕ້ອນຮັບສູ່ ບໍລິສັດ ເມກ ນຳເຂົ້າ-ສົ່ງອອກ',
    'lang.choose': 'ກະລຸນາເລືອກພາສາ',
    'lang.en': 'English',
    'lang.lo': 'ລາວ (Lao)',
  },
};

(function () {
  const STORAGE_KEY = 'mek-lang';
  let currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) || null;

  function applyTranslations(lang) {
    if (!I18N[lang]) lang = 'en';
    document.documentElement.setAttribute('lang', lang === 'lo' ? 'lo' : 'en');
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const tx = I18N[lang][key];
      if (tx) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = tx;
        } else {
          // Preserve nested elements with their own data-i18n
          // Simple set: replace text content only
          el.innerHTML = tx;
        }
      }
    });
    // Aria labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const tx = I18N[lang][key];
      if (tx) el.setAttribute('aria-label', tx);
    });
    // Update toggle UI state
    document.querySelectorAll('.lang-toggle-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
    applyTranslations(lang);
  }

  function showLanguagePicker() {
    if (document.querySelector('.lang-picker-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'lang-picker-overlay';
    overlay.innerHTML = `
      <div class="lang-picker-modal">
        <img src="./assets/logo.png" alt="MEK" class="lang-picker-logo"/>
        <h2>Welcome to MEK Imports-Exports<br/><span class="serif">ຍິນດີຕ້ອນຮັບສູ່ ບໍລິສັດ ເມກ ນຳເຂົ້າ-ສົ່ງອອກ</span></h2>
        <p>Please choose your language &middot; ກະລຸນາເລືອກພາສາ</p>
        <div class="lang-picker-buttons">
          <button class="lang-picker-btn" data-pick="en">
            <span class="flag">🇬🇧</span>
            <span class="name">English</span>
          </button>
          <button class="lang-picker-btn" data-pick="lo">
            <span class="flag">🇱🇦</span>
            <span class="name">ລາວ (Lao)</span>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    overlay.querySelectorAll('.lang-picker-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.dataset.pick);
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.remove();
          document.body.style.overflow = '';
        }, 300);
      });
    });
  }

  function buildToggle() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    if (document.querySelector('.lang-toggle')) return;
    const toggle = document.createElement('div');
    toggle.className = 'lang-toggle';
    toggle.innerHTML = `
      <button class="lang-toggle-btn" data-lang="en">EN</button>
      <span class="lang-toggle-sep">·</span>
      <button class="lang-toggle-btn" data-lang="lo">ລາວ</button>
    `;
    // Insert before the Partner With Us CTA (last link)
    const cta = navLinks.querySelector('.nav-cta');
    if (cta) navLinks.insertBefore(toggle, cta);
    else navLinks.appendChild(toggle);

    toggle.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
  }

  // Init: build toggle, then either apply saved language or show picker
  function init() {
    buildToggle();
    if (currentLang && I18N[currentLang]) {
      applyTranslations(currentLang);
    } else {
      showLanguagePicker();
      // Apply EN as default until they pick
      applyTranslations('en');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
