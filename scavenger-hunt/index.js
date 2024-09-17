import { tasks } from "./modules/tasks.js";
import { drawBoard } from "./modules/drawBoard.js";
// import { attachModalOpeners, openModal, setupModalListeners } from "./modules/modals.js";

drawBoard(tasks);
attachModalOpeners();

// import { setupModal } from "./modules/setupModal.js";

const main = document.querySelector("main");

const modalTemplate = document.querySelector(".template-modal");
const modalTaskTemplate = document.querySelector(".template-modal-task");
const modalResourcesTemplate = document.querySelector(
  ".template-task-resources"
);
const modalResourceTemplate = document.querySelector(".template-task-resource");

export function setupModalListeners() {
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
        closeModal(this.parentElement.parentElement.parentElement);
      }
    });
  });

  document.querySelectorAll(".modal-close-button").forEach((element) => {
    element.addEventListener("click", function (e) {
      closeModal(this.parentElement.parentElement.parentElement.parentElement);
    });
  });
}

export function attachModalOpeners() {
  document.querySelectorAll(".card-description").forEach((element) => {
    element.addEventListener("click", function (e) {
      // if (this === e.target) {
      openModal(this.parentElement.parentElement.id);
      // }
    });
  });
  document.querySelectorAll(".card-task").forEach((element) => {
    element.addEventListener("click", function (e) {
      // if (this === e.target) {
      openModal(this.parentElement.parentElement.parentElement.id, this.id);
      // }
    });
  });
}

export function setupModal(modal, cardID, taskID) {
  let modalTaskClone =
    modalTaskTemplate.content.firstElementChild.cloneNode(true);

  let skipTasks = false;
  console.log(taskID);
  if (taskID == undefined) {
    skipTasks = true;
  }

  let categories = tasks.categories;
  let card;
  let task;

  for (let category of categories) {
    for (let cardI of category.cards) {
      if (cardI.id == cardID) {
        card = cardI;
        if (!skipTasks) {
          for (let taskI of card.tasks) {
            if (taskI.id == taskID) {
              task = taskI;
              break;
            }
          }
        }
      }
    }
  }

  if (card.name) {
    modal.querySelector(".modal-title").textContent = card.name;
  }
  if (card.description) {
    modal.querySelector(".modal-description").textContent = card.description;
  }

  if (!skipTasks) {
    // console.log(task);

    if (task.id) {
      modalTaskClone.id = task.id;
    }
    if (task.name) {
      modalTaskClone.querySelector(
        ".modal-card-task-heading-name"
      ).textContent = task.name;
    }
    if (task.group) {
      modalTaskClone.querySelector(
        ".modal-card-task-heading-group"
      ).textContent =
        toTitleCase(task.group.discriminator) + " " + task.group.value;
    }
    if (task.description) {
      modalTaskClone.querySelector(".modal-card-task-description").innerHTML =
        cleaned(task.description);
    }
    if (task.resources) {
      let resourcesClone =
        modalResourcesTemplate.content.firstElementChild.cloneNode(true);
      let resourceClone;

      for (let resource of task.resources) {
        resourceClone =
          modalResourceTemplate.content.firstElementChild.cloneNode(true);
        if (resource.title) {
          resourceClone.querySelector(".task-resource-title").textContent =
            resource.title;
        }
        if (resource.description) {
          resourceClone.querySelector(
            ".task-resource-description"
          ).textContent = resource.description;
        }
        if (resource.href) {
          resourceClone.querySelector(".task-resource-link").href =
            resource.href;
        }
        // if (resource["link"]) {
        //   console.log(resource["link"])
        //   resourceClone.querySelector(".task-resource-link").textContent = resource["link"];
        // }

        resourcesClone
          .querySelector(".modal-task-resources-content")
          .appendChild(resourceClone);
      }

      modalTaskClone
        .querySelector(".modal-card-task-content")
        .appendChild(resourcesClone);
    }

    if (task.submission) {
      if (task.submission.title) {
        modalTaskClone.querySelector(
          ".modal-card-task-submission-title"
        ).textContent = task.submission.title;
      }
      if (task.submission.type == "manual") {
        if (task.submission.description)
          modalTaskClone.querySelector(
            ".modal-card-task-submission-description"
          ).innerHTML = cleaned(task.submission.description);
      }
    }

    modal.querySelector(".modal").appendChild(modalTaskClone);
  }

  return modalTaskClone;
}

export function openModal(cardID, taskID) {
  // console.log("open modal for card " + cardID + " task " + taskID);

  let modalClone = modalTemplate.content.firstElementChild.cloneNode(true);

  setupModal(modalClone, cardID, taskID);

  main.appendChild(modalClone);

  setupModalListeners();
  lucide.createIcons();
}

function closeModal(element) {
  element.classList.remove("open");
  element.remove();
}

// ---

function toTitleCase(str) {
  return str.replace(
    /\b\w+/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

function cleaned(str) {
  return str.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script\s*>/gi,
    ""
  );
}

// ---

// let colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

document.querySelectorAll("#color-scheme-switcher").forEach((element) => {
  element.addEventListener("click", toggleColorTheme);
});

function toggleColorTheme() {
  colorScheme = colorScheme == "dark" ? "light" : "dark"
  updateColorScheme();
}