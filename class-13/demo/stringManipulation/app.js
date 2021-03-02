// String Manipulation

/////////////////////////////////////////
// includes - Does a string include another?
let quote = "whenever you feel sad help somebody";
let result = quote.includes("er y");
// console.log(result);

let family = ['Atallah','mesina', 'Ali','mohammad', 'zaid','eman', 'razan','noor'];
//return an array of names that contains 'al'
let newFamily = family.filter (name => {
  if(name.toLowerCase().includes('al')) return true;
  // return name.toLowerCase().includes('al'); //chaining
});
// console.log(newFamily);

/////////////////////////////////////////
// substring - Returns part of a string between indexes
let quote2 = "whenever you feel sad help somebody";
let result2 = quote2.substring(10,20); //[10,20)
// console.log(result2);

let flowers = "Tulip is my favourite flower and gardenia as well";
//return just the names of flowers seperated by the 'and' word
let ss =flowers.substring(0,5)+' and '+flowers.substring(33,41);
console.log(ss);


/////////////////////////////////////////
// charAt - Returns the character at an indexed position
console.log(flowers.charAt(3));


///////////////////////////////////////////
// charCodeAt - Returns the ASCII Code of a character
// American Standard Code for Information Interchange.
// It is a code for representing 128 English characters as numbers
// with each letter assigned a number from 0 to 127.
console.log(flowers.charCodeAt(0)); // 84 T


///////////////////////////////////////////
// fromCharCode - Returns a letter from ASCII Code
String.fromCharCode('97');