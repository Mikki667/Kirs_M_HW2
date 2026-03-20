import { Counter , StepCounter } from './counter.js';
import { HeaderMenu } from './header-menu.js';
import { ProjectButtons } from "./project-buttons.js";

HeaderMenu();
ProjectButtons();


const counter1 = new Counter("#counter-container1", 10);
const counter2 = new Counter("#counter-container2");
const stepCounter = new StepCounter("#counterCon", 0, 10);

//const step10 = new StepCounter(id, starting number, step);