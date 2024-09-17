let colorScheme;
if (window.matchMedia) {
  colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// false = light
// true = dark

function updateColorScheme() {
  console.log(colorScheme);
  switch (colorScheme) {
    case "light":
      document.querySelector("#color-scheme-light").removeAttribute("disabled");
      document.querySelector("#color-scheme-dark").setAttribute("disabled", "");
      break;
    case "dark":
      document
        .querySelector("#color-scheme-light")
        .setAttribute("disabled", "");
      document.querySelector("#color-scheme-dark").removeAttribute("disabled");
      break;

    default:
      break;
  }
}
