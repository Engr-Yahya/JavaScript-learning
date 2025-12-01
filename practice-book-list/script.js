const list = document.querySelector("#book-list ul");
let booksArray = []; // This will store all books

// Add new book
const addForms = document.forms["add-form"];
addForms.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addForms.querySelector('input[type="text"]').value;
  if (value === "") return; // prevent empty entries

  // Add book to array
  booksArray.push(value);

  // Create list item
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const editBtn = document.createElement("span");
  const deleteBtn = document.createElement("span");

  bookName.textContent = value;
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

  e.target.reset();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const li = e.target.parentElement;
    const bookName = li.querySelector(".name").textContent;

    // Remove from array
    booksArray = booksArray.filter((book) => book !== bookName);

    list.removeChild(li);
  }

  if (e.target.classList.contains("edit")) {
    const li = e.target.parentElement;
    const bookName = li.querySelector(".name");

    bookName.setAttribute("contenteditable", "true");
    bookName.classList.add("edit-book");
    bookName.focus();

    li.querySelector(".edit").style.display = "none";
    li.querySelector(".delete").style.display = "none";

    let saveBtn = li.querySelector(".save");
    if (!saveBtn) {
      saveBtn = document.createElement("span");
      saveBtn.className = "save";
      saveBtn.textContent = "Save";
      li.appendChild(saveBtn);
    }
  }

  if (e.target.classList.contains("save")) {
    const li = e.target.parentElement;
    const bookName = li.querySelector(".name");

    bookName.removeAttribute("contenteditable");
    li.querySelector(".edit").style.display = "inline";
    li.querySelector(".delete").style.display = "inline";

    e.target.remove();

    // Update array with edited value
    const oldValueIndex = booksArray.indexOf(bookName.dataset.oldValue);
    if (oldValueIndex > -1) {
      booksArray[oldValueIndex] = bookName.textContent;
    }
  }
});

/*
    const list = document.querySelector('#book-list ul');

  const listArray = JSON.parse(localStorage.getItem('books')) || [];

  listArray.forEach((value) => {
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const editBtn = document.createElement('span')
    const deleteBtn = document.createElement('span');

    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
    editBtn.textContent = 'edit';

    li.classList.add('flex-list');
    bookName.classList.add('name');
    editBtn.classList.add('edit');
    deleteBtn.classList.add('delete');


    li.appendChild(bookName);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);

  });

    const addForms = document.forms['add-form'];
  addForms.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForms.querySelector('input[type="text"]').value;

    listArray.push(value);
    localStorage.setItem('books', JSON.stringify(listArray));

    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const editBtn = document.createElement('span')
    const deleteBtn = document.createElement('span');

    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
    editBtn.textContent = 'edit';

    li.classList.add('flex-list');
    bookName.classList.add('name');
    editBtn.classList.add('edit');
    deleteBtn.classList.add('delete');


    li.appendChild(bookName);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.insertBefore(li, list.firstElementChild);

    e.target.reset();
  });
*/
