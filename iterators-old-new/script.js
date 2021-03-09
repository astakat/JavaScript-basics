const colors = ["yellow", "blue", "red", "orange"];
var i = 0;
console.log(colors.length);
console.log(colors);

while (i <= 10) {
    console.log(`the ${colors[i]} is logged`);
    i++
}

for (i = 0; i < colors.length; i++) {
    console.log(i, colors[i]); 
}

colors.forEach(element => console.log(element));
wat = function (element) {
    console.log(element)
}
// expected output: "a"
// expected output: "b"
// expected output: "c"

// 1. for and while take up 7 lines of code..
// 2. .forEach is maar 1 regel...
// 3. array method is heel specifiek gekoppeld aan de array.. dus goed te zien waar het iets mee doet. for and while is weird.. vind ik minder makkelijk leesbaar.

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"