import { hunt } from "./data/hunt.js";

// --- BODY BACKGROUND COLOR ---

// CREDIT: https://ryanmulligan.dev/blog/sticky-header-scroll-shadow/

const body = document.querySelector("body");
const navbar = document.querySelector("#main-navbar");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher", "");
body.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries) => {
    body.classList.toggle("sticking", !entries[0].isIntersecting);
  },
  { rootMargin: navbar.offsetHeight + "px 0px 0px 0px" }
);

navObserver.observe(scrollWatcher);

// --- COLOR SCHEME ---

document.querySelectorAll("#color-scheme-switcher").forEach((element) => {
  element.addEventListener("click", cycleColorMode);
});

document.querySelectorAll("body").forEach((element) => {
  element.addEventListener("load", refreshColorScheme());
});

// --- SCAHOO INFO ---

if (hunt.info.title) {
  document.querySelector(".scahoo-info-title").innerText = hunt.info.title;
}
if (hunt.info.description) {
  document.querySelector(".scahoo-info-description").innerText =
    hunt.info.description;
}

// --- TAB BAR ---

// not necessary anymore, can be removed
document.querySelectorAll(".scahoo-tab:not(.disabled)").forEach((element) => {
  element.addEventListener("click", function (e) {
    if (this.getAttribute("href")) {
      window.location.href = this.getAttribute("href");
    } else {
      if (
        confirm(
          "Uh oh, this tab hasn't been setup! Would you like to return to the main Scavenger Hunt page?"
        )
      ) {
        window.location.href = "/scavenger-hunt";
      }
    }
  });
});
