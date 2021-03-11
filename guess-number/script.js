let person = prompt("Please enter your name", "Joe Banjo");

if (person != null) {
    alert("Hello " + person + "! How are you today?");
}

let numberString = prompt("Please enter a number between 0 and 5 to start the game", "0...5");
let numberInput = parseInt(numberString);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

console.log(getRandomInt(0, 6));
let numberRandom = getRandomInt(0, 6);

const judgeNumbers = function(numberR, numberI){
    if (numberR === numberI) {
        return true;
    }
    else {
        return false;
    }
} 

const compareNumbers = function(numberR, numberI){
    const result = judgeNumbers(numberR, numberI);
    if (result === false){
        alert("Sorry! That's not the number we are looking for..");
        // for (let count = 6; count > 0; count--) {
        //     alert(`You have ${count} turns left`);
        //   }
        numberInput = Number(prompt("Guess again:", "0...5"));
        compareNumbers(numberRandom, numberInput);
        
    }
    else if (result === true){
        alert("Yesss! Congrats, you've guessed the number correctly!");
        alert("You finished the game. Till next time " + person + " !");
    }
}

compareNumbers(numberRandom, numberInput);
