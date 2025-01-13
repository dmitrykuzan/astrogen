export const reviewsSlider = () => {
  let reviewsSlider = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
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
        slidesPerView: 1.7,
        spaceBetween: 0,
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 20,
        autoHeight: true,
      },
    },
  });
};
