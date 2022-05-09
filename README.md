# MMM-RequestHTML

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

This module retrieves HTML from a url and displays it.

JSON response format
{ html: "<b>html</b><p>and stuff</p>" }

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:

        {
            module: 'MMM-RequestHTML',
            config: {
                updateInterval: 3000,
		url: "https://jsonplaceholder.typicode.com/posts/1",
		noDataText: "uhhh ohhh",
		animationSpeed: 500
            }
        }
