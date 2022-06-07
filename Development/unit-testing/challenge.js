
// Calculate the sum of numbers in an array of numbers
const getSumOfArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


// Calculate the average of the numbers in an array of numbers
const getAverageOfArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

// Create a function that receives an array of numbers and returns an array containing only the positive numbers
const getPositiveNumbers = (array) => {
    let posArray = []
    array.filter(number => {
        number > 0 ? posArray.push(number) : null
    })
    return posArray
} 

// Create a function that will return a Boolean specifying if a number is evenly divisible by 3

const divisibleByTwo = () => {
    let number = 0
    if (number % 2 === 0)  {
        return true;
    }
}
// Create a function that will Reverse a string
const reverseString = (string) => {

const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse(); 
    return reverseArray; // "olleh"
}
 
reverseString("hello");

// Create a function that converts a string to an array of characters


// Create a function to get a copy of the object where the keys have become the values and the values the keys. 



module.exports = {getSumOfArray, getAverageOfArray, getPositiveNumbers, divisibleByTwo, reverseString}