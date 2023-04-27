const $card = document.querySelector(".main__wrapper");
const $button = document.querySelector(".card__button");
const $rating = document.querySelector(".card__rating");
const $options = document.querySelectorAll(".card__check");
function setRating() {
  $options.forEach(options =>
    options.addEventListener("change", () => {
      let message = `You select${options.nextElementSibling.textContent} out of 5`;
      $rating.textContent = message;
    })
  );
  $rating.textContent = "You don't select noting";
}
setRating();
$button.addEventListener("click", event => {
  event.preventDefault();
  $card.classList.add("main__back");
});
