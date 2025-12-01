// --- LOAD BOOKS FROM LOCALSTORAGE ---
let booksArray = JSON.parse(localStorage.getItem("books")) || [];

// UI me load karne ka function
function displayBooks() {
  booksArray.forEach((book) => {
    addBookToUI(book);
  });
}
displayBooks();

// --- ADD BOOK TO UI FUNCTION ---
function addBookToUI(bookNameValue) {
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const editBtn = document.createElement("span");
  const deleteBtn = document.createElement("span");

  bookName.textContent = bookNameValue;
  editBtn.textContent = "edit";
  deleteBtn.textContent = "delete";

  li.classList.add("flex-list");
  bookName.classList.add("name");
  editBtn.classList.add("edit");
  deleteBtn.classList.add("delete");

  li.appendChild(bookName);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  list.insertBefore(li, list.firstElementChild);
}

// ------------------ YOUR ORIGINAL CODE ------------------

const list = document.querySelector("#book-list ul");
list.addEventListener("click", (e) => {
  // DELETE
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    const title = li.querySelector(".name").textContent;

    // remove from UI
    list.removeChild(li);

    // remove from localStorage
    booksArray = booksArray.filter((b) => b !== title);
    localStorage.setItem("books", JSON.stringify(booksArray));
  }

  // EDIT
  if (e.target.className == "edit") {
    const li = e.target.parentElement;
    const bookName = li.querySelector(".name");

    bookName.setAttribute("contenteditable", "true");
    bookName.classList.add("edit-book");
    bookName.focus();

    li.querySelector(".edit").style.display = "none";
    li.querySelector(".delete").style.display = "none";

    let saveBtn = document.createElement("span");
    saveBtn.className = "save";
    saveBtn.textContent = "Save";

    e.target.parentElement.appendChild(saveBtn);
  }

  // SAVE
  if (e.target.className == "save") {
    const li = e.target.parentElement;
    const bookName = li.querySelector(".name");
    const newTitle = bookName.textContent;

    const oldTitle = booksArray.find(
      (b) => b === bookName.getAttribute("data-old") || b === newTitle
    );

    // update localStorage
    booksArray = booksArray.map((b) => (b === oldTitle ? newTitle : b));
    localStorage.setItem("books", JSON.stringify(booksArray));

    bookName.removeAttribute("contenteditable");

    li.querySelector(".edit").style.display = "inline";
    li.querySelector(".delete").style.display = "inline";

    e.target.style.display = "none";
  }
});

// -------------------- ADD BOOK ---------------------

const addForms = document.forms["add-form"];
addForms.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = addForms.querySelector('input[type="text"]').value;

  // add to UI
  addBookToUI(value);

  // add to localStorage
  booksArray.push(value);
  localStorage.setItem("books", JSON.stringify(booksArray));

  // clear input
  addForms.reset();
});

// -------------------- SEARCH ----------------------

const searchBar = document.forms["search"].querySelector("input");
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
