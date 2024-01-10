console.log("connected js");

var color = [, "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];

document.getElementById("update-btn").addEventListener("click", handleBtn);
function handleBtn() {
  const inputField = document.getElementById("input-text");
  // console.log(inputField)
  const myText = inputField.value;
  // console.log(myText);

  const p = document.getElementById("hello-text");
  p.innerText = myText;

  inputField.value = "";
}

// Change Background Color of a Div on Mouse Move Over using JavaScript
document.querySelector("div").addEventListener("mouseover", function () {
  document.querySelector("div").style.background =
    color[Math.floor(Math.random() * color.length)];
});

// post btn with addEventLst

document.getElementById("update-btn2").addEventListener("click", function () {
  //   console.log("clicked");
  const commentBox = document.getElementById("new-comment");

  //getComment from text area
  const newComment = commentBox.value;
  //   console.log(newComment);

  //set that comment

  const commentContainer = document.getElementById("comment-container");
  const p = document.createElement("p");

  p.innerText = newComment;

  //   clear textarea
  commentContainer.appendChild(p);

  commentBox.value = "";
});

// keyup AEL
document.getElementById("new-comment2").addEventListener("keyup", function (e) {
  const myText = e.target.value;
  console.log(myText);
});

document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (e) {
    const myText = e.target.value.toLowerCase();
    console.log(myText);
    const delBtn = document.getElementById("delete-btn");
    if (myText === "delete") {
      delBtn.removeAttribute("disabled");
    } else {
      delBtn.setAttribute("disabled", true);
    }
  });

document.getElementById("delete-btn").addEventListener("click", function (e) {
  const secret = document.getElementById("secret-friend");
  secret.style.display = "none";
  console.log(secret)
});
