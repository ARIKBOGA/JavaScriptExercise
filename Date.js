const now = new Date();

console.log(now);
console.log(now.getFullYear());
let monthName = now.toLocaleString("default", { month: "long" });
console.log(now.getMonth()); // months are 0-indexed
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log(monthName);