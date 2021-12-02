//Example 1: Linear Time Complexity Function
//Create a function which will add up all the numbers leading up to that parameter number
function sumUpLinear(n) {
  //Creates a variable which stores the starting total value of the sum at zero
  let result = 0;
  //Loops each time the variable i is less than or equal to the n parameter
  for (let i = 1; i <= n; i++) {
    //Short hand way of adding the value of sum with the current loop value of i and storing back in sum
    result = result + i;
  }
  //Returns the sum of all the numbers it took to get to the parameter number
  return result;
}
//Writting the same function using ES6
const sumUpLinearES6 = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
};
let start,
  end = 0;
console.log(
  `Linear Time Complexity Function:
  \nstarting timestamp: ${(start = performance.now())} \nresult: ${sumUpLinear(
    100000000
  )} \nending timestamp:${(end = performance.now())} \ntime difference is: ${
    end - start
  }\n`
);

//Example 2: Constant Time Complexity Function
function sumUpConstant(n) {
  return (n / 2) * (1 + n);
}
console.log(
  `Constant Time Complexity Function:
  \nstarting timestamp: ${(start =
    performance.now())} \nresult: ${sumUpConstant(
    100000000
  )} \nending timestamp:${(end = performance.now())} \ntime difference is: ${
    end - start
  }\n`
);

//Understanding Time Complexity Problems
function arraySum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
}

console.log(
  `Linear Time Complexity Function:
  \nstarting timestamp: ${(start = performance.now())} \nresult: ${arraySum([
    1, 23, 123, 67,
  ])} \nending timestamp:${(end = performance.now())} \ntime difference is: ${
    end - start
  }\n`
);
