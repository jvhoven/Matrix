class PointHelper {
    /**
     * Normalize the coordinates relative to the canvas
     * @param {canvas} The canvas in use
     * @param {x} The x coordinate
     * @param {y} the y coordinate
     */
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