document.getElementById("gray-circle").addEventListener("click", function () {
  document.body.style.backgroundColor = "gray";
  document.getElementById("gray-circle").setAttribute("class", "selected");
});
document.getElementById("white-circle").addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});
document.getElementById("blue-circle").addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});
document.getElementById("yellow-circle").addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});
