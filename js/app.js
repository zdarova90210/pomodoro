import * as UiElements from "./ui.js";
import { Timer } from "./timer.js";

function init() {
  UiElements.btnStart.addEventListener('click', () => Timer.startTimer());
  UiElements.btnPause.addEventListener('click', () => Timer.pauseTimer());
  UiElements.btnResume.addEventListener('click', () => Timer.resumeTimer());
  UiElements.btnReset.addEventListener('click', () => Timer.resetTimer());
}

init();
