export const validateReviewForm = () => {
  const nameInput = document.querySelector(".input-name");
  const emailInput = document.querySelector(".input-email");
  const submitButton = document.querySelector(".form-review__button");

  // Функция проверки полей
  function validateFields() {
    let isValid = true;

    // Проверка имени
    if (nameInput.value.trim() === "") {
      nameInput.classList.add("error");
      isValid = false;
    } else {
      nameInput.classList.remove("error");
    }

    // Проверка почты
    if (emailInput.value.trim() === "") {
      emailInput.classList.add("error");
      isValid = false;
    } else {
      emailInput.classList.remove("error");
    }

    return isValid;
  }

  // Функция обработки отправки формы
  function handleSubmit(event) {
    const isValid = validateFields();

    // Если форма не валидна, отменяем стандартное действие кнопки (отправка формы)
    if (!isValid) {
      event.preventDefault(); // Предотвращаем стандартное действие кнопки
      submitButton.disabled = true; // Блокируем кнопку
    } else {
      submitButton.disabled = false; // Разблокируем кнопку, если форма валидна
      // Если форма валидна, открываем модальное окно
      openModal();
    }
  }

  // Функция открытия модального окна
  function openModal() {
    document.querySelector(".modal--thanks").classList.add("show");
  }

  // Убираем блокировку кнопки и ошибки при вводе текста
  function handleInput() {
    if (validateFields()) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  // Событие клика по кнопке отправки
  submitButton?.addEventListener("click", handleSubmit);

  // События ввода в полях
  nameInput?.addEventListener("input", handleInput);
  emailInput?.addEventListener("input", handleInput);
};
