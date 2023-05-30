import "./index.css";

import { profile, highline, cards, message, request } from "./src/data/db.json";

import { menuName, menuIconClass, tabMenuName } from "./src/js/config";

import {
  navbar,
  navbar_logo,
  navbar_profileImage,
  navbar_create,
  navbar_search_input,
  main_left_menucontainer,
  main_left_create,
  main_left_profile_profileImage,
  main_left_profile_nameandat_name,
  main_left_profile_nameandat_at,
  main_middle_highlinecontainer,
  main_middle_post,
  main_middle_post_profileimage,
  main_middle_post_postbtn,
  main_middle_post_input,
  main_middle_cardcontainer,
  main_right_message_title_name,
  main_right_message_search_input,
  main_right_message_tab_menu,
  main_right_message_container,
  main_right_requests,
  main_right_requests_title,
} from "./src/js/common.js";

// excute function to render page
renderNavbar();
renderMainLeft();
renderMainMiddle();
renderMainRightMessage();
renderMainRightMessageList(message);
renderMainRightRquestsList(main_right_requests, request);

let activeMenu = "primary";

// create Element function, return new Element
function createEle(elType, elClassName, elInnerHtml, elBgImage) {
  let newEl = document.createElement(elType);
  newEl.className = elClassName;
  newEl.innerHTML = elInnerHtml;
  newEl.style.backgroundImage = "url(" + elBgImage + ")";
  return newEl;
}

// set navbar
function renderNavbar() {
  navbar_logo.innerHTML = "top social";

  navbar_create.innerHTML = "create";

  navbar_profileImage.style.backgroundImage =
    "url(./src/images/profile/profile_1.png)";
}

// set main left
function renderMainLeft() {
  main_left_profile_profileImage.style.backgroundImage =
    "url(./src/images/profile/profile_1.png)";
  main_left_profile_nameandat_name.innerHTML = profile.name;
  main_left_profile_nameandat_at.innerHTML = profile.at;
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

// set main middle
function renderMainMiddle() {
  renderMainMiddleHighline();
  renderMainMiddlePost();
  renderMainMiddleCards(cards);
}

// set main middle highline
function renderMainMiddleHighline() {
  //set highline 6 pieces
  let highlinePieces = 6;

  for (let i = 0; i < highlinePieces; i++) {
    //set highline bg
    const highlineEl = createEle(
      "div",
      "main_middle_highline",
      "",
      "./src/images/highline/highline_" + [i + 1] + ".jpeg"
    );

    //set highline description
    const highlineDesEl = createEle(
      "div",
      "main_middle_highline_description",
      highline.description[i],
      ""
    );

    //set highline ProfileImage
    const highlineProfileImageEl = createEle(
      "div",
      "main_middle_highline_profileimage",
      "",
      "./src/images/profile/profile_" + [i + 1] + ".png"
    );

    highlineEl.appendChild(highlineDesEl);
    highlineEl.appendChild(highlineProfileImageEl);
    main_middle_highlinecontainer.appendChild(highlineEl);

    //set highline ProfileImage position as center
    highlineProfileImageEl.style.left =
      highlineEl.clientWidth / 2 -
      highlineProfileImageEl.clientWidth / 2 +
      "px";
  }
}

//set main middle post
function renderMainMiddlePost() {
  main_middle_post_profileimage.style.backgroundImage =
    "url(./src/images/profile/profile_1.png)";

  main_middle_post_postbtn.innerHTML = "post";

  main_middle_post_input.setAttribute(
    "placeholder",
    "What is on your mind, " + profile.name + " ?"
  );

  //set main middle post input width
  main_middle_post_input.style.width =
    main_middle_post.clientWidth -
    main_middle_post_profileimage.clientWidth -
    main_middle_post_postbtn.clientWidth +
    "px";
}

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
          main_right_message_container.innerHTML = "";
          renderMainRightMessageList(message);
          break;
        case "general":
          main_right_message_container.innerHTML = "";
          break;
        case "requests":
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

      const profilenameandmsg = createEle(
        "div",
        "main_right_message_nameandmsg",
        "",
        ""
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

      profilenameandmsg.appendChild(profileName);
      profilenameandmsg.appendChild(msg);

      const ctnBox = createEle(
        "div",
        "main_right_message_container_box",
        "",
        ""
      );

      ctnBox.appendChild(profileIamge);
      ctnBox.appendChild(profilenameandmsg);

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

      const profilenameandmfriend = createEle(
        "div",
        "main_right_requests_profilenameandmfriend",
        "",
        ""
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

      profilenameandmfriend.appendChild(profileName);
      profilenameandmfriend.appendChild(mfriend);

      const ctnBox = createEle(
        "div",
        "main_right_requests_container_box",
        "",
        ""
      );

      ctnBox.appendChild(profileIamge);
      ctnBox.appendChild(profilenameandmfriend);

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
        console.log("122211");
      }
    }
  }
}

// set Main Middle card
function renderMainMiddleCards(cards) {
  if (cards.length === 0) {
    main_middle_cardcontainer.innerHTML = "<div>no data found</div>";
    return;
  } else {
    main_middle_cardcontainer.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {
      //card profile
      const profileIamge = createEle(
        "div",
        "main_middle_card_profileImage",
        "",
        cards[i].profile.src
      );

      const profileNamePositionTime = createEle(
        "div",
        "main_middle_card_profileNamePositionTime",
        "",
        ""
      );

      const profileName = createEle(
        "div",
        "main_middle_card_profileName",
        cards[i].profile.name,
        ""
      );

      const profilePositionTime = createEle(
        "div",
        "main_middle_card_profilePositionTime",
        cards[i].profile.position + ", " + cards[i].profile.time,
        ""
      );

      profileNamePositionTime.appendChild(profileName);
      profileNamePositionTime.appendChild(profilePositionTime);

      const profileMore = createEle("i", "uil uil-ellipsis-h", "", "");

      const profileCtn = createEle(
        "div",
        "main_middle_card_profileCtn",
        "",
        ""
      );

      profileCtn.appendChild(profileIamge);
      profileCtn.appendChild(profileNamePositionTime);
      profileCtn.appendChild(profileMore);

      //card picture
      const cardPic = createEle(
        "div",
        "main_middle_card_cardPic",
        "",
        cards[i].picture.img_src
      );

      //card function
      const cardFunctionLike = createEle(
        "div",
        "main_middle_card_cardFunctionLike",
        `<i class="uil uil-heart"></i>`,
        ""
      );

      const cardFunctionComment = createEle(
        "div",
        "main_middle_card_cardFunctionComment",
        `<i class="uil uil-comment-dots"></i>`,
        ""
      );

      const cardFunctionShare = createEle(
        "div",
        "main_middle_card_cardFunctionShare",
        `<i class="uil uil-share-alt"></i>`,
        ""
      );

      const cardFunctionMark = createEle(
        "div",
        "main_middle_card_cardFunctionMark",
        `<i class="uil uil-bookmark"></i>`,
        ""
      );

      const cardFunction = createEle(
        "div",
        "main_middle_card_cardFunction",
        "",
        ""
      );

      cardFunction.appendChild(cardFunctionLike);
      cardFunction.appendChild(cardFunctionComment);
      cardFunction.appendChild(cardFunctionShare);
      cardFunction.appendChild(cardFunctionMark);

      // card like info
      const cardLikeProfileImage1 = createEle(
        "div",
        "main_middle_card_cardLikeProfileImage",
        "",
        cards[i].comment.img_src_list[0]
      );

      const cardLikeProfileImage2 = createEle(
        "div",
        "main_middle_card_cardLikeProfileImage",
        "",
        cards[i].comment.img_src_list[1]
      );

      const cardLikeProfileImage3 = createEle(
        "div",
        "main_middle_card_cardLikeProfileImage",
        "",
        cards[i].comment.img_src_list[2]
      );

      const cardLikeInfo = createEle(
        "div",
        "main_middle_card_cardLikeInfo",
        "Liked by <b>" +
          cards[i].comment.first_people_name +
          "</b> and <b>" +
          cards[i].comment.like_peoples_number +
          "</b> others",
        ""
      );

      const cardLike = createEle("div", "main_middle_card_cardLike", "", "");

      cardLike.appendChild(cardLikeProfileImage1);
      cardLike.appendChild(cardLikeProfileImage2);
      cardLike.appendChild(cardLikeProfileImage3);
      cardLike.appendChild(cardLikeInfo);

      //comment_info
      const cardLikeCommentInfo = createEle(
        "div",
        "main_middle_card_cardLikeCommentInfo",
        cards[i].comment.comment_info,
        ""
      );

      //view_number
      const cardLikeViewInfo = createEle(
        "div",
        "main_middle_card_cardLikeViewInfo",
        "View all " + cards[i].comment.view_number + " comments",
        ""
      );

      // every ele put into cardbox
      const cardBox = createEle("div", "main_middle_cardcontainer_box", "", "");

      cardBox.appendChild(profileCtn);
      cardBox.appendChild(cardPic);
      cardBox.appendChild(cardFunction);
      cardBox.appendChild(cardLike);
      cardBox.appendChild(cardLikeCommentInfo);
      cardBox.appendChild(cardLikeViewInfo);

      //carbox put into card container
      main_middle_cardcontainer.appendChild(cardBox);
    }
  }
}

navbar_search_input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (navbar_search_input.value) {
      const result = cards.filter(
        (cards) => cards.profile.name === navbar_search_input.value
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

main_right_message_search_input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    switch (activeMenu) {
      case "primary":
        if (main_right_message_search_input.value) {
          const result = message.filter(
            (message) => message.name === main_right_message_search_input.value
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
            (request) => request.name === main_right_message_search_input.value
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

//navbar height change
window.addEventListener("scroll", function () {
  if (this.window.scrollY > navbar.offsetHeight + 150) {
    navbar.classList.add("short");
  } else {
    navbar.classList.remove("short");
  }
});
