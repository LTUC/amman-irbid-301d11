// Two Dimensional Array

// One practical application of using nested for loops is working with multi-dimensional arrays.

// A 2 Dimensional array is simply an array whose elements are also arrays.


let table = [
    [2,4,6,5,4,8],
    [1,3,7,9],
    [4,3,8,6]
  ];
  
  for(let i =0;i < table.length ; i++) {
    let line='-';
    for(let j=0; j< table[i].length ; j++){
      line = line + table [i][j] + ' ';
    }
    console.log(line);
  }
  
  
  // // using forEach
  
  table.forEach(val=>{
    let line='-';
    val.forEach(num =>{
      line = line + num + ' ';
    })
    console.log(line);
  })
  
  
  
  // ternary if
  var age = 15;
  
  // var beverage = '';
  // if(age >= 21) {
  //   beverage = 'Adult';
  // } else {
  //   beverage = 'Young';
  // }
  var beverage = (age >= 21) ? "Adult" : "Young";
  console.log(beverage);