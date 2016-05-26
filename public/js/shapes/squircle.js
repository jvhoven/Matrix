const Shape = require('../shape');

class Squircle extends Shape {
	constructor(x, y, width, height, color, cornerRadius) {
		super(x, y, width, height, color);
		this.cornerRadius = cornerRadius;
	}
	
	draw(context, selected = false) {
		context.beginPath();
			
		// Set faux rounded corners
		context.lineJoin = "round";
		context.lineWidth = this.cornerRadius;
		context.fillStyle = this.color;
		if(!selected) {
			context.strokeStyle = this.color;	
		}
	
		// Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
		context.strokeRect(this.x-(this.width / 2)+(this.cornerRadius/2), this.y-(this.height / 2)+(this.cornerRadius/2), this.width-this.cornerRadius, this.height-this.cornerRadius);			
		context.fillRect(this.x-(this.width / 2)+(this.cornerRadius/2), this.y-(this.height / 2)+(this.cornerRadius/2), this.width-this.cornerRadius, this.height-this.cornerRadius);
	}
}

module.exports = Squircle;