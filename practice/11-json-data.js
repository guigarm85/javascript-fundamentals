
 // JavaScript JSON - Parsing and Stringifying

// Simulated API response in JSON format
const apiResponse = '{"users":[{"name":"Emily","age":26},{"name":"Jake","age":31}]}';

// Convert JSON text into a JavaScript object
const data = JSON.parse(apiResponse);

// Display each user's information
data.users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old`);
});

// Create and add a new user
const newUser = {
    name: "Ingrid",
    age: 30
};

data.users.push(newUser);

// Display the updated object
console.log(data);

// Convert the updated object back to JSON text
const updatedJson = JSON.stringify(data);
console.log(updatedJson);
