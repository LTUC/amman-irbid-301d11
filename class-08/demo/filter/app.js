// Filter
// .filter() similar to .map() -> iterate over an array and runs a callback for each element
// it will return a new array and it could be the same length of the original one or not
// the elements will be from the original array that match your criteria(your filter condition) 

let numbers= [1,2,6,7,8];
let evens = numbers.filter((n,i)=>{
  // if(n%2===0) { return true;}
  return !(n%2);
})
// console.log(numbers);
// console.log(evens);

// let newEven = evens.map((n)=>{
//   return n*n;
// })

// console.log(newEven)

let family = [
  { name: 'atallah', role: 'dad' },
  { name: 'mesina', role: 'mum' },
  { name: 'ali', role: 'son' },
  { name: 'zaid', role: 'son' },
  { name: 'eman', role: 'daughter' }
];

let sons = family.filter(person=>{
  if(person.role==='son') {
    return true;
  }
});
console.log(family);
console.log(sons);

// let sonNames = sons.map(p=>{
//   return p.name
//   });

let sonNames = sons.map(p=>p.name);
console.log(sonNames)