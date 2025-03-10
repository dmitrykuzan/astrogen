"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import {
  mobileCheck,
  dynamicAdaptive,
  accordion,
  ratingStar,
  modals,
  validateReviewForm,
  dropDown,
} from "./functions/";

// Components
import {
  datePicker,
  horoscopeSlider,
  quiz,
  reviewsSlider,
} from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  dynamicAdaptive();
  horoscopeSlider();
  reviewsSlider();
  validateReviewForm();
  dropDown();
  ratingStar();
  quiz();
  datePicker();
  modals();
  accordion(".faq__list", "faq__item-title", ".faq__item", "active");
});
