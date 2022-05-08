/* Magic Mirror
 * Node Helper: MMM-RequestHTML
 *
 * By 
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
var request = require('request');

module.exports = NodeHelper.create({
	start: function() {
		this.started = false;
		this.config = null;
	},
	socketNotificationReceived: function(notification, payload) {
		var self = this;
		if (notification === 'CONFIG' && self.started == false) {
			self.config = payload;
			self.sendSocketNotification("STARTED", true);
			self.getData();
			self.started = true;
		}
	}
	/*
	 * getData
	 * function example return data and show it in the module wrapper
	 * get a URL request
	 *
	 */
	getData: function() {
		var self = this;
		Log.info('Getting Data: ' + this.name);
		var urlApi = this.config.urlApi; //"https://jsonplaceholder.typicode.com/posts/1";
		var retry = true;
		request({
				url: myUrl,
				method: 'GET'
			}, function (error, response, body) {
			
				if (!error && response.statusCode == 200) {
					self.sendSocketNotification("DATA", body);
					Log.info(body + ' : ' + this.name);
				} else {
					console.log("Error loading");
				}
					
					
		});
		setTimeout(function() { self.getData(); }, this.config.refreshInterval);
	},
	// Example function send notification test
	sendNotificationTest: function(payload) {
		this.sendSocketNotification("MMM-RequestHTML-NOTIFICATION_TEST", payload);
	}
});
