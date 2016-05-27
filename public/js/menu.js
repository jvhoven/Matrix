class Menu {
	constructor() {
		this.items = document.querySelectorAll("#sidebar nav ul > li a");;
		this._active = null;
		
		var self = this;
		for(var i = 0; i < this.items.length; i++) {
			this.items[i].addEventListener("click", (event) => self.clickHandler.call(self, event), false);
		};
	}
	
	/**
	 * Click handler that sets the active menu item and adds the active class for visual effect
	 * @param {event} The event given by javascript events
	 */
	clickHandler(event) {
		var element = event.srcElement;
		if(this._active != null) {
			this._active.className = "";
		}
		element.className == "active" ? element.className = "" : element.className = "active";
		this._active = element;
	}
	
	/**
	 * Returns the active menu DOM object
	 * @return {_active} DOM object
	 */
	get active() {
		return this._active;
	}
	
	/**
	 * Sets the active menu DOM object
	 * @param {act} The to-be active DOM object
	 */
	set active(act) {
		this._active = act;
	}
	
	/**
	 * Deselects the current active menu item for visual effect
	 */
	deactivate() {
		this.active.className = "";
		this.active = null;
	}
}

module.exports = new Menu();
	