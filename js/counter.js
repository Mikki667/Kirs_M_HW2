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
        this.decrementButton = document.createElement("button");
        this.resetButton = document.createElement("button");
        
        //Add buttons, decrement, reset
        //this.decrement
        //this.reset

        // set button text
        this.button.textContent = "Increment";
        this.decrementButton.textContent = "Decrement";
        this.resetButton.textContent = "Reset";
        // Set new button text
        //this.decrement...
        //this.reset...

        // Append dispay and button into the container div
        container.appendChild(this.display);
        container.appendChild(this.button);
        container.appendChild(this.decrementButton);
        container.appendChild(this.resetButton);
        // append buttons
        //container.appendChild()

        // Add event listener
        this.button.addEventListener("click", ()=> this.increment());
        this.decrementButton.addEventListener("click", ()=> this.decrement());
        this.resetButton.addEventListener("click", ()=> this.reset());
        // Add new event listeners

        // I noticed that in this class example the event listeners are written using
        // anonymous arrow functions. I am not fully sure if I should keep it like this
        // or change it into named functions later. For now I decided to leave it the
        // same as it was shown in class so I don’t change the original structure too much.
        // I might change this later once the main functionality of the counter is working.

        // when this first gets mounted update the display
        this.update();
    }

    //state methods
    increment() {
        this.count++;
        this.update();
    }

    decrement() {
    if (this.count > 0) {
        this.count--;
        this.update();
        }
    }

    reset() {
        this.count = 0;
        console.log("Reset Activated!!!");
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

        if (this.count === 0) {
        this.decrementButton.classList.add("inactive");
        this.resetButton.classList.add("inactive");
    } else {
        this.decrementButton.classList.remove("inactive");
        this.resetButton.classList.remove("inactive");
    }

    }
}

// Counter is super class
// StepCounter is sub class

export class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        this.step = step;
    }
    
    increment() {
        this.count = this.count + this.step;
        this.update();
  }
    decrement() {
    if (this.count > 0) {
        this.count = this.count - this.step;

        if (this.count < 0) {
            this.count = 0;
        }

        this.update();
    }
}
}