// export const dropDown = () => {
//   const dropdownWrapper = document.querySelector(".dropdown-el");

//   const navigationHandler = (e) => {
//     const clickedEl = e.target;
//     const clikedBtn = clickedEl.closest(".button-click");

//     if (clikedBtn) {
//       if (clikedBtn.classList.contains("active")) {
//         clikedBtn.nextElementSibling.classList.remove("show");
//         clikedBtn.classList.remove("active");
//       } else {
//         const btnIsActive = dropdownWrapper.querySelector(
//           ".button-click.active"
//         );
//         if (btnIsActive) {
//           btnIsActive.classList.remove("active");
//           btnIsActive.nextElementSibling.classList.remove("show");
//         }
//         clikedBtn.nextElementSibling.classList.add("show");
//         clikedBtn.classList.add("active");
//       }
//     }
//   };

//   if (dropdownWrapper) {
//     dropdownWrapper.addEventListener("click", navigationHandler);

//     window.addEventListener("click", (e) => {
//       const clickedEl = e.target;
//       if (!clickedEl.closest(".button-click")) {
//         const activeBtn = document.querySelector(".button-click.active");
//         if (activeBtn) {
//           activeBtn.classList.remove("active");
//           activeBtn.nextElementSibling.classList.remove("show");
//         }
//       }
//     });
//   }
// };

export const dropDown = () => {
  const dropdownWrappers = document.querySelectorAll(".dropdown-el");

  const navigationHandler = (wrapper) => (e) => {
    const clickedEl = e.target;
    const clickedBtn = clickedEl.closest(".button-click");

    if (clickedBtn && wrapper.contains(clickedBtn)) {
      if (clickedBtn.classList.contains("active")) {
        clickedBtn.nextElementSibling.classList.remove("show");
        clickedBtn.classList.remove("active");
      } else {
        const activeBtn = wrapper.querySelector(".button-click.active");
        if (activeBtn) {
          activeBtn.classList.remove("active");
          activeBtn.nextElementSibling.classList.remove("show");
        }
        clickedBtn.nextElementSibling.classList.add("show");
        clickedBtn.classList.add("active");
      }
    }
  };

  dropdownWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", navigationHandler(wrapper));

    window.addEventListener("click", (e) => {
      const clickedEl = e.target;
      if (!wrapper.contains(clickedEl)) {
        const activeBtn = wrapper.querySelector(".button-click.active");
        if (activeBtn) {
          activeBtn.classList.remove("active");
          activeBtn.nextElementSibling.classList.remove("show");
        }
      }
    });
  });
};
