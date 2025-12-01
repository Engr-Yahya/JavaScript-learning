// ------------------ LOAD FROM LOCAL STORAGE --------------------
function loadBooks() {
  const storedBooks = JSON.parse(localStorage.getItem("books")) || [];

  storedBooks.forEach((book) => {
    createListItem(book);
  });
}
loadBooks();

// ------------------ SAVE TO LOCAL STORAGE --------------------
function saveBooks() {
  const books = [];
  document.querySelectorAll("#book-list ul li .name").forEach((item) => {
    books.push(item.textContent);
  });

  localStorage.setItem("books", JSON.stringify(books));
}

// ------------------ CREATE <li> FUNCTION --------------------
function createListItem(bookNameValue) {
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const editBtn = document.createElement("span");
  const deleteBtn = document.createElement("span");

  bookName.textContent = bookNameValue;
  deleteBtn.textContent = "delete";
  editBtn.textContent = "edit";

  li.classList.add("flex-list");
  bookName.classList.add("name");
  editBtn.classList.add("edit");
  deleteBtn.classList.add("delete");

  li.appendChild(bookName);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  list.appendChild(li);
}

// ==============================================================
// ===============  YOUR EVENT LISTENER LOGIC  ===================
// ==============================================================

const list = document.querySelector("#book-list ul");

list.addEventListener("click", (e) => {
  // DELETE
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);

    saveBooks(); // update storage
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

    li.appendChild(saveBtn);
  }

  // SAVE (after edit)
  if (e.target.className == "save") {
    const li = e.target.parentElement;
    const bookName = li.querySelector(".name");

    bookName.removeAttribute("contenteditable");

    li.querySelector(".edit").style.display = "inline";
    li.querySelector(".delete").style.display = "inline";

    e.target.remove(); // remove save button

    saveBooks(); // update storage after editing
  }
});

// ---------------- ADD NEW BOOK ------------------

const addForms = document.forms["add-form"];

addForms.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForms.querySelector('input[type="text"]').value;

  if (value.trim() === "") return;

  createListItem(value);
  saveBooks(); // update storage

  addForms.reset();
});

// ---------------- SEARCH BAR ------------------

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
