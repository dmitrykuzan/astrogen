export const horoscopeSlider = () => {
  let horoscopeSlider = new Swiper(".horoscope__swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: true,
    pagination: {
      el: ".horoscope__swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 30000,
      disableOnInteraction: false,
    },
  });
};
