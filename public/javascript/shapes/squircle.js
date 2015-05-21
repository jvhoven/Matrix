var Squircle = (function(x, y, width, height, color, cornerRadius) {
	
	var cornerRadius = cornerRadius;
	var instance = new Shape(x, y, width, height, color);
	
	return {
		draw: function(context) {
			
			context.beginPath();
			
			// Set faux rounded corners
			context.lineJoin = "round";
			context.lineWidth = cornerRadius;
			context.fillStyle = instance.color;
			context.strokeStyle = instance.color;
	
			// Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
			context.strokeRect(instance.x-(instance.width / 2)+(cornerRadius/2), instance.y-(instance.height / 2)+(cornerRadius/2), instance.width-cornerRadius, instance.height-cornerRadius);			
			context.fillRect(instance.x-(instance.width / 2)+(cornerRadius/2), instance.y-(instance.height / 2)+(cornerRadius/2), instance.width-cornerRadius, instance.height-cornerRadius);
		}
	};
})