// Create new Date object
const d = new Date();
// Store the value of getHours in variable
let hour = d.getHours();
// hour = 15;
// hour = 20;
// console.log(hour);
// Create greeting variable
let greetingText = document.getElementById("greeting-text");

if (hour < 12) {
  // if hour is less than 12pm
  greetingText.textContent = "Good Morning!";
  document.querySelector(".night").classList.add("d-none");
  document.querySelector(".afternoon").classList.add("d-none");
} else if (hour < 17) {
  // if hour is less than 17:00 (but greater than 12pm)
  greetingText.textContent = "Good Afternoon!";
  document.getElementsByTagName("body")[0].classList.add("noon-bg");
  greetingText.parentElement.classList.add("noon-gradient");
  document.querySelector(".morning").classList.add("d-none");
  document.querySelector(".night").classList.add("d-none");
} // hour is greater than 17:00
else {
  greetingText.textContent = "Good Night!";
  greetingText.parentElement.classList.add("night-gradient");
  document.querySelector(".morning").classList.add("d-none");
  document.querySelector(".afternoon").classList.add("d-none");
}
