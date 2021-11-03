//Example 1
//Create a function which will add up all the numbers leading up to that parameter number
function sumUp(n) {
  //Creates a variable which stores the starting total value of the sum at zero
  let sum = 0;
  //Loops each time the variable i is less than or equal to the n parameter
  for (let i = 1; 1 <= n; i++) {
    //Short hand way of adding the value of sum with the current loop value of i and storing back in sum
    sum = sum + i;
  }
  //Returns the sum of all the numbers it took to get to the parameter number
  return sum;
}

console.log(sumUp(3));
