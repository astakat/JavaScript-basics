const age = 12;
const isFemale = false;
const driverStatus = 'bob';
const name = 'Sarah';
const totalAmount = 101;

if (age>= 18) {
    console.log ("come on in");
}
else {
    console.log ("you'll have to be over 18 to come in.");
}

if (isFemale) {
    console.log ("ladies night welcomes you");
}
else {
    console.log ("please come back tomorrow");
}
if (driverStatus == 'bob') {
    console.log ("drive home safely");
}
else if (driverStatus !== 'bob') {
    console.log ("walk or hitch a ride");
}
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
}
else {
    console.log("Je mag gratis eten!")
}
if (name === "Sarah" || name === "Bram"){
    console.log("joepie, hallo en cheers Sarah");
}
if (totalAmount >= 25 && totalAmount<50) {
    console.log("gratis (vega)bitterballen");
}
else if (totalAmount >= 50 && totalAmount<100) {
    console.log("gratis nacho's");
}
else if (totalAmount >= 100) {
    console.log("free champagne");
}
