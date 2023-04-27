const $card = document.querySelector(".main__wrapper");
const $button = document.querySelector(".card__button");
const $rating = document.querySelector(".card__rating");
const $options = document.querySelectorAll(".card__check");
function setRating() {
  let selectedOption = Array.from($options).find(option => option.checked);
  let message = `You selected ${selectedOption.nextElementSibling.textContent} out of 5`;
  $rating.textContent = message;
}
function hangle(event) {
  event.preventDefault();
  $card.classList.add("main__back");
}
$button.addEventListener("click", hangle);
$options.forEach(option => option.addEventListener("change", setRating));
