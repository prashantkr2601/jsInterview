
# # Implementing Array Flat Polyfills

//


const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];

function flatArray(arr, depth = 1, output = []) {
   if (depth <= 0) {
      output.push(arr);
      return output;
   }

   for (const item of arr) {
      if (Array.isArray(item)) {
         flatArray(item, depth - 1, output);
      } else {
         output.push(item);
      }
   }
   return output;
}

console.log(flatArray(arr, 10));





// Declare an object
let ob = {
    a: 'jack',
    b: {
        c: 'sparrow',
        d: {
            e: 'hahahea'
        }
    }
};

// flatten object
const flattenObj = (ob) => {

	// The object which contains the
	// final result
	let result = {};

	// loop through the object "ob"
	for (const i in ob) {

		// We check the type of the i using
		// typeof() function and recursively
		// call the function again
		if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
			const temp = flattenObj(ob[i]);
			for (const j in temp) {

				// Store temp in result
				result[i + '.' + j] = temp[j];
			}
		}

		// Else store ob[i] in result directly
		else {
			result[i] = ob[i];
		}
	}
	return result;
};

console.log(flattenObj(ob));
