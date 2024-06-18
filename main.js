// rating circle 1
document.getElementById("one").addEventListener("click", function () {
  ratings.innerHTML = 1;
  document.getElementById("submit_btn").removeAttribute("disabled");
  one.style.backgroundColor = "hsl(25, 97%, 53%)";
  one.style.color = "hsl(213, 19%, 18%)";
});
// rating circle 2
document.getElementById("two").addEventListener("click", function () {
  ratings.innerHTML = 2;
  document.getElementById("submit_btn").removeAttribute("disabled");
  one.style.backgroundColor = "hsl(25, 97%, 53%)";
  two.style.backgroundColor = "hsl(25, 97%, 53%)";
  one.style.color = "hsl(213, 19%, 18%)";
  two.style.color = "hsl(213, 19%, 18%)";
});
// rating circle 3
document.getElementById("three").addEventListener("click", function () {
  ratings.innerHTML = 3;
  document.getElementById("submit_btn").removeAttribute("disabled");
  one.style.backgroundColor = "hsl(25, 97%, 53%)";
  two.style.backgroundColor = "hsl(25, 97%, 53%)";
  three.style.backgroundColor = "hsl(25, 97%, 53%)";
  one.style.color = "hsl(213, 19%, 18%)";
  two.style.color = "hsl(213, 19%, 18%)";
  three.style.color = "hsl(213, 19%, 18%)";
});
// rating circle 4
document.getElementById("four").addEventListener("click", function () {
  ratings.innerHTML = 4;
  document.getElementById("submit_btn").removeAttribute("disabled");
  one.style.backgroundColor = "hsl(25, 97%, 53%)";
  two.style.backgroundColor = "hsl(25, 97%, 53%)";

  three.style.backgroundColor = "hsl(25, 97%, 53%)";
  four.style.backgroundColor = "hsl(25, 97%, 53%)";
  one.style.color = "hsl(213, 19%, 18%)";
  two.style.color = "hsl(213, 19%, 18%)";
  three.style.color = "hsl(213, 19%, 18%)";
  four.style.color = "hsl(213, 19%, 18%)";
});
// rating circle 5
document.getElementById("five").addEventListener("click", function () {
  ratings.innerHTML = 5;
  document.getElementById("submit_btn").removeAttribute("disabled");
  one.style.backgroundColor = "hsl(25, 97%, 53%)";
  two.style.backgroundColor = "hsl(25, 97%, 53%)";

  three.style.backgroundColor = "hsl(25, 97%, 53%)";
  four.style.backgroundColor = "hsl(25, 97%, 53%)";
  five.style.backgroundColor = "hsl(25, 97%, 53%)";

  one.style.color = "hsl(213, 19%, 18%)";
  two.style.color = "hsl(213, 19%, 18%)";
  three.style.color = "hsl(213, 19%, 18%)";
  four.style.color = "hsl(213, 19%, 18%)";
  five.style.color = "hsl(213, 19%, 18%)";
});
// submit button
document.getElementById("submit_btn").addEventListener("click", function () {
  container.style.display = "none";
  thankyou_container.style.display = "flex";
});
