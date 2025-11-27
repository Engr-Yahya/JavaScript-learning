// const book = document.querySelectorAll("#book-list li .name");
// // console.log(book);
// Array.from(book).forEach(function (book) {
//   console.log(book);
// });
// const btns = document.querySelectorAll(".name");
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const list = e.target;
//     list.remove(list);
//   });
// });
// console.log("Hello World!");
// let btns = document.querySelectorAll(".delete");
// Array.from(btns).forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const list = e.target.parentElement;
//     list.parentNode.removeChild(list);
//   });
// });
const list = document.querySelector("#book-list ul");

list.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const listItem = e.target.parentElement;
    list.removeChild(listItem);
  }
});

const addForms = document.forms["add-form"];
addForms.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForms.querySelector('input[type="text"]').value;

  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  bookName.textContent = value;
  deleteBtn.textContent = "delete";

  li.classList.add("flex-list");
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", (e) => {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.querySelectorAll("li");
  books.forEach((book) => {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = "flex";
    } else {
      book.style.display = "none";
    }
  });
});

const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");
tabs.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    const targetPanel = document.querySelector(e.target.dataset.target);
    panels.forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
