// document.querySelectorAll('input[type="text]').forEach((e) => {
//   e.addEventListener("focusout", setBorder);
// });

// function setBorder() {
//   this.style.backgroundColor = !!this.value ? "white" : "red";
// }

function invalid(text) {
  if (!text.value) {
    text.style.border = "2px solid red";
  } else {
    text.style.border = "2px solid white";
  }
}

function validate(text) {
  if (text.value) {
    text.style.border = "2px solid white";
  }
}
