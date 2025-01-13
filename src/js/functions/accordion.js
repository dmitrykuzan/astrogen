// export const accordion = (
//   accordionParentSelector,
//   accordionHeadClass,
//   accordionItemSelector,
//   accordionActiveClass,
//   openOneItem = true
// ) => {
//   const accordionParent = document.querySelector(accordionParentSelector);

//   if (accordionParent) {
//     accordionParent.addEventListener("click", (e) => {
//       if (e.target.classList.contains(accordionHeadClass)) {
//         if (openOneItem) {
//           const accordionActiveItems = accordionParent.querySelectorAll(
//             `.${accordionActiveClass}`
//           );

//           if (accordionActiveItems.length > 0) {
//             accordionActiveItems.forEach((item) => {
//               item.classList.remove(accordionActiveClass);

//               let accordionBody = item.lastElementChild;

//               accordionBody.style.maxHeight = "";
//             });
//           }
//         }

//         let itemParent = e.target.closest(accordionItemSelector);
//         let accordionBody = itemParent.lastElementChild;

//         itemParent.classList.toggle(accordionActiveClass);

//         if (accordionBody.style.maxHeight) {
//           accordionBody.style.maxHeight = "";
//         } else {
//           accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
//         }
//       }
//     });
//   }
// };

export const accordion = (
  accordionParentSelector,
  accordionHeadClass,
  accordionItemSelector,
  accordionActiveClass,
  openOneItem = true
) => {
  const accordionParent = document.querySelector(accordionParentSelector);

  if (accordionParent) {
    accordionParent.addEventListener("click", (e) => {
      if (e.target.classList.contains(accordionHeadClass)) {
        let itemParent = e.target.closest(accordionItemSelector);
        let accordionBody = itemParent.lastElementChild;

        // Проверяем, активен ли текущий элемент
        const isActive = itemParent.classList.contains(accordionActiveClass);

        if (openOneItem) {
          // Убираем активные классы у всех элементов
          const accordionActiveItems = accordionParent.querySelectorAll(
            `.${accordionActiveClass}`
          );

          accordionActiveItems.forEach((item) => {
            item.classList.remove(accordionActiveClass);
            item.lastElementChild.style.maxHeight = "";
          });
        }

        // Если текущий элемент был активным, оставляем его неактивным
        if (!isActive || !openOneItem) {
          itemParent.classList.toggle(accordionActiveClass);
          accordionBody.style.maxHeight = isActive
            ? ""
            : accordionBody.scrollHeight + "px";
        }
      }
    });
  }
};
