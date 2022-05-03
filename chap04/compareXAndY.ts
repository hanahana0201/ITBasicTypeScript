export {}

const x = Math.round(Math.random() * 10);
console.log(`xの値: ${x}`);
const y = Math.round(Math.random() * 10);
console.log(`yの値: ${y}`);

if (x == y) {
    console.log("同じ!");
} else {
    console.log("違う!");
}