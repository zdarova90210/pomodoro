import { Ui } from "./ui.js";

const ui = new Ui();

ui.btnNewPomodoro.addEventListener('click', () => {
  ui.modalNewPomodoro.classList.add('show');
});
