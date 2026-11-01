
 // JavaScript Loops - Break and Continue

// Break: stop the loop when i reaches 3
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(`i is: ${i}`);
}

console.log("--------------");

// Continue: skip the iteration when i is 3
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(`i is: ${i}`);
}
