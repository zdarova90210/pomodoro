import { Ui } from "./ui.js";
import { Timer } from "./timer.js";
import { Helpers } from "./helpers.js";

const helpers = new Helpers();

function init() {
  helpers.sayWelcomeMessage();
  Ui.btnStart.addEventListener('click', () => Timer.startTimer());
  Ui.btnPause.addEventListener('click', () => Timer.pauseTimer());
  Ui.btnResume.addEventListener('click', () => Timer.resumeTimer());
  Ui.btnReset.addEventListener('click', () => Timer.resetTimer());
}

init();
