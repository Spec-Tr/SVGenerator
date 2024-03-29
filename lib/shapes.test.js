const { Square, Circle, Triangle } = require('./shapes');

describe('Square', () => {
    test('should render a square SVG', () => {
        const square = new Square('red');
        const svg = square.render();
        expect(svg).toContain('<rect');
        expect(svg).toContain('width="150"');
        expect(svg).toContain('height="150"');
        expect(svg).toContain('fill="red"');
        expect(svg).toContain('x="75"');
        expect(svg).toContain('y="25"');
    });
});

describe('Circle', () => {
    test('should render a circle SVG', () => {
        const circle = new Circle('green');
        const svg = circle.render();
        expect(svg).toContain('<circle');
        expect(svg).toContain('cx="150"');
        expect(svg).toContain('cy="100"');
        expect(svg).toContain('r="75"');
        expect(svg).toContain('fill="green"');
    });
});

describe('Triangle', () => {
    test('should render a triangle SVG', () => {
        const triangle = new Triangle('blue');
        const svg = triangle.render();
        expect(svg).toContain('<polygon');
        expect(svg).toContain('points="150, 18 244, 182 56, 182"');
        expect(svg).toContain('fill="blue"');
    });
});