document.getElementById("addItemBtn").addEventListener("click", function() {
  const inputField = document.getElementById("itemInput");
  const itemText = inputField.value.trim();
  const itemList = document.getElementById("itemList");
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.textContent = "";

  if (itemText === "") {
    errorMessage.textContent = "Por favor, insira uma descoberta.";
  } else {
    const newItem = document.createElement("li");
    newItem.textContent = itemText;
    itemList.appendChild(newItem);
    inputField.value = "";
  }
});
