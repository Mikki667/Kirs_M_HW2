import { Counter , StepCounter } from './counter.js';
import { HeaderMenu } from './header-menu.js';
import { ProjectButtons } from "./project-buttons.js";
import { Animations } from './animations.js';
import { SmoothScroll } from './smooth-scroll.js';

HeaderMenu();
ProjectButtons();
Animations();
SmoothScroll();


const counter1 = new Counter("#counter-container1", 10);
const counter2 = new Counter("#counter-container2");
const stepCounter = new StepCounter("#counterCon", 0, 10);
