const main = document.querySelector("main");

const modalTemplate = document.querySelector(".template-modal");

export function setupModal() {
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

export function openModal(cardID, taskID) {
  console.log("open modal for card " + cardID + " task " + taskID);

  let modalClone = modalTemplate.content.firstElementChild.cloneNode(true);

  main.appendChild(modalClone);

  setupModal();
  lucide.createIcons();
}

function closeModal(element) {
  element.classList.remove("open");
  element.remove();
}
