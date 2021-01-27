// setup date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());


// close menu after click nav link
const navLink2 = document.querySelector(".navlink2");

navLink2.addEventListener("click", () => {
 document.getElementById("checkbox").checked = false;
})

const navLink3 = document.querySelector(".navlink3");

navLink3.addEventListener("click", () => {
 document.getElementById("checkbox").checked = false;
})

const navLink4 = document.querySelector(".navlink4");

navLink4.addEventListener("click", () => {
 document.getElementById("checkbox").checked = false;
})
const navLink5 = document.querySelector(".navlink5");

navLink5.addEventListener("click", () => {
 document.getElementById("checkbox").checked = false;
})
const navLink6 = document.querySelector(".navlink6");

navLink6.addEventListener("click", () => {
 document.getElementById("checkbox").checked = false;
})

