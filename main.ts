interface IDrawable {
    draw(): any;
}

abstract class Shape {
    x: number;
    y: number;
    color: string;

    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    abstract displayDetails(): string;

    abstract area(): number;

    abstract circumference(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(x: number, y: number, color: string, radius: number) {
        super(x, y, color);
        this.radius = radius;
    }

    displayDetails(): string {
        return `x: ${this.x} y: ${this.y} color: ${this.color} radius: ${this.radius}`;
    }

    area(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }

    circumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Square extends Shape implements IDrawable {
    length: number;
    static draw: any;

    constructor(x: number, y: number, color: string, length: number) {
        super(x, y, color);
        this.length = length;
    }

    displayDetails(): string {
        return `x: ${this.x} y: ${this.y} color: ${this.color} length: ${this.length}`;
    }

    area(): number {
        return Math.pow(this.length, 2)
    }

    circumference(): number {
        return 4 * this.length;
    }

    draw() {
        console.log("DRAW SQUARE");

        //     var main: HTMLElement = document.getElementById("starlet");
        //     var temp: string = "";

        //     for (var k = 0; k < this.y - 1; k++) {
        //         temp += "<br>"
        //     }

        //     for (var i = 0; i < this.length; i++) {
        //         temp += "<br>"
        //         var str = "<span style='color:#fff'>_</span>"
        //         temp += str.repeat(this.x)
        //         for (var j = 0; j < this.length; j++) {
        //             temp += "<span style='color:#" + this.color + "'>*</span>";
        //         }
        //     }
        //     return main.innerHTML += temp;
    }

}

class Rectangle extends Shape implements IDrawable {
    width: number;
    height: number;

    constructor(x: number, y: number, color: string, width: number, height: number) {
        super(x, y, color);
        this.width = width;
        this.height = height;
    }

    displayDetails(): string {
        return `x: ${this.x} y: ${this.y} color: ${this.color} width: ${this.width} height: ${this.height}`;
    }

    area(): number {
        return this.width * this.height;
    }

    circumference(): number {
        return (2 * this.width) + (2 * this.height);
    }

    draw() {
        console.log("DRAW RECTANGLE");

        //     var main: HTMLElement = document.getElementById("starlet");
        //     var temp: string = "";

        //     for (var k = 0; k < this.y - 1; k++) {
        //         temp += "<br>"
        //     }

        //     for (var i = 0; i < this.height; i++) {
        //         temp += "<br>"
        //         var str = "<span style='color:#fff'>_</span>"
        //         temp += str.repeat(this.x)
        //         for (var j = 0; j < this.width; j++) {
        //             temp += "<span style='color:#" + this.color + "'>*</span>";
        //         }
        //     }
        //     return main.innerHTML += temp;
    }
}

// NEW

class Tester {
    public static test(): void {
        var shape: Shape;
        var randNum = (Math.floor(Math.random() * 3)) + 1;

        if (randNum == 1) {
            shape = new Circle(0, 0, "000000", 2);
        } else if (randNum == 2) {
            shape = new Square(3, 5, "ff0000", 10);
        } else if (randNum == 3) {
            shape = new Rectangle(8, 4, "ff0000", 40, 6);
        }

        console.log("Shapetype: " + randNum);
        console.log("Details: " + shape.displayDetails());
        console.log("Area: " + shape.area());
        console.log("Circumference: " + shape.circumference());

        if (shape instanceof Circle) {
            console.log("If circle, diameter: " + shape.radius * 2);
        }
    }
}
console.log("/////////////// Tester: ///////////////");
Tester.test();

class Reporter {
    public showReport(s: Shape): void {
        s.displayDetails();
        s.area();
        s.circumference();
        console.log(s.displayDetails());
        console.log(s.area());
        console.log(s.circumference());
        if (s instanceof Square || s instanceof Rectangle) {
            s.draw();
        } 
    }
}
console.log("/////////////// Reporter: ///////////////");
var circle21 = new Circle(0, 0, "0000ff", 2);
var square21 = new Square(3, 5, "ff0000", 10);
var rectangle21 = new Rectangle(5, 5, "00ff00", 5, 15);

var rep = new Reporter;
rep.showReport(circle21);
rep.showReport(square21);
rep.showReport(rectangle21);

class Graphics {
    public static showShapes(): void {
        var arrShapes = [];
        for (let i = 0; i < 20; i++) {
            var arrArg = [];
            var randNum = (Math.floor(Math.random() * 3)) + 1;

            for (let j = 0; j < 4; j++) {
                var randNum2 = (Math.floor(Math.random() * 100));
                arrArg.push(randNum2);
            }
            var x = arrArg[0];
            var y = arrArg[1];
            var w = arrArg[2];
            var h = arrArg[3];

            var letters = '0123456789ABCDEF';
            var color = '';
            for (let l = 0; l < 6; l++) {
                color += letters[Math.floor(Math.random() * 16)];
            }

            if (randNum == 1) {
                arrShapes.push(new Circle(x, y, color, w));
            } else if (randNum == 2) {
                arrShapes.push(new Square(x, y, color, w), );
            } else if (randNum == 3) {
                arrShapes.push(new Rectangle(x, y, color, w, h));
            }
        }

        for (let m = 0; m < arrShapes.length; m++) {
            if (arrShapes[m] instanceof Circle){
                console.log("***************Circle:");    
            } else if (arrShapes[m] instanceof Square) {
                console.log("***************Square:");
            } else if (arrShapes[m] instanceof Rectangle) {
                console.log("***************Rectangle:");
            }
            arrShapes[m].displayDetails();
            arrShapes[m].area();
            arrShapes[m].circumference();
            console.log("Details: " + arrShapes[m].displayDetails());
            console.log("Area: " + arrShapes[m].area());
            console.log("Circumference: " + arrShapes[m].circumference());

            if (arrShapes[m] instanceof Square || arrShapes[m] instanceof Rectangle) {
                arrShapes[m].draw();
            } else if (arrShapes[m] instanceof Circle) {
                console.log("If circle, diameter: " + arrShapes[m].radius * 2);
            }
        }
    }
}
console.log("/////////////// Graphics: ///////////////");
console.log(Graphics.showShapes());

