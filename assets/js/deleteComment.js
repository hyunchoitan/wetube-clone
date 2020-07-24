import axios from "axios";
import "./addComment";

const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const commentDelBtn = commentList.getElementsByClassName(
  "comments__comment-btn"
);

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};

const delComment = (event) => {
  const span = event.target.parentNode;
  const li = span.parentNode;
  commentList.removeChild(li);
  decreaseNumber();
};

export const sendDelComment = async (event) => {
  const commentId = event.target.value;
  const response = await axios({
    url: `/api/${commentId}/delete/comment`,
    method: "POST",
  });

  if (response.status === 200) {
    delComment(event);
  }
};

export const btnAddEvent = () => {
  for (let i = 0; i < commentDelBtn.length; i++) {
    commentDelBtn[i].innerHTML = "✖️";
    commentDelBtn[i].addEventListener("click", sendDelComment);
  }
};

function init() {
  btnAddEvent();
}

if (commentList) {
  init();
}
