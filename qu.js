const util = require('util');
const { Transform } = require('stream');

// Define the Stack constructor
function Stack(options) {
    if (!(this instanceof Stack)) {
        return new Stack(options);
    }
    Transform.call(this, options);
    // Additional initialization code here
}

// Inherit from Transform
util.inherits(Stack, Transform);

// Add additional properties or methods to Stack
Stack.prototype._transform = function (chunk, encoding, callback) {
    // Custom transform logic here
    console.log('Transforming chunk:', chunk.toString());
    this.push(chunk); // Example pass-through behavior
    callback();
};

// Example usage:
const stack = new Stack();

stack.on('data', (chunk) => {
    console.log('Output:', chunk.toString());
});

stack.write('Hello, ');
stack.write('world!');
stack.end();

// Additional properties or methods can be added here
Object.assign(Stack.prototype, {
    customMethod: function() {
        console.log('This is a custom method');
    }
});

// Example usage of the custom method
stack.customMethod();
