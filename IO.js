const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Please enter your name: ', (name) => {
    console.log(`Hello, ${name}!`);
    
    // Close the interface
    rl.close();
});