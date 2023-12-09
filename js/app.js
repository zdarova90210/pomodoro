import { Helpers } from "./helpers.js";
import { Ui } from "./ui.js";

const helpers = new Helpers();
const ui = new Ui();

function init() {
  helpers.sayWelcomeMessage();
}

init();
