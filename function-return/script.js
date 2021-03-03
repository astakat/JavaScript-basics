const biggerInt = function(number){
    if (number > 100){
        return true;
    }
    else {
        return false;
    }
}

const firstNumber = 200;
const secondNumber = 10;

const resultOne = biggerInt(firstNumber);
const resultTwo = biggerInt(secondNumber);

// console.log(resultOne);
// console.log(resultTwo);

// the function produces a value: either true or false.

const brendaBounce = function(numPeople, numAge){
    if (numAge <= 18) {
        return "this is a club for adults";
    }
    else if (numPeople < 200) {
        return "come in";
    }
    else {
        return "it's too busy now, come back later";
    }
    
}

const curPeopleOne = 202
const curPeopleTwo = 44;
const curAgeOne = 22;
const curAgeTwo = 17;

const result = brendaBounce (curPeopleTwo, curAgeTwo);
const result2 = brendaBounce (curPeopleOne, curAgeTwo);
const result3 = brendaBounce (curPeopleOne, curAgeOne);
const result4 = brendaBounce (curPeopleTwo, curAgeOne);

// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// for an average you can use i to iterate through the array or use .reduce and n? Math random?

const averageArray = function(numbers){
    const average = numbers.reduce((total, n) => total + n)/numbers.length;
    return average;
};

const numbersArrTest = [1, 2, 3, 4, 5];
const numbersArr = [70, 4, 55, 23, 100];

const resultAve = averageArray(numbersArr);
const resultAveTest = averageArray(numbersArrTest);

console.log(Math.round(resultAve));
console.log(Math.round(resultAveTest));



