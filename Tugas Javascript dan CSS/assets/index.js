function invalid(text) {
  if (!text.value) {
    // Jika isi text valunya tidak ada akan menambahkan border pada form
    text.style.border = "2px solid red";
  }
}

function validate(text) {
  if (text.value) {
    // Jika isi text valunya ada akan menambahkan border pada form
    text.style.border = "2px solid white";
  }
}
