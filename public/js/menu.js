class Menu {
	constructor() {
		this.items = document.querySelectorAll("#sidebar nav ul > li a");;
		this._active = null;
		
		var self = this;
		for(var i = 0; i < this.items.length; i++) {
			this.items[i].addEventListener("click", (event) => self.clickHandler.call(self, event), false);
		};
	}
	
	clickHandler(event) {
		var element = event.srcElement;
		if(this._active != null) {
			this._active.className = "";
		}
		element.className == "active" ? element.className = "" : element.className = "active";
		this._active = element;
	}
	
	get active() {
		return this._active;
	}
	
	set active(act) {
		this._active = act;
	}
	
	deactivate() {
		this.active.className = "";
		this.active = null;
	}
}

module.exports = Menu;
	