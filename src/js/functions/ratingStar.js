export const ratingStar = () => {
  const stars = document.querySelectorAll(".star");

  stars?.forEach((star, index) => {
    // Наведение: обновление отображения звезд
    star.addEventListener("mouseover", () => {
      highlightStars(index);
    });

    // Убираем выделение при уходе курсора
    star.addEventListener("mouseout", () => {
      resetStars();
    });

    // Клик: присваиваем "активные" звезды
    star.addEventListener("click", () => {
      setActiveStars(index);
    });
  });

  // Подсветить звезды до указанного индекса
  function highlightStars(index) {
    stars?.forEach((star, i) => {
      if (i <= index) {
        star.classList.add("hover");
      } else {
        star.classList.remove("hover");
      }
    });
  }

  // Убрать подсветку звезд
  function resetStars() {
    stars?.forEach((star) => {
      star.classList.remove("hover");
    });
  }

  // Установить активные звезды
  function setActiveStars(index) {
    stars?.forEach((star, i) => {
      if (i <= index) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  }
};
