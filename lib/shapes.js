class Square {
    constructor(colour = 'black') {
        this.colour = colour;
    }

    render() {
        return `<rect width="150" height="150" fill="${this.colour}" x="75" y="25" />`;
    }
    setColour(colour){
        this.colour = colour;
    }
}

class Circle {
    constructor(colour = 'black') {
        this.colour = colour;
    }

    render() {
        return `<circle cx="150" cy="100" r="75" fill="${this.colour}" />`;
    }
    setColour(colour){
        this.colour = colour;
    }
}

class Triangle {
    constructor(colour = 'black') {
        this.colour = colour;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />`;
    }
    setColour(colour){
        this.colour = colour;
    }
}

module.exports = { Square, Circle, Triangle };
