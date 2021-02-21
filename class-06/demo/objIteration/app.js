// To iterate over the properties of an object, there are various ways to iterate.

let person = {
    firstName: 'Razan',
    lastName: 'Quran',
    height: 164,
    pets:['cat','dog']
}

// **Object.keys** ... this is an **Object constructor prototype method**, which takes in an object as an argument and returns an array of keys (properties)

// let properties = Object.keys(person);
// console.log(properties);

// // To Iterate it ...
// properties.forEach( property => {
//   console.log(property);
//   console.log(property, person[property]);
// })

// Or 
// Object.keys(person).forEach( property => {
//   console.log(property, person[property]);
// })

// **Object.values** - Returns an iterable array of just the values from the object.

// let properties2 = Object.values(person);
// console.log(properties2);

// Object.values(person).forEach(value => {
//   console.log(value);
// })

// **Object.entries** - Returns an array of each "Entry" as an array with a key and value (retruns array of arrays)
// uses: building forms in HTML

let properties3 = Object.entries(person);
// console.log(properties3);
// console.log(person);
Object.entries(person).forEach(entry => {
  console.log(entry);
});