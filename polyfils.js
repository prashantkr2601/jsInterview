
##Implementing Filter Polyfills


// Define an array
let arr = [8, 5, 9, 6, 3];

// Define a custom myFilter method on the Array prototype
Array.prototype.myFilter = function(callback) {
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
