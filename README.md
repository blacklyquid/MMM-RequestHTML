# MMM-RequestHTML

This is a module for the [MagicMirrorÂ²](https://github.com/MichMich/MagicMirror/).

The module retrieves HTML from a url and displays it.
## Installation
```
git clone https://github.com/blacklyquid/MMM-RequestHTML.git
cd MMM-RequestHTML
npm install
```
## JSON response format
```
{  html: "THE HTML TO DISPLAY"  }
```

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:

## Example Module Config
```javascript
{
	module: 'MMM-RequestHTML',
	config: {
		updateInterval: 3000,
		url: "https://jsonplaceholder.typicode.com/posts/1",
		animationSpeed: 500,
		loadingText: "Loading..."
	}
},
```
