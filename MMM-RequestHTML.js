/* global Module */

/* Magic Mirror
 * Module: MMM-RequestHTML
 *
 * By 
 * MIT Licensed.
 */

Module.register("MMM-RequestHTML", {
	htmlData: null,
	
	defaults: {
		updateInterval: 3000,
		url: "https://jsonplaceholder.typicode.com/posts/1",
		animationSpeed: 500,
		loadingText: "Loading..."
	},
		
	start() {
		Log.log("MMM-RequestHTML Started...");
		this.getJson();
		this.scheduleUpdate();
	},
	scheduleUpdate() {
		const self = this;
		setInterval(() => {
			self.getJson();
		}, this.config.updateInterval);
	},
	getJson() {
		this.sendSocketNotification("MMM-RequestHTML_GET_JSON", this.config.url);
	},
	socketNotificationReceived(notification, payload) {
		if (notification === "MMM-RequestHTML_JSON_RESULT") {
			// Only continue if the notification came from the request we made
			// This way we can load the module more than once
			if (payload.url === this.config.url) {
				//Log.log("HTML="+payload.data.html);
				this.htmlData = payload.data;
				this.updateDom(this.config.animationSpeed);
			}
		}
	},
	getDom() {
		// create element wrapper for show into the module
		const wrapper = document.createElement("div");
		
		if (!this.htmlData) {
			wrapper.innerHTML = this.config.loadingText;
			return wrapper;
		}
		
		wrapper.innerHTML = this.htmlData.html;
		
		return wrapper;
	},
});
