if (e.target.className === "edit") {
  const li = e.target.closest("li");
  const bookName = li.querySelector(".name");
  const oldText = bookName.textContent;

  const input = document.createElement("input");
  input.type = "text";
  input.value = oldText;
  input.className = "edit-input";

  li.replaceChild(input, bookName);

  li.querySelector(".edit").style.display = "none";
  li.querySelector(".delete").style.display = "none";

  let saveBtn = li.querySelector(".save");
  if (!saveBtn) {
    saveBtn = document.createElement("span");
    saveBtn.className = "save";
    saveBtn.textContent = "Save";
    li.appendChild(saveBtn);
  }

  saveBtn.style.display = "inline";
}

if (e.target.className == "save") {
  const li = e.target.closest("li");
  const input = li.querySelector(".edit-input");
  const newText = input.value;

  const nameSpan = document.createElement("span");
  nameSpan.className = "name";
  nameSpan.textContent = newText;

  li.replaceChild(nameSpan, input);

  const btnDiv = li.querySelector("div");

  btnDiv.querySelector(".edit").style.display = "inline";
  btnDiv.querySelector(".delete").style.display = "inline";

  e.target.style.display = "none";
}
