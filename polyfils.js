# #Implementing Map Polyfills

// Define an array
let arr = [8, 5, 9, 6, 3];

// Define a custom myMap method on the Array prototype
Array.prototype.myMap = function (callback) {
   let newArray = []; // Initialize an empty array to store mapped elements

   // Loop through each element in the array
   for (let i = 0; i < this.length; i++) {
      // Call the callback function on the current element and store the result
      const result = callback(this[i], i, this);

      // Add the result of the callback to the new array
      newArray.push(result);
   }

   return newArray; // Return the new array with mapped elements
}

// Using the custom myMap method to double each element in the array
const result = arr.myMap((item) => item * 2);

console.log('result', result); // Output: result [16, 10, 18, 12, 6]


# #Implementing Filter Polyfills


// Define an array
let arr = [8, 5, 9, 6, 3];

// Define a custom myFilter method on the Array prototype
Array.prototype.myFilter = function (callback) {
   // Initialize an empty array to store filtered elements
   let filteredArray = [];
   for (let i = 0; i < this.length; i++) {
      // Check if the callback returns true for the current element
      if (callback(this[i], i, this)) {
         // Add the element to the filtered array
         filteredArray.push(this[i]);
      }
   }
   // Return the filtered array
   return filteredArray;
}

// Using the custom myFilter method to filter even numbers from the array
const result = arr.myFilter((item) => item % 2 === 0);

console.log('result', result); // Output: result [8, 6]

//

# # Implementing Reducer Polyfills

//

// Define an array
let array = [4, 5, 8, 6, 82];

// Define a custom myReduce method on the Array prototype
Array.prototype.myReduce = function (callback, initialValue) {
   let accumulator = initialValue; // Initialize accumulator with the initial value

   // Loop through each element in the array
   for (let i = 0; i < this.length; i++) {
      console.log('this', this); // Log the current array
      accumulator = callback(accumulator, this[i], i); // Update the accumulator using the callback function
   }

   return accumulator; // Return the final accumulator value
}

// Using the custom myReduce method to calculate the sum of all elements in the array
const result = array.myReduce((acc, curr) => {
   acc = acc + curr; // Add the current element to the accumulator
   return acc; // Return the updated accumulator value
}, 0); // Start with an initial accumulator value of 0

console.log('result', result); // Output: result 105

//

# # Implementing Array forEach Polyfills

//


const arr = [1, 3, 4, 5, 5, 6];

const logger = (item, index) => {
   console.log(item, index);
};

Array.prototype.forEach = function (callBack) {
   for (let i = 0; i < this.length; i++) {
      callBack(this[i], i);
   }
};

arr.forEach(logger);


//

# # Implementing Array Flat Polyfills

//


const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];

function flat(arr, depth = 1, output = []) {
   if (depth <= 0) {
      output.push(arr);
      return output;
   }

   for (const item of arr) {
      if (Array.isArray(item)) {
         flat(item, depth - 1, output);
      } else {
         output.push(item);
      }
   }
   return output;
}

console.log(flat(arr, 10));


//

# # Implementing call Polyfills

//

# #example

let getName = function (city, age) {
   let res = {
      fullname: `${this.firstname} ${this.lastname}`,
      city: city,
      age: age
   }
   console.log(res)
}

let name = {
   firstname: "shubham",
   lastname: "gupta"
}


# #start

// A simple version
Function.prototype.mycall = function (obj = {}, ...args) {
   let fn = this // refers to funtion that bind is used on
   // obj refers to the this that is being binded to the function
   // args refers to arguments that are passed to the 
   // function while binding
   if (typeof fn !== "function") {
      throw new Error('Invalid function provided for binding.');
   }
   obj.myFn = this;
   return obj.myFn(...args);
}

getName.mycall(name, "Delhi", 26);


//

# # Implementing apply Polyfills

//

Function.prototype.myapply = function (obj = {}, args = []) {
   let fn = this
   if (typeof fn !== "function") {
      throw new Error('Invalid function provided for binding.');
   }
   let randomProp = Math.random();
   while (obj[randomProp] !== undefined) {
      randomProp = Math.random();
   }
   obj[randomProp] = this;
   let result = obj[randomProp](...args);
   delete obj[randomProp];
   return result;
}

getName.myappply(name, ["Delhi", 26]);

//

# # Implementing bind Polyfills

//


Function.prototype.mybind = function (obj = {}, ...args) {
   let fn = this // refers to funtion that bind is used on
   // obj refers to the this that is being binded to the function
   // args refers to arguments that are passed to the function 
   // while binding
   if (typeof fn !== "function") {
      throw new Error('Invalid function provided for binding.');
   }
   // args2 are the arguments passed to the
   // returned fucntion when called .
   return function (...args2) {
      fn.apply(obj, [...args, ...args2])
   }
}

let getfulldetail = getName.mybind(name, "Noida");
getfulldetail("26");

//

# # Implementing Promise Polyfills

//


// Define a custom Promise implementation
window.MyPromise = function (executor) {
   let resolveFn = null; // Initialize resolve function
   let rejectFn = null; // Initialize reject function
   let settled = false; // Flag to track if the promise has already been settled

   // Function to settle the promise with a status and value
   const settle = function (status, value) {
      if (settled) return; // If already settled, do nothing

      settled = true; // Mark the promise as settled

      // Use setTimeout to mimic asynchronous behavior
      setTimeout(() => {
         if (status == 'resolved') {
            resolveFn(value); // Call the resolve function with the value
         } else if (status == 'rejected') {
            rejectFn(value); // Call the reject function with the value
         }
      }, 0);
   }

   // Function to resolve the promise with a value
   const resolve = function (value) {
      settle('resolved', value); // Settle the promise as resolved
   }

   // Function to reject the promise with a value
   const reject = function (value) {
      settle('rejected', value); // Settle the promise as rejected
   }

   // Execute the executor function with resolve and reject functions as arguments
   executor(resolve, reject);

   // Return an object with a 'then' method for chaining
   return {
      then: (onResolve, onReject) => {
         resolveFn = onResolve; // Set the resolve function for 'then' method
         rejectFn = onReject; // Set the reject function for 'then' method
      }
   }
}

// Create a new promise using the custom MyPromise implementation
const promise = new MyPromise((resolve, reject) => {
   setTimeout(() => {
      const i = 5;

      if (i % 2 == 0) {
         resolve(i); // Resolve the promise with the value 5
      } else {
         reject('given number is not even'); // Reject the promise with an error message
      }
   }, 0);
});

// Use the 'then' method to handle resolved and rejected states of the promise
promise.then(
   (value) => {
      console.log('calling polyfill resolved', value); // Output: calling polyfill resolved 5
   },
   (rejected) => {
      console.log('calling polyfill rejected', rejected); // Output: calling polyfill rejected given number is not even
   }
);


//

# # Implementing Promise All Polyfills

//

let promise1 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("resolved 1");
   }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("resolved 2");
   }, 3000);
});

let promise3 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("resolved 3");
   }, 3000);
});

let promise4 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve("resolved 4");
   }, 3000);
});

const arr = [promise1, promise2, promise3, promise4];

function myAll(promises) {
   const output = [];
   let promisesResolved = 0;
   return new Promise((resolve, reject) => {
      try {
         promises.forEach(async (promise, index) => {
            const response = await promise;
            promisesResolved += 1;
            output.push(response);
            if (promisesResolved === promises.length) {
               resolve(output);
            }
         });
      } catch (error) {
         reject(error);
      }
   });
}

myAll(arr).then((res) => {
   console.log(res);
});


//

# # Implementing API Fetch Polyfills

//

if (!window.fetch) {
   window.fetch = function (url, options) {
      return new Promise(function (resolve, reject) {
         var xhr = new XMLHttpRequest();
         xhr.open(options.method || 'GET', url);
         xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
               resolve(xhr);
            } else {
               reject({
                  status: xhr.status,
                  statusText: xhr.statusText
               });
            }
         };
         xhr.onerror = function () {
            reject({
               status: xhr.status,
               statusText: xhr.statusText
            });
         };
         xhr.send(options.body);
      });
   };
}


//

# # Implementing debounce Polyfills

//


function debounce(func, delay) {
   let timeoutId;

   return function (...args) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
         func.apply(this, args);
      }, delay);
   };
}

# #example:

   // Example usage:
   function handleInput() {
      console.log('Input processing...');
   }

const debouncedHandleInput = debounce(handleInput, 300);

// Simulate input events
debouncedHandleInput(); // This won't trigger the immediate execution
debouncedHandleInput(); // This won't trigger the immediate execution


//

# # Implementing throttle Polyfills

//


const throttleFunc = (func, interval) => {
   let shouldFire = true;
   return function () {
      if (shouldFire) {
         func();
         shouldFire = false;
         setTimeOut(() => {
            shouldFire = true;
         }, interval)
      }
   }
}

# #example:

   // Example usage:

   function handleInput() {
      console.log('Input processing...');
   }


const throttleHandleInput = throttleFunc(handleInput, 100);

// Simulate input events
throttleHandleInput();
