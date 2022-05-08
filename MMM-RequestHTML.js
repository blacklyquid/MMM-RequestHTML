/* global Module */

/* Magic Mirror
 * Module: MMM-RequestHTML
 *
 * By 
 * MIT Licensed.
 */

Module.register("MMM-RequestHTML", {
	defaults: {
		updateInterval: 60000,
		retryDelay: 5000,
		urlApi: "https://jsonplaceholder.typicode.com/posts/1"
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror
		
	start: function() {
		Log.info('Startinged module: ' + this.name);
		var self = this;
		var dataRequest = null;
		var dataNotification = null;

		//Flag for check if module is loaded
		this.loaded = false;

		this.sendSocketNotification('MMM-RequestHTML-CONFIG', this.config);
	},

	getDom: function() {
		var self = this;

		// create element wrapper for show into the module
		var wrapper = document.createElement("div");
		// If this.dataRequest is not empty
		if (this.dataRequest) {
			var wrapperDataRequest = document.createElement("div");
			// check format https://jsonplaceholder.typicode.com/posts/1
			wrapperDataRequest.innerHTML = this.dataRequest.html;

			//var labelDataRequest = document.createElement("label");
			// Use translate function
			//             this id defined in translations files
			//labelDataRequest.innerHTML = this.translate("TITLE");


			//wrapper.appendChild(labelDataRequest);
			wrapper.appendChild(wrapperDataRequest);
		}

		
		return wrapper;
	},

	getScripts: function() {
		return [];
	},

	getStyles: function () {
		return [
			"MMM-RequestHTML.css",
		];
	},

	// Load translations files
	getTranslations: function() {
		//FIXME: This can be load a one file javascript definition
		return {
			en: "translations/en.json",
			es: "translations/es.json"
		};
	},

	processData: function(data) {
		var self = this;
		this.dataRequest = data;
		if (this.loaded === false) { self.updateDom(self.config.animationSpeed) ; }
		this.loaded = true;

		// the data if load
		// send notification to helper
		//this.sendSocketNotification("MMM-RequestHTML-NOTIFICATION_TEST", data);
	},

	// socketNotificationReceived from helper
	socketNotificationReceived: function (notification, payload) {
		if(notification === "MMM-RequestHTML-DATA") {
			this.processData(JSON.parse(payload));
			this.updateDom();
		}
	},
});
