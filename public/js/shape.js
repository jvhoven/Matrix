class Shape {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.periphery = null;
		this.selected = false;
	}
	
	/**
	 * Draws the shape onto the given context
	 * @param {context} The canvas context
	*/	
	draw(context) {
		context.beginPath();
		context.fill();
	}
	
	/**
	 * Calculates the corners of the shape only applicable for rectangular shapes
	 */
	calculatePeriphery() {
		let topLeft = [ this.x - this.width / 2, this.y - this.height / 2 ];
		let topRight = [ this.x + this.width / 2, this.y + this.height / 2 ];
		let bottomLeft = [ this.x + this.width / 2, this.y - this.height / 2 ];
		let bottomRight = [this.x - this.width / 2, this.y + this.height / 2 ];
		
		this.periphery = [
			topLeft,
			topRight,
			bottomLeft,
			bottomRight
		];
	}
	
	/**
	 * https://github.com/substack/point-in-polygon/blob/master/index.js
	 * Calculates if a given x coord and y coord exists inside the polygon
	 * @param {x} x coord
	 * @param {y} y coord
	*/
	intersects(x, y) {
		let inside = false;
		let ph = this.periphery;
		for (var i = 0, j = ph.length - 1; i < ph.length; j = i++) {
			var xi = ph[i][0], yi = ph[i][1];
			var xj = ph[j][0], yj = ph[j][1];
			
			var intersect = ((yi > y) != (yj > y))
				&& (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
			if (intersect) inside = !inside;
		}
		
		return inside;
	}
}

module.exports = Shape;