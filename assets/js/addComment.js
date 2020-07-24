import axios from "axios";
import { sendDelComment } from "./deleteComment";

const commentNumber = document.getElementById("jsCommentNumber");
const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = (comment, commentId) => {
  const li = document.createElement("li");
  li.className = "comments__comment";
  const span = document.createElement("span");
  span.className = "comments__comment-text";
  const btn = document.createElement("button");
  btn.className = "comments__comment-btn";
  btn.innerHTML = "✖️";
  btn.setAttribute("value", commentId);
  span.innerHTML = comment;
  span.appendChild(btn);
  li.appendChild(span);
  commentList.prepend(li);
  btn.addEventListener("click", sendDelComment);
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  // console.log(reseponse.data._id);
  const commentId = response.data._id;
  if (response.status === 200) {
    addComment(comment, commentId);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
