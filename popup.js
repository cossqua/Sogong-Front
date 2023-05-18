function openPopup() {
  document.getElementById("popup").classList.add("active");
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

function openPopupView() {
  document.getElementById("popup-view").classList.add("active");
}

function closePopupView() {
  document.getElementById("popup-view").classList.remove("active");
}

function completeReservation() {
closePopupView();
}

const cells = document.querySelectorAll("td.available");

cells.forEach(cell => {
  cell.addEventListener("click", openPopup);
});

const unavailableCells = document.querySelectorAll("td.unavailable");

unavailableCells.forEach(cell => {
  cell.addEventListener("click", openPopupView);
});

const viewForm = document.querySelector("#popup-view form");
viewForm.addEventListener("submit", function(event) {
  event.preventDefault();
  openPopupView();
});