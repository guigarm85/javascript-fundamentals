
// JavaScript Async/Await - Simulated Data Fetching

// Return a Promise that resolves after 4 seconds
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 4000);
    });
}

// Wait for the Promise to resolve
async function getData() {
    console.log("Fetching data...");

    const result = await fetchData();
    console.log(result);
}

// Execute the async function
getData();
