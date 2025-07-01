let btn1 = document.getElementById("navbtn");
let input1 = document.getElementById("navinput");
function remove() {
  input1.value = "";
}

//cart.html
const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const itemRow = e.target.closest(".cart-item");
    itemRow.remove();
  });
});

// Delete selected items when the "Delete Selected Items" button is clicked
document.getElementById("delete-selected-btn").addEventListener("click", () => {
  const selectedCheckboxes = document.querySelectorAll(
    ".cart-item-checkbox:checked"
  );
  selectedCheckboxes.forEach((checkbox) => {
    const itemRow = checkbox.closest(".cart-item");
    itemRow.remove();
  });
});
