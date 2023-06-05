import { profile } from "../requestData";

import { menuName, menuIconClass } from "../config";

import createEle from "../common";

import {
  main_left_menucontainer,
  main_left_create,
  main_left_profile_profileImage,
  main_left_profile_name,
  main_left_profile_at,
} from "../common";

function renderMainLeft() {
  main_left_profile_profileImage.style.backgroundImage =
    "url(" + profile.img_src + ")";
  main_left_profile_name.innerHTML = profile.name;
  main_left_profile_at.innerHTML = profile.at;
  renderMainLeftMenu();
  main_left_create.innerHTML = "create post";
}

// set main left menu name and icon
function renderMainLeftMenu() {
  for (let i = 0; i < menuName.length; i++) {
    const menu = createEle("div", "main_left_menu", "", "");

    const menu_icon = createEle("div", "main_left_menu_icon", "", "");

    const menu_name = createEle("div", "main_left_menu_name", menuName[i], "");

    const menu_icon_logo = createEle("i", menuIconClass[i], "", "");

    menu_icon.appendChild(menu_icon_logo);
    menu.appendChild(menu_icon);
    menu.appendChild(menu_name);

    main_left_menucontainer.appendChild(menu);

    main_left_menucontainer.style.height =
      menu.clientHeight * menuName.length + "px";
  }
}

export default renderMainLeft;
