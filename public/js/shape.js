class Shape {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}
	
	draw(context) {
		context.beginPath();
		context.rect(x - (width / 2), y - (height / 2), width, height);
		context.fillStyle = color;
		context.fill();
	}
}

module.exports = Shape;