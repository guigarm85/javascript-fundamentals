
 // JavaScript Error Handling - Division by Zero

// Throw an error when the divisor is zero
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by 0.");
    }
    return a / b;
}

// Handle valid and invalid divisions
try {
    console.log(divideNumbers(10, 2));
    console.log(divideNumbers(4, 0));
} catch (error) {
    console.log("Caught an error: " + error.message);
}
