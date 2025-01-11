export const datePicker = () => {
  // Функция для генерации списка дней (1-31)
  function generateDays() {
    const dayList = document.getElementById("day-list");
    if (dayList) {
      dayList.innerHTML = ""; // Очищаем список
      for (let i = 1; i <= 31; i++) {
        const li = document.createElement("li");
        li.textContent = i;
        li.addEventListener("click", () => selectDay(i)); // При клике вызываем selectDay
        dayList.appendChild(li);
      }
    }
  }

  // Функция для генерации списка месяцев
  function generateMonths() {
    const monthList = document.getElementById("month-list");
    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    if (monthList) {
      monthList.innerHTML = ""; // Очищаем список
      months.forEach((month, index) => {
        const li = document.createElement("li");
        li.textContent = month;
        li.addEventListener("click", () => selectMonth(month)); // При клике вызываем selectMonth
        monthList.appendChild(li);
      });
    }
  }

  // Функция для генерации списка лет (от 1900 до текущего года)
  function generateYears() {
    const yearList = document.getElementById("year-list");
    const currentYear = new Date().getFullYear();
    if (yearList) {
      yearList.innerHTML = ""; // Очищаем список
      for (let i = currentYear; i >= 1900; i--) {
        const li = document.createElement("li");
        li.textContent = i;
        li.addEventListener("click", () => selectYear(i)); // При клике вызываем selectYear
        yearList.appendChild(li);
      }
    }
  }

  // Обработчик выбора дня
  function selectDay(day) {
    const dayInput = document.querySelector(
      "#day-dropdown .dropdown-current input"
    );
    dayInput.value = day;
    closeDropdown("day"); // Закрыть список после выбора
  }

  // Обработчик выбора месяца
  function selectMonth(month) {
    const monthInput = document.querySelector(
      "#month-dropdown .dropdown-current input"
    );
    monthInput.value = month;
    closeDropdown("month"); // Закрыть список после выбора
  }

  // Обработчик выбора года
  function selectYear(year) {
    const yearInput = document.querySelector(
      "#year-dropdown .dropdown-current input"
    );
    yearInput.value = year;
    closeDropdown("year"); // Закрыть список после выбора
  }

  // Закрытие выпадающего списка
  function closeDropdown(type) {
    const dropdown = document.getElementById(`${type}-dropdown`);
    dropdown.classList.remove("active");
  }

  // Функция для добавления обработчиков кликов на каждый input
  function setupDropdowns() {
    const dropdowns = document.querySelectorAll(".dropdown-current");
    dropdowns.forEach((dropdown) => {
      const input = dropdown.querySelector("input");

      input.addEventListener("click", (e) => {
        e.stopPropagation(); // Останавливаем всплытие события
        const dropdownParent = dropdown.closest(".dropdown");
        dropdownParent.classList.toggle("active"); // Переключаем класс active
      });
    });

    // Обработчик клика вне области
    document.addEventListener("click", (e) => {
      const activeDropdowns = document.querySelectorAll(".dropdown.active");
      activeDropdowns.forEach((dropdown) => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove("active"); // Убираем класс active, если клик вне области
        }
      });
    });
  }

  // Инициализация
  generateDays();
  generateMonths();
  generateYears();
  setupDropdowns();
};
