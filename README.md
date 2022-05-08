# MMM-RequestHTML

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

Todo: Insert description here!

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-RequestHTML',
            config: {
                updateInterval: 60000,
		retryDelay: 5000,
		urlApi: 'YOUR URL HERE'
            }
        }
    ]
}
