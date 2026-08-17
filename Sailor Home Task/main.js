// Const istifadəsi və Modul/Script yüklənmə təhlükəsizliyi
const swiper = new Swiper('.mySwiper', {
  loop: true,
  speed: 800, // Keçid sürəti daha yumşaq (smooth) görünməsi üçün 800ms edildi

  // Slaydların hamar dəyişməsi üçün effekt (istəyə bağlı: 'fade', 'slide', 'cube', 'flip')
  effect: 'slide', 

  // Avtopley parametric təkmilləşdirilməsi
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // İstifadəçi mousu slaydın üzərinə gətirəndə slayderi dayandırır
  },

  // Naviqasiya düymələri
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Paginasiya (Nöqtələr)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true, // Slayd sayı çox olarsa nöqtələri dinamik ölçüdə göstərir
  },

  // Klaviaturadan idarəetmə
  keyboard: {
    enabled: true,
    onlyInViewport: true, // Yalnız ekran görünən hissədə olduqda klaviatura işləsin
  },

  // Mobil cihazlarda jestlərlə rahat keçid
  grabCursor: true, // Mousu tutub sürümək üçün əl ikonu göstərir
  touchEventsTarget: 'wrapper',
});

let clients = document.querySelectorAll(".client-logo");

clients.forEach(client => {
    client.addEventListener("click", () => {
        client.classList.toggle("active");
    });
});

let filters = document.querySelectorAll(".portfolio-filters li");
let items = document.querySelectorAll(".portfolio-item");

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filters.forEach(item => {
            item.classList.remove("filter-active");
        });
        filter.classList.add("filter-active");
        let category = filter.getAttribute("data-filter");
        items.forEach(item => {
            let itemCategory = item.getAttribute("data-category");
            if (category === "all" || category === itemCategory) {
                item.style.display = "inline-block";
            } else {
                item.style.display = "none";
            }
        });
    });
});