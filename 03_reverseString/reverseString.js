const reverseString = function(phrase) {
    let myText = phrase;
    const myArray = myText.split("");

    const reversedArray = myArray.reverse();
    return reversedArray.join('');
}; 

// Do not edit below this line
module.exports = reverseString;
