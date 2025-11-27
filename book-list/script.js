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
  const li = e.target.parentElement;
  list.removeChild(li);
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
