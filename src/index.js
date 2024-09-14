import p5 from "p5";
import {MandelbrotSet} from './MandelbrotSet.js';

const containerElement = document.getElementById('p5-container');
const width = 500;
const height = 500;
const max_iterations = 100;


const sketch = (p) => {
    p.setup = function() {
        p.createCanvas(width, height);
        p.pixelDensity(1);
    };

    p.draw = function() {
        p.loadPixels();
        let mandelbrotSet = new MandelbrotSet(width, height, max_iterations);
        p = mandelbrotSet.draw(p)
        p.updatePixels();
    };
};

new p5(sketch, containerElement);