import { message, request } from "../requestData";

import { tabMenuName } from "../config";

import createEle from "../common";

import {
  main_right_message_title_name,
  main_right_message_search_input,
  main_right_message_tab_menu,
  main_right_message_container,
  main_right_requests,
  main_right_requests_title,
} from "../common";

function renderMainRight() {
  renderMainRightMessage();
  renderMainRightMessageList(message);
  renderMainRightRquestsList(main_right_requests, request);
}

let activeMenu = "primary";

// set main right message
function renderMainRightMessage() {
  main_right_message_title_name.innerHTML = "message";

  let tabNum = 3;
  for (let i = 0; i < tabNum; i++) {
    main_right_message_tab_menu[i].innerHTML = tabMenuName[i];

    main_right_message_tab_menu[i].addEventListener("click", (e) => {
      for (let j = 0; j < main_right_message_tab_menu.length; j++) {
        main_right_message_tab_menu[j].classList.remove("active");
      }
      let target = e.currentTarget;
      target.classList.add("active");
      activeMenu = target.innerHTML;

      switch (target.innerHTML) {
        case "primary":
          main_right_message_search_input.value = "";
          main_right_message_search_input.focus();
          main_right_message_container.innerHTML = "";
          renderMainRightMessageList(message);
          break;
        case "general":
          main_right_message_search_input.value = "";
          main_right_message_search_input.focus();
          main_right_message_container.innerHTML = "";
          break;
        case "requests":
          main_right_message_search_input.value = "";
          main_right_message_search_input.focus();
          main_right_message_container.innerHTML = "";
          renderMainRightRquestsList(main_right_message_container, request);
          break;
      }
    });
  }
}

// set main right message list
function renderMainRightMessageList(message) {
  if (message.length === 0) {
    main_right_message_container.innerHTML = "<div>no data found</div>";
    return;
  } else {
    main_right_message_container.innerHTML = "";
    for (let i = 0; i < message.length; i++) {
      const profileIamge = createEle(
        "div",
        "main_right_message_profileImage",
        "",
        message[i].src
      );

      const profileName = createEle(
        "div",
        "main_right_message_name",
        message[i].name,
        ""
      );

      const msg = createEle(
        "div",
        "main_right_message_msg",
        message[i].msg,
        ""
      );

      const ctnBox = createEle(
        "div",
        "main_right_message_container_box",
        "",
        ""
      );

      ctnBox.appendChild(profileIamge);
      ctnBox.appendChild(profileName);
      ctnBox.appendChild(msg);

      main_right_message_container.appendChild(ctnBox);

      //set scroll when data length > 5
      if (message.length > 5) {
        main_right_message_container.style.overflowY = "scroll";
      }
    }
  }
}

// set main right requests list
function renderMainRightRquestsList(el, request) {
  main_right_requests_title.textContent = "request";

  if (request.length === 0) {
    el.innerHTML = "<div>no data found</div>";
    return;
  } else {
    el.innerHTML = "";
    for (let i = 0; i < request.length; i++) {
      const profileIamge = createEle(
        "div",
        "main_right_requests_profileImage",
        "",
        request[i].src
      );

      const profileName = createEle(
        "div",
        "main_right_requests_name",
        request[i].name,
        ""
      );

      const mfriend = createEle(
        "div",
        "main_right_requests_mfriend",
        request[i].mutualFriendNum + " Mutual friends",
        ""
      );

      const ctnBox = createEle(
        "div",
        "main_right_requests_container_box",
        "",
        ""
      );

      ctnBox.appendChild(profileIamge);
      ctnBox.appendChild(profileName);
      ctnBox.appendChild(mfriend);

      const acceptBtn = createEle(
        "button",
        "main_right_requests_acceptBtn",
        "accept",
        ""
      );

      const declineBtn = createEle(
        "button",
        "main_right_requests_declineBtn",
        "decline",
        ""
      );

      const btnBox = createEle("div", "main_right_requests_button_box", "", "");

      btnBox.appendChild(acceptBtn);
      btnBox.appendChild(declineBtn);

      const ctn = createEle("div", "main_right_requests_container", "", "");

      ctn.appendChild(ctnBox);
      ctn.appendChild(btnBox);

      el.appendChild(ctn);

      //set requests height
      if (el === main_right_requests) {
        main_right_requests.style.height =
          ctn.clientHeight * request.length + "px";
      }

      //set scroll when data length > 2
      if (el === main_right_message_container && request.length > 2) {
        main_right_message_container.style.overflowY = "scroll";
      }
    }
  }
}

main_right_message_search_input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    switch (activeMenu) {
      case "primary":
        if (main_right_message_search_input.value) {
          const result = message.filter(
            (message) =>
              message.name === main_right_message_search_input.value.trim()
          );
          renderMainRightMessageList(result);
        } else {
          renderMainRightMessageList(message);
        }
        break;
      case "general":
        break;
      case "requests":
        if (main_right_message_search_input.value) {
          const result = request.filter(
            (request) =>
              request.name === main_right_message_search_input.value.trim()
          );
          renderMainRightRquestsList(main_right_message_container, result);
        } else {
          renderMainRightRquestsList(main_right_message_container, request);
        }
        break;
    }
  }
});

main_right_message_search_input.addEventListener("input", function () {
  if (main_right_message_search_input.value !== "") {
    return;
  }
  switch (activeMenu) {
    case "primary":
      renderMainRightMessageList(message);
      break;
    case "general":
      break;
    case "requests":
      renderMainRightRquestsList(main_right_message_container, request);
      break;
  }
});

export default renderMainRight;
