const increase_button = document.getElementsByClassName("increase_btn");
const counting = document.getElementById("counter_dispaly");
var count = 0;
// increase_button.addEventListener("click", function () {
//   count++;
//   counting.innerHTML = " " + count;
// });
function increaseCounting() {
  counting.style.color = "green";
  count++;
  printCount();
}
function decreaseCounting() {
  count--;
  if (count < 0) {
    count = 0;
    counting.style.color = "red";
  }
  printCount();
}
function reasetCounting() {
  count = 0;
  printCount();
}
function printCount() {
  counting.innerHTML = count;
}
