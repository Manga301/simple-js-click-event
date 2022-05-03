import "./styles.css";

let checkBtn = document.querySelector(".check");
let someNum = document.querySelector(".some-number");

checkBtn.addEventListener("click", function () {
  document.querySelector(".my-number").innerText = someNum.value;
  console.log(someNum.value);
});
