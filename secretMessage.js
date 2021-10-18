let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//Remove last string in the array
secretMessage.pop();

// check the length of the array
console.log(secretMessage.length);

//add strings to the array
secretMessage.push('to', 'program');

//change a specific string to another in the array 
secretMessage[7]='right';

//remove first element in the array
secretMessage.shift();

//add an element at the beginning of the array
secretMessage.unshift('Programming');

//replace 5 elements with a new element
secretMessage.splice(6,5,'know');

//print the joint elements of the array to the console.
console.log(secretMessage.join(' '));

