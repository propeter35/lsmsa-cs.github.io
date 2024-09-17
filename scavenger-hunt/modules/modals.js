// // import { setupModal } from "./modules/setupModal.js";

// const main = document.querySelector("main");

// const modalTemplate = document.querySelector(".template-modal");
// const modalTaskTemplate = document.querySelector(".template-modal-task");

// export function setupModalListeners() {
//   document.querySelectorAll(".modal-bg").forEach((element) => {
//     element.addEventListener("mouseup", function (e) {
//       if (this === e.target) {
//         closeModal(this.parentElement);
//       }
//     });
//   });

//   document.querySelectorAll(".modal").forEach((element) => {
//     element.setAttribute("role", "dialog");
//     element.setAttribute("tabindex", "-1");
//     element.addEventListener("keydown", function (e) {
//       if (e.code === "Escape") {
//         closeModal(this.parentElement.parentElement);
//       }
//     });
//   });

//   document.querySelectorAll(".modal-close-button").forEach((element) => {
//     element.addEventListener("click", function (e) {
//       closeModal(this.parentElement.parentElement.parentElement.parentElement);
//     });
//   });
// }

// export function attachModalOpeners() {
//   document.querySelectorAll(".card-description").forEach((element) => {
//     element.addEventListener("click", function (e) {
//       // if (this === e.target) {
//       openModal(this.parentElement.parentElement.id);
//       // }
//     });
//   });
//   document.querySelectorAll(".card-task").forEach((element) => {
//     element.addEventListener("click", function (e) {
//       // if (this === e.target) {
//       openModal(this.parentElement.parentElement.parentElement.id, this.id);
//       // }
//     });
//   });
// }

// export function setupModal(clone, cardID, taskID) {
//   let task = tasks[0]
//   console.log(task);

//   return clone;
// }

// export function openModal(cardID, taskID) {
//   console.log("open modal for card " + cardID + " task " + taskID);

//   let modalClone = modalTemplate.content.firstElementChild.cloneNode(true);
//   let modalTaskClone = modalTaskTemplate.content.firstElementChild.cloneNode(true);
  
//   modalTaskClone = setupModal(modalTaskClone, cardID, taskID);

//   modalClone.querySelector(".modal").appendChild(modalTaskClone)
//   main.appendChild(modalClone); 

//   setupModalListeners();
//   lucide.createIcons();
// }

// function closeModal(element) {
//   element.classList.remove("open");
//   element.remove();
// }
