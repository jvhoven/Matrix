const Menu = require('./menu');
const Squircle = require('./shapes/squircle');

class Graphics {
    constructor(canvas) {
        this.drawn = [];
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.selectedPolygon = null;
        this.menu = Menu;
    }
    
    /**
     * Adds a new polygon to the canvas
     * @param {event} The click event
     */
    addPolygon(event) {
		let element = Menu.active;
		
		if(element != null){			
			let shape = null;
			switch(element.getAttribute('data-val')) {
				case 'class':
					shape = new Squircle(event.coords.x, event.coords.y, 140, 90, '#BDBDBD', 20);
					break;	
			}
			
			this.drawn.push(shape);
			shape.draw(this.context);			
			Menu.deactivate();
		}
	}
	
    /**
     * Highlights a polygon on the canvas
     * @param {event} The click event
     */
	selectPolygon(event) {
		let selectedElement = null;
		//console.log(this.drawnElements);
		
		this.drawn.map((element) => {
			if(element.intersects(event.coords.x, event.coords.y)) {
				//console.log(element);
				selectedElement = element;
			}
		});
		
		if(selectedElement != null) {
            if(this.selectedPolygon != null && this.selectedPolygon != selectedElement) {
                this.selectedPolygon.onSelect(this.context);
            } 
            
            selectedElement.onSelect(this.context);
            this.selectedPolygon = selectedElement;
			this.redraw();	
		}
	}
	
    /**
     * Redraw the canvas
     */
	redraw() {
		this.context.save();
		this.context.clearRect(0, 0, canvas.width, canvas.height);
		this.context.restore();
	}
}

module.exports = Graphics;