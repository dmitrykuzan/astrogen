export const quiz = () => {
  const btnHero = document.querySelector(".hero__bday-link");
  const heroFields = document.querySelector(".hero__bday-fields");

  const quizSteps = document.querySelectorAll(".quiz__step");

  const quizStep1 = document.querySelector(".quiz__step--1");
  const quizStep2 = document.querySelector(".quiz__step--2");
  const quizStep3 = document.querySelector(".quiz__step--3");
  const quizStep4 = document.querySelector(".quiz__step--4");
  const quizStep5 = document.querySelector(".quiz__step--5");

  const btnStep1 = document.querySelector(".quiz__step-button-next--1");
  const btnStep2 = document.querySelectorAll(".quiz__step-button-next--2");
  const btnStep3 = document.querySelector(".quiz__step-button-next--3");
  const btnStep4 = document.querySelector(".quiz__step-button-next--4");
  const btnStep5 = document.querySelector(".quiz__step-button-next--5");

  const btnStepBack2 = document.querySelector(".quiz__step-back--2");
  const btnStepBack3 = document.querySelector(".quiz__step-back--3");
  const btnStepBack4 = document.querySelector(".quiz__step-back--4");
  const btnStepBack5 = document.querySelector(".quiz__step-back--5");

  // Функция проверки валидности полей
  const validateStep = (step) => {
    const inputs = step.querySelectorAll("input");
    let isValid = true;

    inputs.forEach((input) => {
      if (input.type === "text" || input.type === "email") {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      }
    });

    return isValid;
  };
  // Функция проверки валидности полей

  // Функция для очистки ошибок при взаимодействии с полями
  const clearErrorsOnInput = (step) => {
    const inputs = step.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.classList.contains("error") && input.value.trim()) {
          input.classList.remove("error");
        }
      });
    });
  };
  // Функция для очистки ошибок при взаимодействии с полями

  // Сценарии переключения шагов

  // На главной
  btnHero?.addEventListener("click", (e) => {
    if (!validateStep(heroFields)) {
      e.preventDefault();

      return;
    }
  });

  // Получаем значения из первой формы
  const nextLink = document.querySelector(".next-link");

  nextLink?.addEventListener("click", function (event) {
    const day = document.getElementById("day-input").value;
    const month = document.getElementById("month-input").value;
    const year = document.getElementById("year-input").value;

    const url = new URL(this.href);
    url.searchParams.set("day", day);
    url.searchParams.set("month", month);
    url.searchParams.set("year", year);

    // Обновляем ссылку
    this.href = url.toString();
  });

  const urlParams = new URLSearchParams(window.location.search);

  const day = urlParams.get("day");
  const month = urlParams.get("month");
  const year = urlParams.get("year");

  // Проверяем и заполняем поля
  if (day) document.getElementById("day-input-form2").value = day;
  if (month) document.getElementById("month-input-form2").value = month;
  if (year) document.getElementById("year-input-form2").value = year;

  // На главной

  btnStep1?.addEventListener("click", () => {
    if (!validateStep(quizStep1)) return;

    quizSteps.forEach((step) => step.classList.remove("active"));
    if (quizStep2) quizStep2.classList.add("active");
  });

  btnStep2?.forEach((btn) => {
    btn.addEventListener("click", () => {
      quizSteps.forEach((step) => step.classList.remove("active"));
      if (quizStep3) quizStep3.classList.add("active");
    });
  });

  btnStep3?.addEventListener("click", () => {
    if (!validateStep(quizStep3)) return;

    quizSteps.forEach((step) => step.classList.remove("active"));
    if (quizStep4) quizStep4.classList.add("active");
  });

  btnStep4?.addEventListener("click", () => {
    const checkbox = document.getElementById("checkbox-time");

    const isFieldsValid = validateStep(quizStep4);
    const isCheckboxChecked = checkbox.checked;

    if (!isFieldsValid && !isCheckboxChecked) {
      return;
    }

    quizSteps.forEach((step) => step.classList.remove("active"));
    if (quizStep5) quizStep5.classList.add("active");
  });

  btnStep5?.addEventListener("click", (e) => {
    if (!validateStep(quizStep5)) {
      e.preventDefault();
      return;
    }
  });

  // Сценарии переключения шагов

  // Сценарии переключения шагов назад
  btnStepBack2?.addEventListener("click", () => {
    quizSteps.forEach((step) => step.classList.remove("active"));
    if (quizStep1) quizStep1.classList.add("active");
  });

  btnStepBack3?.addEventListener("click", () => {
    quizSteps.forEach((step) => step.classList.remove("active"));
    if (quizStep2) quizStep2.classList.add("active");
  });

  btnStepBack4?.addEventListener("click", () => {
    quizSteps.forEach((step) => step.classList.remove("active"));
    if (quizStep3) quizStep3.classList.add("active");
  });

  btnStepBack5?.addEventListener("click", () => {
    quizSteps.forEach((step) => step.classList.remove("active"));
    if (quizStep4) quizStep4.classList.add("active");
  });
  // Сценарии переключения шагов назад

  // Очистка ошибок при взаимодействии с полями
  if (quizStep1) clearErrorsOnInput(quizStep1);
  if (quizStep2) clearErrorsOnInput(quizStep2);
  if (quizStep3) clearErrorsOnInput(quizStep3);
  if (quizStep4) clearErrorsOnInput(quizStep4);
  if (quizStep5) clearErrorsOnInput(quizStep5);
};
