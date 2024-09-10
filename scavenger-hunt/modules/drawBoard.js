const board = document.querySelector(".hunt-board");

const categoryTemplate = document.querySelector(".template-category");
const cardTemplate = document.querySelector(".template-card");
const taskTemplate = document.querySelector(".template-task");

export function addCategory(category) {
  let categoryClone =
    categoryTemplate.content.firstElementChild.cloneNode(true);

  if (category.id) {
    categoryClone.id = category.id;
  }
  if (category.name) {
    categoryClone.querySelector(".hunt-category h3").textContent =
      category.name;
  }

  board.appendChild(categoryClone);
}

export function addCard(card, category) {
  const categoryCards = board
    .querySelector("#" + category.id)
    .querySelector(".hunt-category-cards");

  // requires .firstElementChild to turn DocumentFragment to HTMLElement
  let cardClone = cardTemplate.content.firstElementChild.cloneNode(true);

  // if statements allow setting default values in the templates, if nothing is inputted
  if (card.id) {
    cardClone.id = card.id;
  }
  if (card.skills) {
    cardClone.querySelector(".card-kicker span").textContent = card.skills;
  }
  if (card.name) {
    cardClone.querySelector(".card-title h4").textContent = card.name;
  }
  if (card.description) {
    cardClone.querySelector(".card-description span").textContent =
      card.description;
  }
  if (card.icon) {
    cardClone
      .querySelector(".card-icon i")
      .setAttribute("data-lucide", card.icon);
  }

  categoryCards.appendChild(cardClone);

  lucide.createIcons();
}

export function addTask(task, card) {
  const cardTasks = board
    // .querySelector("#" + category.id)
    // .querySelector(".hunt-category-cards")
    .querySelector("#" + card.id)
    .querySelector(".card-tasks");

  let taskClone = taskTemplate.content.firstElementChild.cloneNode(true);

  if (task.id) {
    taskClone.id = task.id;
  }
  if (task.name) {
    taskClone.querySelector(".card-task-content-name").textContent = task.name;
  }
  if (task.group.value) {
    taskClone.querySelector(".card-task-content-group").textContent =
      toTitleCase(task.group.discriminator) + " " + task.group.value;
  }

  cardTasks.appendChild(taskClone);

  lucide.createIcons();
}

export function drawBoard(tasks) {
  let categories = tasks.categories;

  for (let category of categories) {
    addCategory(category);
    for (let card of category.cards) {
      addCard(card, category);
      for (let task of card.tasks) {
        addTask(task, card);
      }
    }
  }
}

// ---

function toTitleCase(str) {
  return str.replace(
    /\b\w+/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}
