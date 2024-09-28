// --- COLOR SCHEME ---

// let colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

document.querySelectorAll("#color-scheme-switcher").forEach((element) => {
  element.addEventListener("click", toggleColorTheme);
});

function toggleColorTheme() {
  colorScheme = colorScheme == "dark" ? "light" : "dark";
  updateColorScheme();
}

// --- TAB BAR ---

document.querySelectorAll(".scahoo-tab:not(.disabled)").forEach((element) => {
  element.addEventListener("click", function (e) {
    if (this.getAttribute("href")) {
      window.location.href = this.getAttribute("href");
    } else {
      if (confirm("Uh oh, this tab does not exist! Would you like to return to the main Scavenger Hunt page?")) {
        window.location.href = "/scavenger-hunt";
      }
    }
  });
});