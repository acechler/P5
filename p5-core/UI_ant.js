// TODO change the updateAntBehavoir function to updateAntSpeed and update existing code.
// Create a new selector that will be called updateAntBehavior. This is where we will add
// new behaviors such as "follow mouse".

class UI_ant {
    constructor() {


        // BUTTONS
        this.addButton = createButton('Add Ant');
        this.addButton.mousePressed(() => AntManager.addAnt());

        this.resetButton = createButton('Reset Canvas');
        this.resetButton.mousePressed(() => AntManager.resetAnts());
    
        // SELECTORS
        this.speedSelector = createSelect();
        this.speedSelector.option('Normal Speed');
        this.speedSelector.option('Double Speed');
        this.speedSelector.option('Half Speed');
        this.speedSelector.changed(() => this.updateAntSpeed());
    }

    // You might want to add methods here that update the UI based on the state of the simulation

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

}
