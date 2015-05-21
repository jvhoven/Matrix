var Shape = (function(x, y, width, height, color) {
	
	return {
		x: x,
		y: y,
		width: width,
		height: height,
		color: color || "green",
	
		draw: function(context) {
			context.beginPath();
			context.rect(x - (width / 2), y - (height / 2), width, height);
			context.fillStyle = color;
			context.fill();
		}
	};
});