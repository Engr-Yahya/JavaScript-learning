if (e.target.className == "save") {
  const li = e.target.parentElement;
  const bookName = li.querySelector(".name");
  const oldName = bookName.getAttribute("data-old");
  const newName = bookName.textContent.trim();
  // 1. localStorage array me old value ko new value se replace karein
  const index = listArray.indexOf(oldName);
  if (index !== -1) {
    listArray[index] = newName;
    localStorage.setItem("books", JSON.stringify(listArray)); // save updated
  }

  // 2. UI changes
  bookName.removeAttribute("contenteditable");
  li.querySelector(".edit").style.display = "inline";
  li.querySelector(".delete").style.display = "inline";
  e.target.style.display = "none";
}
