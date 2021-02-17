// Regular Expression REGEX

//we use it to:
// 1-VALIDATE strings against certain rules
// 2-to FIND substring within a string
// 3-to REPLACE part of the string

//typically speaking, we use REGEX to match patterns with strings

let str = 'The rAin in Spain falls Mainly in the plain';

// VALIDATE : test() -> return boolean
// Find S letter in a string
// let regex1 =/S/g;
// let res1 = regex1.test(str);
// console.log(res1);

// let regex1 = /[0-9]/g;
// let regex1 = /\d/g;
// let res1 = regex1.test(str);
// console.log(res1);



//FIND : match() -> return array
// let regex2 = /in/g;
// console.log(str.match(regex2));

// find how many words end with 'in'
// let regex2 = /(in)\b/g;
// console.log((str.match(regex2)).length);

// to retrieve the ends of the words
// let wordEnding = /\W/g;
// console.log(str.match(wordEnding));



//REPLACE : replace() -> return string
// console.log(str.replace(wordEnding,'-'));
// console.log(str);



// we want to match all the words that begin with a capital letter

// let reg =/\b[A-Z](\w)*/g;
// let reg =/[A-Z](\w)*/g;
// let reg =/\b[A-Z](\w)+/g ;
// console.log(str.match(reg));





let names = ['Razan Quran', 'Ali Ahmad', 'Zaid Quran', 'Mohammad Ccc', 'Bana Quran'];

// return a new array contains any name starts with letter (A-C) from the names array
//output: ['Ali Ahmad','Bana Quran']

// let regPattern = /^[A-C]/g;
let regPattern = /Quran$/g;

let newNames = [];
names.forEach(item =>{
  if(regPattern.test(item)){
    newNames.push(item);
  }
})
console.log(newNames);



// choose the strings that ends with Quran word
//output: ['Razan Quran','Zaid Quran','Bana Quran']

