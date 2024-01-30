const fs = require('fs');
const inquirer = require('inquirer');
const { Square, Circle, Triangle } = require('./lib/shapes');

function createSvgContainer(shapeOutput, text, textColour) {
    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="white" />
            ${shapeOutput}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text>
        </svg>`;
}

function createSvg(text, textColour, shape, shapeColour) {
    let shapeInstance;

    switch (shape) {
        case 'Square':
            shapeInstance = new Square(shapeColour);
            break;
        case 'Circle':
            shapeInstance = new Circle(shapeColour);
            break;
        case 'Triangle':
            shapeInstance = new Triangle(shapeColour);
            break;
        default:
            console.error('Invalid shape. Please choose from: Square, Circle, Triangle');
            process.exit(1);
    }

    const shapeOutput = shapeInstance.render();
    return createSvgContainer(shapeOutput, text, textColour);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Generated ${fileName}`);
        }
    });
}

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter letters (max. 3) for your logo.',
            name: 'text',
        },
        {
            type: 'input',
            message: 'What colour would you like the text to be?',
            name: 'textColour',
        },
        {
            type: 'list',
            message: 'What shape would you like the background to be?',
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            message: 'What color would you like the shape to be?',
            name: 'shapeColour',
        },
    ])
    .then((res) => {
        const svgRender = createSvg(res.text, res.textColour, res.shape, res.shapeColour);
        writeToFile('./examples/logo.svg', svgRender);
    });
