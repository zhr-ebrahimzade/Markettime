/* Initialize Swiper  */
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,

  slidesPerGroup: 7,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
