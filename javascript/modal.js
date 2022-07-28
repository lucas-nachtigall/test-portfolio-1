//modal projects

function imageClick(i) {
  let modal = document.querySelector(`#modal${i}`);
  let imageLink = document.querySelector(`#imageLink${i}`);

  modal.style.display = "grid";
  setTimeout(() => {
    modal.classList.add("show");
  }, 0);
}

function imageClose(i) {
  let close = document.querySelector(`#close${i}`);
  let modal = document.querySelector(`#modal${i}`);

  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}
