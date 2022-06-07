
// Pure Functions //

// - With a given input, they always return the same output
// - They do not rely on any variable outside their scope
// - They do not modify the state of the application (side effects)

const obj = { a: 0 }

const notPure = (input) => {
  input.a = input.a + 1;
  return input.a;
}
// console.log(obj)
// notPure(obj)
// console.log(obj)
// notPure(obj)
// console.log(obj)

// Example of Pure Function

const pure = (input) => {
  let output = input.a + 1
  return output;
}

// console.log(pure(obj))
// console.log(pure(obj))



// - Print the odd numbers less than given parameter
// - Calculate the sum of numbers from 1 to a given parameter
// - Calculate the sum of odd numbers greater than 10 and less than a given parameter
// - Create a function that will convert from Celsius to Fahrenheit

const oddNumber= (number) => {
    for (let i = 1; i <= number; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
oddNumber(7);

//display the sum of  numbers


const number = 9;

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log(sum);



// convert C to F degree
//(celsius * 1.8) + 32

const convertCelsiustoF = (newTemp) => 
    newTemp * 1.8 + 32;

console.log(convertCelsiustoF(30));




