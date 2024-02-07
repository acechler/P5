// TODO: Create selector will add new behaviors such as "follow mouse" or "move randomly".

class UI_ant {
    constructor() {


        // BUTTONS
        this.addButton = createButton('Add Ant');
        this.addButton.mousePressed(() => AntManager.addAnt());

        this.resetButton = createButton('Reset Canvas');
        this.resetButton.mousePressed(() => AntManager.resetAnts());
    
        //// SELECTORS

        // Speed
        this.speedSelector = createSelect();
        this.speedSelector.option('Normal Speed');
        this.speedSelector.option('Double Speed');
        this.speedSelector.option('Half Speed');
        this.speedSelector.changed(() => this.updateAntSpeed());
    
        // Movement
        this.movementSelector = createSelect();
        this.movementSelector.option('Move Random');
        this.movementSelector.option('Follow Mouse'); 
        this.movementSelector.changed(() => this.updateAntMovement());
    }

    // Add methods here that update the UI based on the state of the simulation
    updateAntSpeed() {
        const speed = this.speedSelector.value();
        switch (speed) {
            case 'Normal Speed':
                AntManager.updateSpeed(1); // Normal speed
                break;
            case 'Double Speed':
                AntManager.updateSpeed(2); // Double speed
                break;
            case 'Half Speed':
                AntManager.updateSpeed(0.5); // Half speed
                break;
        }
    }

    updateAntMovement(){
        const movement = this.movementSelector.value();
        switch(movement){
            case 'Move Random':
                // Have ant manager tell ants to move random
                break;
            case 'Follow Mouse':
                // Have ant manager tell ants to follow mouse
                break;
        }
    }    
}
