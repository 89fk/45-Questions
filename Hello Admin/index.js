"use strict";
// Step 1: Make an array of usernames
let usernames = ["admin", "Eric", "Alice", "John", "Jane"];
// Step 2: Loop through the array and print greetings
for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
