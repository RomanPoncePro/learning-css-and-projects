// const dialog = document.querySelector("#myDialong");
// const openButton = document.querySelector("#openDialog");
// openButton.addEventListener("click", () => {
//   dialog.showModal();
// });

const menu = document.querySelector("#myMenu");
const openMenu = document.querySelector("#btnMenu");

openMenu.addEventListener("click", () => {
  const scrollHeight = menu.scrollHeight;
  menu.style.height = scrollHeight + "px";
});
