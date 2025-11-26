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
let btns = document.querySelectorAll(".name");
Array.from(btns).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const list = e.target.parentElement;
    list.parentNode.removeChild(list);
  });
});
