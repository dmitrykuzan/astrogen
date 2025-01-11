export const reviewsSlider = () => {
  let reviewsSlider = new Swiper(".reviews-swiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".reviews__swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1020: {
        slidesPerView: 1.5,
        spaceBetween: 0,
      },
    },
  });
};
