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
        
        this.button.textContent = "Increment";
        this.decrementButton.textContent = "Decrement";
        this.resetButton.textContent = "Reset";
       
        container.appendChild(this.display);
        container.appendChild(this.button);
        container.appendChild(this.decrementButton);
        container.appendChild(this.resetButton);
        
        this.button.addEventListener("click", this.handleIncrementClick.bind(this));
        this.decrementButton.addEventListener("click", this.handleDecrementClick.bind(this));
        this.resetButton.addEventListener("click", this.handleResetClick.bind(this));
        
        this.update();
    }

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
        console.log("Reset Activated");
        this.update();
    }

    handleIncrementClick() {
        this.increment();
    }  

    handleDecrementClick() {
        this.decrement();
    }

    handleResetClick() {
        this.reset();
    }

    update() {
        this.display.textContent = `Count: ${this.count}`;

        if (this.count === 0) {
            this.decrementButton.classList.add("inactive");
            this.resetButton.classList.add("inactive");
        }           
            else {
            this.decrementButton.classList.remove("inactive");
            this.resetButton.classList.remove("inactive");
        }

    }
}

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