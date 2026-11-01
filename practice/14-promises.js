
// JavaScript Promises - Handling Success and Failure

// Simulate a successful or failed operation
const fetchData = new Promise((resolve, reject) => {
    console.log("Fetching data...");

    const success = false;

    if (success) {
        resolve("Data fetched successfully!");
    } else {
        reject("Error fetching data!");
    }
});

// Handle the resolved or rejected result
fetchData
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
