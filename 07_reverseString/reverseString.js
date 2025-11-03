const reverseString = function(word) {
    wordArray = word.split ("")
                    .sort((a,b) => a.indexOf>b.indexOf? 1 : -1)
                    .join("")
    return wordArray
    
};
console.log(reverseString("Papaya"))

// Do not edit below this line
module.exports = reverseString;
