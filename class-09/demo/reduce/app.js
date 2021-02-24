// `array.reduce( fn(a,v,i) {} )` Much like `array.forEach()`
// The `array.reduce()` function iterates over an array and runs a call back for each element. The callback receives the accumalator, the value and the index of the array element as parameters.  

// The original array will never be harmed

// The accumaltor is a placeholder for what you want to return when the callback iteration is done running.


// Add up all the numbers in an array
let numbers = [1,2,3,4];
let sum = numbers.reduce((acc,val,idx)=>{
  acc = acc + val;
  return acc;
},0);

console.log(sum);


// change the shape of your data
let family = [
  {name:'atallah' , role:'dad'},
  {name:'mesina' , role:'mum'},
  {name:'ali' , role:'bro'},
  {name:'zaid', role:'bro'},
  {name:'eman', role:'sis'}
];

let newFamily= family.reduce((acc,val,idx)=>{
  acc[val.name] = val.role;
  return acc;
},{});

console.log(newFamily);