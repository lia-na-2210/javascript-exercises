const palindromes = function (word) {
const array = Array.from(word.split(' ').join('').toLowerCase())

const filtered = array.filter(letter => (letter !== ',' && letter !== '!' && letter !== '.'));
const string = filtered.join('');

const newString = filtered.reverse().join('');
if (string == newString) {
   return true
} else {
    return false
}
};


// Do not edit below this line
module.exports = palindromes;
