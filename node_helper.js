/* Magic Mirror
 * Node Helper: MMM-RequestHTML
 *
 * By 
 * MIT Licensed.
 */

var NodeHelper = require("node_helper");
var request = require('request');

module.exports = NodeHelper.create({

	// Override socketNotificationReceived method.

	/* socketNotificationReceived(notification, payload)
	 * This method is called when a socket notification arrives.
	 *
	 * argument notification string - The identifier of the noitication.
	 * argument payload mixed - The payload of the notification.
	 */
	socketNotificationReceived: function(notification, payload) {
		if (notification === "MMM-RequestHTML-NOTIFICATION_TEST") {
			console.log("Working notification system. Notification:", notification, "payload: ", payload);
			// Send notification
			this.sendNotificationTest(this.anotherFunction()); //Is possible send objects :)
		}
	},
	/*
	 * getData
	 * function example return data and show it in the module wrapper
	 * get a URL request
	 *
	 */
	getData: function() {
		var self = this;

		var urlApi = this.config.urlApi; //"https://jsonplaceholder.typicode.com/posts/1";
		var retry = true;
		request({
				url: myUrl,
				method: 'GET'
			}, function (error, response, body) {
			
				if (!error && response.statusCode == 200) {
					self.sendSocketNotification("DATA", body);
				} else {
					console.log("Error loading");
				}
					
					
		});
	},
	// Example function send notification test
	sendNotificationTest: function(payload) {
		this.sendSocketNotification("MMM-RequestHTML-NOTIFICATION_TEST", payload);
	},

	// this you can create extra routes for your module
	extraRoutes: function() {
		var self = this;
		this.expressApp.get("/MMM-RequestHTML/extra_route", function(req, res) {
			// call another function
			values = self.anotherFunction();
			res.send(values);
		});
	},

	// Test another function
	anotherFunction: function() {
		return {date: new Date()};
	}
});
