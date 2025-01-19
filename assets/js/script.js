// Please, reload the page if it doesn't works properly <3
// See the console to check the number of <hr> tags

let hrElement;
let counter = 70;
for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  if (i == counter - 1) {
    hrElement.className = "thunder";
  } else {
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 7 + Math.random() * 0.7 + "s";
    hrElement.style.animationDelay = Math.random() * 5 + "s";
  }
  document.body.appendChild(hrElement);
}

console.log(
  "There are " +
    document.querySelectorAll("hr").length +
    " <hr> tags in this project :)"
);