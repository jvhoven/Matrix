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
	
	intersects(x, y) {
		if(x > this.x && x < (this.x + this.width) && y > this.y && y < (this.y + this.height)) {
			return true;
		}
		return false;
	}
}

module.exports = Shape;