var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var canvas = document.getElementById("canvas");
    var ctx_1 = canvas.getContext("2d");
    var Shape = /** @class */ (function () {
        function Shape(fill, color, rotatatingAngle, scaleX, scaleY) {
            if (fill === void 0) { fill = false; }
            if (color === void 0) { color = "black"; }
            this.fill = fill;
            this.color = color;
            this.rotatatingAngle = rotatatingAngle;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
        }
        Shape.prototype.pre = function (ctx) {
            ctx.rotate(this.rotatatingAngle);
            ctx.scale(this.scaleX, this.scaleY);
        };
        Shape.prototype.draw = function (ctx) {
            if (this.fill) {
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            else {
                ctx.strokeStyle = this.color;
                ctx.stroke();
            }
        };
        return Shape;
    }());
    var Rectangle_1 = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle(x, y, width, height, fill, color, rotatatingAngle, scaleX, scaleY) {
            if (fill === void 0) { fill = false; }
            if (color === void 0) { color = "black"; }
            var _this = _super.call(this, fill, color, rotatatingAngle, scaleX, scaleY) || this;
            _this.x = x;
            _this.y = y;
            _this.width = width;
            _this.height = height;
            return _this;
        }
        Rectangle.prototype.show = function (ctx) {
            this.pre(ctx);
            ctx.rect(this.x, this.y, this.width, this.height);
            this.draw(ctx);
            ctx.save();
        };
        return Rectangle;
    }(Shape));
    var Circle_1 = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(x, y, radius, fill, color, rotatatingAngle, scaleX, scaleY) {
            if (fill === void 0) { fill = false; }
            if (color === void 0) { color = "black"; }
            var _this = _super.call(this, fill, color, rotatatingAngle, scaleX, scaleY) || this;
            _this.x = x;
            _this.y = y;
            _this.radius = radius;
            return _this;
        }
        Circle.prototype.show = function (ctx) {
            this.pre(ctx);
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            this.draw(ctx);
        };
        return Circle;
    }(Shape));
    var Triangle_1 = /** @class */ (function (_super) {
        __extends(Triangle, _super);
        function Triangle(x1, y1, x2, y2, x3, y3, fill, color, rotatatingAngle, scaleX, scaleY) {
            if (fill === void 0) { fill = false; }
            if (color === void 0) { color = "black"; }
            var _this = _super.call(this, fill, color, rotatatingAngle, scaleX, scaleY) || this;
            _this.x1 = x1;
            _this.x2 = x2;
            _this.x3 = x3;
            _this.y1 = y1;
            _this.y2 = y2;
            _this.y3 = y3;
            return _this;
        }
        Triangle.prototype.show = function (ctx) {
            this.pre(ctx);
            ctx.moveTo(this.x1, this.y1);
            ctx.lineTo(this.x2, this.y2);
            ctx.lineTo(this.x3, this.y3);
            ctx.closePath();
            this.draw(ctx);
        };
        return Triangle;
    }(Shape));
    var formSubmit = function (e) {
        e.preventDefault();
    };
    var rectangleForm = document.getElementById("rectangle");
    rectangleForm.addEventListener("submit", function () {
        var x = parseFloat(document.getElementById("x").value);
        var y = parseFloat(document.getElementById("y").value);
        var width = parseFloat(document.getElementById("width").value);
        var height = parseFloat(document.getElementById("height").value);
        var fill = document.getElementById("filled").checked;
        var color = document.getElementById("color").value;
        var rotatatingAngle = parseFloat(document.getElementById("angle").value);
        var scaleX = parseFloat(document.getElementById("scaleX").value);
        var scaleY = parseFloat(document.getElementById("scaleY").value);
        var r = new Rectangle_1(x, y, width, height, fill, color, rotatatingAngle, scaleX, scaleY);
        r.show(ctx_1);
    });
    var circleForm = document.getElementById("circle");
    circleForm.addEventListener("submit", function () {
        var cx = parseFloat(document.getElementById("cx").value);
        var cy = parseFloat(document.getElementById("cy").value);
        var radius = parseFloat(document.getElementById("radius").value);
        var fill = document.getElementById("filled").checked;
        var color = document.getElementById("color").value;
        var rotatatingAngle = parseFloat(document.getElementById("angle").value);
        var scaleX = parseFloat(document.getElementById("scaleX").value);
        var scaleY = parseFloat(document.getElementById("scaleY").value);
        var c = new Circle_1(cx, cy, radius, fill, color, rotatatingAngle, scaleX, scaleY);
        c.show(ctx_1);
    });
    var triangleForm = document.getElementById("triangle");
    triangleForm.addEventListener("submit", function () {
        var x1 = parseFloat(document.getElementById("x1").value);
        var y1 = parseFloat(document.getElementById("y1").value);
        var x2 = parseFloat(document.getElementById("x2").value);
        var y2 = parseFloat(document.getElementById("y2").value);
        var x3 = parseFloat(document.getElementById("x3").value);
        var y3 = parseFloat(document.getElementById("y3").value);
        var fill = document.getElementById("filled").checked;
        var color = document.getElementById("color").value;
        var rotatatingAngle = parseFloat(document.getElementById("angle").value);
        var scaleX = parseFloat(document.getElementById("scaleX").value);
        var scaleY = parseFloat(document.getElementById("scaleY").value);
        var t = new Triangle_1(x1, y1, x2, y2, x3, y3, fill, color, rotatatingAngle, scaleX, scaleY);
        t.show(ctx_1);
    });
}
