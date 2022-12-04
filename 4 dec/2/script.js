const increase_button = document.getElementsByClassName("increase_btn");
const counting = document.getElementById("counter_dispaly");
var count = 0;
// increase_button.addEventListener("click", function () {
//   count++;
//   counting.innerHTML = " " + count;
// });
function increaseCounting() {
  count++;
  printCount();
}
function decreaseCounting() {
  count--;
  printCount();
}
function reasetCounting() {
  count = 0;
  printCount();
}
function printCount() {
  counting.innerHTML = count;
}
