const Shape = require('../shape');
const Debug = require('../debug');

class Squircle extends Shape {
	constructor(x, y, width, height, color, cornerRadius) {
		super(x, y, width, height, color);
		this.cornerRadius = cornerRadius;
	}
	
	draw(context, strokeStyle = false, lineWidth = false) {
		context.beginPath();
			
		// Set faux rounded corners
		context.lineJoin = "round";
		context.lineWidth = lineWidth || this.cornerRadius;
		context.fillStyle = this.color;
		context.strokeStyle = strokeStyle || this.color;
	
		// Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
		context.strokeRect(this.x-(this.width / 2)+(this.cornerRadius/2), this.y-(this.height / 2)+(this.cornerRadius/2), this.width-this.cornerRadius, this.height-this.cornerRadius);			
		context.fillRect(this.x-(this.width / 2)+(this.cornerRadius/2), this.y-(this.height / 2)+(this.cornerRadius/2), this.width-this.cornerRadius, this.height-this.cornerRadius);
		
		// Set topLeft, topRight, bottomLeft, bottomRight coords
		this.calculatePeriphery();
		
		/*
		this.periphery.map((side) => {
			Debug.draw(context, side, [this.width, this.height]);
		});*/
	}
	
	onSelect(context) {
		this.selected = !this.selected;
		if(this.selected) {
			this.draw(context, '#FFF', 10);
		} else {
			this.draw(context);
		}
	}
}

module.exports = Squircle;