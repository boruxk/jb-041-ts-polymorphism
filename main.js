var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, color, radius) {
        var _this = _super.call(this, x, y, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.displayDetails = function () {
        return "x: " + this.x + " y: " + this.y + " color: " + this.color + " radius: " + this.radius;
    };
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.circumference = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(x, y, color, length) {
        var _this = _super.call(this, x, y, color) || this;
        _this.length = length;
        return _this;
    }
    Square.prototype.displayDetails = function () {
        return "x: " + this.x + " y: " + this.y + " color: " + this.color + " length: " + this.length;
    };
    Square.prototype.area = function () {
        return Math.pow(this.length, 2);
    };
    Square.prototype.circumference = function () {
        return 4 * this.length;
    };
    Square.prototype.draw = function () {
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
    };
    return Square;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, color, width, height) {
        var _this = _super.call(this, x, y, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.displayDetails = function () {
        return "x: " + this.x + " y: " + this.y + " color: " + this.color + " width: " + this.width + " height: " + this.height;
    };
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.circumference = function () {
        return (2 * this.width) + (2 * this.height);
    };
    Rectangle.prototype.draw = function () {
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
    };
    return Rectangle;
}(Shape));
// NEW
var Tester = /** @class */ (function () {
    function Tester() {
    }
    Tester.test = function () {
        var shape;
        var randNum = (Math.floor(Math.random() * 3)) + 1;
        if (randNum == 1) {
            shape = new Circle(0, 0, "000000", 2);
        }
        else if (randNum == 2) {
            shape = new Square(3, 5, "ff0000", 10);
        }
        else if (randNum == 3) {
            shape = new Rectangle(8, 4, "ff0000", 40, 6);
        }
        console.log("Shapetype: " + randNum);
        console.log("Details: " + shape.displayDetails());
        console.log("Area: " + shape.area());
        console.log("Circumference: " + shape.circumference());
        if (shape instanceof Circle) {
            console.log("If circle, diameter: " + shape.radius * 2);
        }
    };
    return Tester;
}());
console.log("/////////////// Tester: ///////////////");
Tester.test();
var Reporter = /** @class */ (function () {
    function Reporter() {
    }
    Reporter.prototype.showReport = function (s) {
        s.displayDetails();
        s.area();
        s.circumference();
        console.log(s.displayDetails());
        console.log(s.area());
        console.log(s.circumference());
        if (s instanceof Square || s instanceof Rectangle) {
            s.draw();
        }
    };
    return Reporter;
}());
console.log("/////////////// Reporter: ///////////////");
var circle21 = new Circle(0, 0, "0000ff", 2);
var square21 = new Square(3, 5, "ff0000", 10);
var rectangle21 = new Rectangle(5, 5, "00ff00", 5, 15);
var rep = new Reporter;
rep.showReport(circle21);
rep.showReport(square21);
rep.showReport(rectangle21);
var Graphics = /** @class */ (function () {
    function Graphics() {
    }
    Graphics.showShapes = function () {
        var arrShapes = [];
        for (var i = 0; i < 20; i++) {
            var arrArg = [];
            var randNum = (Math.floor(Math.random() * 3)) + 1;
            for (var j = 0; j < 4; j++) {
                var randNum2 = (Math.floor(Math.random() * 100));
                arrArg.push(randNum2);
            }
            var x = arrArg[0];
            var y = arrArg[1];
            var w = arrArg[2];
            var h = arrArg[3];
            var letters = '0123456789ABCDEF';
            var color = '';
            for (var l = 0; l < 6; l++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            if (randNum == 1) {
                arrShapes.push(new Circle(x, y, color, w));
            }
            else if (randNum == 2) {
                arrShapes.push(new Square(x, y, color, w));
            }
            else if (randNum == 3) {
                arrShapes.push(new Rectangle(x, y, color, w, h));
            }
        }
        for (var m = 0; m < arrShapes.length; m++) {
            if (arrShapes[m] instanceof Circle) {
                console.log("***************Circle:");
            }
            else if (arrShapes[m] instanceof Square) {
                console.log("***************Square:");
            }
            else if (arrShapes[m] instanceof Rectangle) {
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
            }
            else if (arrShapes[m] instanceof Circle) {
                console.log("If circle, diameter: " + arrShapes[m].radius * 2);
            }
        }
    };
    return Graphics;
}());
console.log("/////////////// Graphics: ///////////////");
console.log(Graphics.showShapes());
