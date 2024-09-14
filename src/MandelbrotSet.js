import { abs, add, complex, multiply } from "mathjs";
export class MandelbrotSet {
    constructor (width, height, max_iteration) {
        // properties
        this.width = width;
        this.height = height;
        this.max_iteration = max_iteration;

        // methods

        // Used to assert z^2 + c does not diverge to infinity
        this.mandelbrot = function (c, max) {
            let z = 0;
            for(let i = 0; i < max; i++){
                if(abs(z) > 2){
                    return(i);
                }
                z = add(multiply(z,z),c);
            }
            return max;
        }

        // Matlab inspired function to generate an array of a given number of evenly spaced points between two values.
        this.linspace = function (start, stop, numValues) {
            let arr = [];
            let multiplier = (stop - start) / (numValues - 1);
            for(let i = 0; i < numValues; i++){
                arr.push(start + (multiplier * i));
            }
            return arr;
        }

        // Generates and visualises the mandelbrot set
        this.draw = function (p) {
            let iterations = 0;
            let xPlots = this.linspace(-2.0, 1.0, this.width);
            let yPlots = this.linspace(-1.5, 1.5, this.height);
            for (let y = 0; y < this.height; y++){
                for (let x = 0; x < this.width; x++) {
                    let c = complex(xPlots[x], yPlots[y]);
                    iterations = this.mandelbrot(c, this.max_iteration);
                    let bright = 0;
                    //Colour pixel if c reached max iterations without diverging to infinity
                    if(iterations === 100){
                        bright = 255;
                    }
                    let pix = (x + y * width) * 4;
                    p.pixels[pix + 0] = bright;
                    p.pixels[pix + 1] = bright;
                    p.pixels[pix + 2] = bright;
                    p.pixels[pix + 3] = 255;
                }
            }
            return p;
        }
    }
}