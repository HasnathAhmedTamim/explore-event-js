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
  console.log(secret);
});


// remove item  as set event parent 
document
  .getElementById("list-container")
  .addEventListener("click", function (e) {
    e.target.parentNode.removeChild(e.target);
  });

// for (const item of items) {
//   // console.log(items);
//   item.addEventListener("click", function (e) {
//     // console.log(e.target);
//     e.target.parentNode.removeChild(e.target);
//   });
// }

//add event delegate 
document.getElementById("add-btn").addEventListener("click", function () {
  //   console.log("clicked");
  const commentBox2 = document.getElementById("new-comment-2");

  //getComment from text area
  const newComment2 = commentBox2.value;
  //   console.log(newComment);

  //set that comment

  const commentContainer = document.getElementById("list-container");
  const li = document.createElement("li");

  li.innerText = newComment2;

  //   clear textarea
  commentContainer.appendChild(li);

  commentBox2.value = "";
});
