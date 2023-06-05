import {
  navbar,
  navbar_logo,
  navbar_profileImage,
  navbar_create,
  navbar_search_input,
} from "../common";

import { profile, cards } from "../requestData";

import { renderMainMiddleCards } from "../main/main_middle";

// set navbar
function renderNavbar() {
  navbar_logo.innerHTML = "top social";

  navbar_create.innerHTML = "create";

  navbar_profileImage.style.backgroundImage = "url(" + profile.img_src + ")";

  navbar_search_input.focus();
}

//navbar height change
window.addEventListener("scroll", function () {
  if (this.window.scrollY > navbar.offsetHeight + 150) {
    navbar.classList.add("short");
  } else {
    navbar.classList.remove("short");
  }
});

navbar_search_input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (navbar_search_input.value) {
      const result = cards.filter(
        (cards) => cards.profile.name === navbar_search_input.value.trim()
      );
      renderMainMiddleCards(result);
    } else {
      renderMainMiddleCards(cards);
    }
  }
});

navbar_search_input.addEventListener("input", function () {
  if (navbar_search_input.value !== "") {
    return;
  }
  renderMainMiddleCards(cards);
});

export default renderNavbar;
