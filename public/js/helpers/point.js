class PointHelper {
    normalize(canvas, x, y) {
        let rect = canvas.getBoundingClientRect();
        let point = {
			x: Math.round((x-rect.left)/(rect.right-rect.left)*canvas.width),
			y: Math.round((y-rect.top)/(rect.bottom-rect.top)*canvas.height)
		};
        
        return point;
    } 
}

module.exports = new PointHelper();