//  IO operations with using readline module
/*  CommonJS module syntax has been used 
    to avoid uncapabilities of parsing to CommonJS modules
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to prompt the user for input
function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Main function
async function main() {
  try {
    const name = await promptUser("What is your name? ");
    console.log(`Hello, ${name}!`);
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    rl.close();
  }
}

// Call the main function
main();
