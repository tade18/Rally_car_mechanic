export class Car {
    constructor(x, y, width, height, imageUrl) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imageUrl = imageUrl;
        this.image = new Image();
        this.image.src = imageUrl;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}