# Kirs_M_HW2

### Overview
This project is a reusable UI component built using JavaScript OOP principles. The goal is to create a modular `Counter` class that manages internal state and updates the DOM dynamically based on user interaction.

### Current Progress (Week 8)
For this first stage, I have set up the basic repository structure and the initial class build based on what we have covored in the class.
**JS Modules** Established a modular file structure for scalability.
**Base Class** Created the `Counter` skeleton with basic increment functionality.

Also for the initial Week 8 submission, I have established the repository structure in order to maintain a clean workflow and follow the project requirements, I am using a multi-branch strategy:

**readme.md** Used for documentation updates and project tracking.
**des.mk.counter** Dedicated to the UI/UX design, including CSS styling and future GSAP enhancements.
**dev.mk.counter** Used for the core JavaScript OOP logic and functional component development.

### Progress Update (Week 9)

During this stage I focused on completing the main functionality of the counter component and improving the UI behavior.

I added Decrement and Reset buttons and implemented logic to make sure the counter value cannot go below zero. I also introduced a simple state-driven UI update by visually disabling the Decrement and Reset controls when the count is equal to zero.

To demonstrate inheritance and more advanced OOP concepts, I created a `StepCounter` class that extends the base `Counter` class. This version accepts a custom step value and overrides the increment and decrement methods.

Finally, I started building the documentation layout for the page, including an Overview section, a short How To Use explanation, and a Live Demo area that showcases multiple counter instances with different behaviors.

---

### The Plan
Over the next two weeks, I will be working on this base to include:
**Advanced Controls** Adding Decrement and Reset buttons (including logic to prevent counts below zero).
**State-Driven UI** Using CSS classes to visually disable buttons when the count is at zero.
**Inheritance** Building a `StepCounter` subclass that extends the base logic to support custom steps.
**Documentation** A polished demo page showcasing multiple instances of the component.
