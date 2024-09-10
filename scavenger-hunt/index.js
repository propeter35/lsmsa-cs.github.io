import {tasks} from "./modules/tasks.js";

function closeModal(element) {
  element.classList.remove("open");
}

function setupModal() {
  document.querySelectorAll(".modal-bg").forEach((element) => {
    element.addEventListener("mouseup", function (e) {
      if (this === e.target) {
        closeModal(this.parentElement);
      }
    });
  });

  document.querySelectorAll(".modal").forEach((element) => {
    element.setAttribute("role", "dialog");
    element.setAttribute("tabindex", "-1");
    element.addEventListener("keydown", function (e) {
      if (e.code === "Escape") {
        closeModal(this.parentElement.parentElement);
      }
    });
  });

  document.querySelectorAll(".modal-close-button").forEach((element) => {
    element.addEventListener("click", function (e) {
      closeModal(this.parentElement.parentElement.parentElement);
    });
  });
}

setupModal();

// ---

function setupModalOpeners() {
  document.querySelectorAll(".card-task").forEach((element) => {
    element.addEventListener("click", function (e) {
      // if (this === e.target) {
      openModal(1);
      // }
    });
  });
}

setupModalOpeners();

// ---

function openModal(cardID, taskID) {
  console.log("open modal for card " + cardID + " task " + taskID);
}

// ---

const board = document.querySelector(".hunt-board");
const cardTemplate = document.querySelector(".template-card");


function addCard(card, category) {
  const categoryCards = board.querySelector("#" + category.id).querySelector(".hunt-category-cards");

  // requires .firstElementChild to turn DocumentFragment to HTMLElement
  let cardClone = cardTemplate.content.firstElementChild.cloneNode(true);

  // if statements to prevent 
  if (card.id) {cardClone.id = card.id};
  if (card.skills) {cardClone.querySelector(".card-kicker span").textContent = card.skills};
  if (card.name) {cardClone.querySelector(".card-title h4").textContent = card.name};
  if (card.description) {cardClone.querySelector(".card-description span").textContent = card.description};
  if (card.icon) {cardClone.querySelector(".card-icon i").setAttribute("data-lucide", card.icon)};
  
  categoryCards.appendChild(cardClone);
  
  lucide.createIcons();
}

function setupBoard(tasks) {
  let card = tasks.categories[0].cards[0]
  let category = tasks.categories[0]

  addCard(card, category);
}

setupBoard(tasks);
