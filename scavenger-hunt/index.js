import { tasks } from "./modules/tasks.js";
import { drawBoard } from "./modules/drawBoard.js";
import { attachModalOpeners, openModal, setupModal } from "./modules/modals.js";

drawBoard(tasks);
attachModalOpeners();
