class Square {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<rect width="150" height="150" fill="${this.color}" x="75" y="25" />`;
    }
}

class Circle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150,25 225,175 75,175" fill="${this.color}" />`;
    }
}

module.exports = { Square, Circle, Triangle };
