// Greeting

const judgeAge = function(number){
    if (number <= 18) {
        return false;
    }
    else {
        return true;
    }
} 

const greetAge = function(number){
    const result = judgeAge(number);
    if (result === false){
        return "Hey kiddo";
    }
    else {
        return "Hello there";
    }
}

console.log(greetAge(14));

// VAT calculations: baseprice * 0.21
// exercise 1

// base price, VAT percentage, return incl VAT

const vatAmount = function (number1, number2){
    const vat = number1 * number2;
    return vat;
}

const priceInc = function(number1, number2) {
    const result = vatAmount(number1, number2);
    const price = result + number1;
    return price;
}

console.log(priceInc(1000, 0.21))

// exercise 2

// other way around, so with one number and percentage, create an array with VAT and price without VAT / 1.21
const calVat = function (num1, num2){
    const extracting = num1/(num2 + 1);
    return extracting;
}

const basePrice = function (num1, num2){
    var results = [];
    const result = calVat(num1, num2);
    const stuff = num1 - result;
    results.push(stuff,result)
    return results;
}

console.log(basePrice(1210, 0.21))