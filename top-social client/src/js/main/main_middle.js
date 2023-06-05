import { cards, profile, highline } from "../requestData";

import createEle from "../common";

import {
  main_middle_highlinecontainer,
  main_middle_post,
  main_middle_post_profileimage,
  main_middle_post_postbtn,
  main_middle_post_input,
  main_middle_cardcontainer,
} from "../common";

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
      highline.highline_src[i]
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
      highline.profile_src[i]
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
    "url(" + profile.img_src + ")";

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

// set Main Middle card
export function renderMainMiddleCards(cards) {
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

      const profileMore = createEle("i", "uil uil-ellipsis-h", "", "");

      const profileCtn = createEle(
        "div",
        "main_middle_card_profileCtn",
        "",
        ""
      );

      profileCtn.appendChild(profileIamge);
      profileCtn.appendChild(profileName);
      profileCtn.appendChild(profilePositionTime);
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

export default renderMainMiddle;
