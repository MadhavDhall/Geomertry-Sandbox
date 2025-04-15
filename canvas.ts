{
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;

    abstract class Shape {
        color: string;
        fill: boolean;
        rotatatingAngle!: number;
        scaleX!: number;
        scaleY!: number;

        constructor(fill: boolean = false, color: string = "black", rotatatingAngle: number, scaleX: number, scaleY: number) {
            this.fill = fill;
            this.color = color;
            this.rotatatingAngle = rotatatingAngle;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
        }

        pre(ctx: CanvasRenderingContext2D) {
            ctx.rotate(this.rotatatingAngle);
            ctx.scale(this.scaleX, this.scaleY);
        }

        draw(ctx: CanvasRenderingContext2D) {
            if (this.fill) {
                ctx.fillStyle = this.color;
                ctx.fill();
            } else {
                ctx.strokeStyle = this.color;
                ctx.stroke();
            }
        }
    }

    class Rectangle extends Shape {
        x: number;
        y: number;
        width: number;
        height: number;

        constructor(
            x: number,
            y: number,
            width: number,
            height: number,
            fill: boolean = false,
            color: string = "black",
            rotatatingAngle?: number,
            scaleX?: number,
            scaleY?: number
        ) {
            super(fill, color, rotatatingAngle, scaleX, scaleY);
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }

        show(ctx: CanvasRenderingContext2D) {
            this.pre(ctx);
            ctx.rect(this.x, this.y, this.width, this.height);
            this.draw(ctx);

            ctx.save();
        }
    }

    class Circle extends Shape {
        x: number;
        y: number;
        radius: number;

        constructor(
            x: number,
            y: number,
            radius: number,
            fill: boolean = false,
            color: string = "black",
            rotatatingAngle?: number,
            scaleX?: number,
            scaleY?: number
        ) {
            super(fill, color, rotatatingAngle, scaleX, scaleY);
            this.x = x;
            this.y = y;
            this.radius = radius;
        }

        show(ctx: CanvasRenderingContext2D) {
            this.pre(ctx);

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);

            this.draw(ctx);
        }
    }

    class Triangle extends Shape {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        x3: number;
        y3: number;

        constructor(
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            x3: number,
            y3: number,
            fill: boolean = false,
            color: string = "black",
            rotatatingAngle?: number,
            scaleX?: number,
            scaleY?: number
        ) {
            super(fill, color, rotatatingAngle, scaleX, scaleY);
            this.x1 = x1;
            this.x2 = x2;
            this.x3 = x3;
            this.y1 = y1;
            this.y2 = y2;
            this.y3 = y3;
        }

        show(ctx: CanvasRenderingContext2D) {
            this.pre(ctx);

            ctx.moveTo(this.x1, this.y1);
            ctx.lineTo(this.x2, this.y2);
            ctx.lineTo(this.x3, this.y3);
            ctx.closePath();

            this.draw(ctx);
        }
    }

    const formSubmit = (e: Event) => {
        e.preventDefault();
    }

    const rectangleForm = document.getElementById("rectangle") as HTMLFormElement;
    rectangleForm.addEventListener("submit", () => {
        const x: number = parseFloat((document.getElementById("x") as HTMLInputElement).value);
        const y: number = parseFloat((document.getElementById("y") as HTMLInputElement).value);
        const width: number = parseFloat((document.getElementById("width") as HTMLInputElement).value);
        const height: number = parseFloat((document.getElementById("height") as HTMLInputElement).value);

        const fill: boolean = (document.getElementById("filled") as HTMLInputElement).checked;
        const color: string = (document.getElementById("color") as HTMLInputElement).value;
        const rotatatingAngle: number = parseFloat((document.getElementById("angle") as HTMLInputElement).value);
        const scaleX: number = parseFloat((document.getElementById("scaleX") as HTMLInputElement).value);
        const scaleY: number = parseFloat((document.getElementById("scaleY") as HTMLInputElement).value);

        const r = new Rectangle(x, y, width, height, fill, color, rotatatingAngle, scaleX, scaleY);
        r.show(ctx);
    });

    const circleForm = document.getElementById("circle") as HTMLFormElement;
    circleForm.addEventListener("submit", () => {
        const cx: number = parseFloat((document.getElementById("cx") as HTMLInputElement).value);
        const cy: number = parseFloat((document.getElementById("cy") as HTMLInputElement).value);
        const radius: number = parseFloat((document.getElementById("radius") as HTMLInputElement).value);

        const fill: boolean = (document.getElementById("filled") as HTMLInputElement).checked;
        const color: string = (document.getElementById("color") as HTMLInputElement).value;
        const rotatatingAngle: number = parseFloat((document.getElementById("angle") as HTMLInputElement).value);
        const scaleX: number = parseFloat((document.getElementById("scaleX") as HTMLInputElement).value);
        const scaleY: number = parseFloat((document.getElementById("scaleY") as HTMLInputElement).value);

        const c = new Circle(cx, cy, radius, fill, color, rotatatingAngle, scaleX, scaleY);
        c.show(ctx);
    });
    const triangleForm = document.getElementById("triangle") as HTMLFormElement;
    triangleForm.addEventListener("submit", () => {
        const x1: number = parseFloat((document.getElementById("x1") as HTMLInputElement).value);
        const y1: number = parseFloat((document.getElementById("y1") as HTMLInputElement).value);
        const x2: number = parseFloat((document.getElementById("x2") as HTMLInputElement).value);
        const y2: number = parseFloat((document.getElementById("y2") as HTMLInputElement).value);
        const x3: number = parseFloat((document.getElementById("x3") as HTMLInputElement).value);
        const y3: number = parseFloat((document.getElementById("y3") as HTMLInputElement).value);

        const fill: boolean = (document.getElementById("filled") as HTMLInputElement).checked;
        const color: string = (document.getElementById("color") as HTMLInputElement).value;
        const rotatatingAngle: number = parseFloat((document.getElementById("angle") as HTMLInputElement).value);
        const scaleX: number = parseFloat((document.getElementById("scaleX") as HTMLInputElement).value);
        const scaleY: number = parseFloat((document.getElementById("scaleY") as HTMLInputElement).value);

        const t = new Triangle(x1, y1, x2, y2, x3, y3, fill, color, rotatatingAngle, scaleX, scaleY);
        t.show(ctx);
    });
}