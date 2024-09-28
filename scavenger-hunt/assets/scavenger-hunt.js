// let colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

document.querySelectorAll("#color-scheme-switcher").forEach((element) => {
  element.addEventListener("click", toggleColorTheme);
});

function toggleColorTheme() {
  colorScheme = colorScheme == "dark" ? "light" : "dark";
  updateColorScheme();
}
