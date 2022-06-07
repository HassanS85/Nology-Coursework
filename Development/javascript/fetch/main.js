// //https://dog.ceo/api/breed/hound/images

// //https://dog.ceo/api/breed/pug/images/random

// //https://dog.ceo/api/breeds/image/random?English Bulldog=true

// //https://dog.ceo/api/breeds/image/random/5


// // const getUsers = async () => {
// //     const response = await fetch("https://example.com/users");
// //     const data = await response.json();
// //}

// //getting an object back

// const DogContainer = document.getElementById("dog-container");
// const DogButton = document.getElementById("get-dog-button");
// const DogImages = document.getElementById("randomDogImages");
// // //ASYNC/AWAIT 
// // //async is labelling the function -> asyncrhonous
// // //await allows to pause/wait for something
// // //fetch(URL) send a request -> a get request by default.
// // const getRandomQuote = async () => {
// //     // response is detailing how the request went. has status codes on
// //     const response = await fetch("https://dog.ceo/api/breeds/image/random")
// //     //data -> get info out of the response -> be able to use it. 
// //     //take time -> await the result/JSON to work with.
// //     const data = await response.json();
// //     console.log(response);
// //     console.log(data);
// //     console.log(data.author);
// //     console.log(data.content);
// //     console.log(data.tags[0]);


// //     quoteContainer.innerHTML += `<div class="quote"><h2>${data.author}</h2><button>${data.content}</button></div>`
// // };

// // quoteButton.addEventListener("click", getRandomQuote);


// //ASYNC/AWAIT 
// //async is labelling the function -> asyncrhonous
// //await allows to pause/wait for something
// //fetch(URL) send a request -> a get request by default.
// const getRandomDog = async () => {
//     try {
//         const response = await fetch("https://dog.ceo/api/breeds/image/random")
//         console.log(response)
//         if(!response.ok){
//             return;
//         }


//     // response is detailing how the request went. has status codes on
//         //fetch -> promise -> 3 states
//     //pending - doing something
//     //resolved -> success
//     //rejected -> something gone wrong
//     //data -> get info out of the response -> be able to use it. 
//     //take time -> await the result/JSON to work with.
//     const data = await response.json();
// } catch(error){


// }   console.log(response);
//     console.log(data);
//     console.log(data.content);



//     DogContainer.innerHTML += `<div class="quote"><h2><img src =${data.message}></></h2></div>`

// };

// const getMultipleImages = async () => {
//     // response is detailing how the request went. has status codes on
//     const response = await fetch("https://dog.ceo/api/breeds/image/random/5")
//     //data -> get info out of the response -> be able to use it. 
//     //take time -> await the result/JSON to work with.
//     const data = await response.json();
//     console.log(response);
//     console.log(data);
//     console.log(data.content);



//     DogContainer.innerHTML = `<div class = "dog"><h3><img src=${data.message[2]}></></h3></div>`
// }

// DogButton.addEventListener("click", getRandomDog);
// DogImages.addEventListener("click", getMultipleImages);


// const quoteContainer = document.getElementById("quote-container");
// const quoteButton = document.getElementById("get-quote-button");
// const dogContainer = document.querySelector("#dog-container");
// const getDogButton = document.querySelector("#get-dog-button");
// const getFiveDogsButton = document.querySelector("#get-five-dogs-button");

// // GETTING AN OBJECT BACK
// // ASYNC / AWAIT
// // ASYNC -> LABELING THE FUNCTION -> ASYNCHRONOUS
// // AWAIT -> ALLOWS TO PAUSE / WAIT FOR SOMETHING
// // fetch(URL) -> SEND A REQUEST -> A GET REQUEST BY DEFAULT
// const getRandomQuote = async () => {
//   // RESPONSE -> HOW THE REQUEST WENT -> STATUS CODES OR OK
//   const response = await fetch("https://api.quotable.io/random"); // WAIT UNTIL WE GET A RESPONSE
//   // DATA -> GET INFORMATION OUT OF THE RESPONSE -> BE ABLE TO USE IT
//   // TAKE TIME -> AWAIT THE RESULT / JSON TO WORK WITH
//   const data = await response.json(); // GETTING THE DATA OUT OF THE RESPONSE

//   // GET ACCESS TO THE DATA + POPULATE THE HTML
//   quoteContainer.innerHTML += `<div class="quote"><h2>${data.author}</h2><p>${data.content}</p></div>`;
// };

// const generateDogImage = src => {
//   return `<img src="${src}" alt="cute doggo"/>`;
// };

// const getRandomDog = async () => {
//   // FETCH -> PROMISE -> 3 STATES
//   // - PENDING -> DOING THE WORK
//   // - RESOLVED -> ALL GOOD OR REJECTED -> SOMETHING HAS GONE WRONG
//   try {
//     const response = await fetch("https://dog.ceo/api/breeds/image/radom");
//     // RESPONSE HAD OK STATUS CODE
//     // IF RESPONSE IS NOT OKAY
//     console.log(response);
//     if (!response.ok) {
//       // CREATE AN ERROR OBJECT -> INFORMATION ABOUT THE ERROR
//       throw new Error(response.status + " error with request");
//     }
//     const data = await response.json();
//     dogContainer.innerHTML = generateDogImage(data.message);
//   } catch (error) {
//     console.log(error);
//     alert(error.message);
//   }
// };

// const getFiveRandomDogs = async () => {
//   const response = await fetch("https://dog.ceo/api/breeds/image/random/5");
//   const data = await response.json();

//   dogContainer.innerHTML = data.message.map(generateDogImage).join("");
// };

// getDogButton.addEventListener("click", getRandomDog);
// getFiveDogsButton.addEventListener("click", getFiveRandomDogs);
// quoteButton.addEventListener("click", getRandomQuote);

//Write a function that takes two arguments,  an array and a desired item (string/number) to be removed.
//The function will return an array with the desired item removed.

let arrays = ["apple", "banana", "pear", "kiwi"]
const myFunction = array.filter((array) => {
    return array.includes("w");
})

console.log(myFunction);
console.log(arrays);