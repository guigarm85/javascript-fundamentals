
 // JavaScript Functions - Callbacks

// Execute a callback function with a name
function greetUser(callback) {
    const name = "Alice";
    callback(name);
}

// Display a greeting message
function sayHello(name) {
    console.log(`Hello, ${name}`);
}

// Pass sayHello as a callback
greetUser(sayHello);
