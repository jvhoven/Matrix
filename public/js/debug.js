class Debug {
    
    /**
     * Draws a dot at a given position
     * @param {context} The canvas context to draw upon
     * @param {coords} Array of coords
     */
    draw(context, coords) {
        let x = coords[0];
        let y = coords[1];
        
        context.beginPath();
		context.rect(x, y, 3, 3);
		context.fillStyle = '#000';
		context.fill();
    }
}

module.exports = new Debug();