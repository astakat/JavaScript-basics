const age = 12;
const isFemale = false;
const driverStatus = 'bob';

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