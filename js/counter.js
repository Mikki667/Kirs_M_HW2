export class Counter {
    constructor(selector, initialValue=0) {
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.button = document.createElement("button");
        
        //Add buttons, decrement, reset
        //this.decrement
        //this.reset

        // set button text
        this.button.textContent = "Increment";
        // Set new button text
        //this.decrement...
        //this.reset...

        // Append dispay and button into the container div
        container.appendChild(this.display);
        container.appendChild(this.button);
        // append buttons
        //container.appendChild()

        // Add event listener
        this.button.addEventListener("click", ()=> this.increment());
        // Add new event listeners

        // when this first gets mounted update the display
        this.update();
    }

    //state methods
    increment() {
        this.count++;
        this.update();
    }

    //decrement() {
    //if statement needed
    //this.count--
    //this.update();
    //}

    //reset() {
    //this.count=0;
    //}

    update() {
        // set initial display content
        this.display.textContent = `Count: ${this.count}`;

        //classList.toggle() this.count===0
    }
}

// Counter is super class
// StepCounter is sub class

class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        //add step property 
        //this.step = step;
    }
    //increment(){}
    //decrement(){}
}