// array.map( fn(v,i) {} ) Much like array.forEach()

// The array.map() function iterates over an array and runs a call back for each element. 

// The callback receives the value and the index of the array element as a parameter.

// The difference is that `.map()` will always return you a **new array** of the **same length** as the original array comprised of your return values

// let numbers = [2, 3, 4, 5];
// let squares = numbers.map((item,idx)=>{
//   return item*item;
// });
// console.log(numbers);
// console.log(squares);



let people = [
  { name: "Atallah", role: "Dad" },
  { name: "Messina", role: "Mom" },
  { name: "Razan", role: "Kid" },
  { name: "Zaid", role: "Kid" },
];


let names = people.map((person,idx)=>{
  if(person.name === 'Atallah') {
    return person.name;
  }
  else {
    return 'nothing';
  }
  // return person.name;
})

// let names = people.map((person,idx)=> person.name)
console.log(names);
// names;



// **If you return nothing ... **
let numbers2 = [2, 3, 4, 5];
let newArr = numbers2.map((item,i)=>{
});
console.log(newArr);