//The function will return the index in which the target value if found, else return none
function binary_search(list, target) {
  let first = 0;
  //Since length returns the elements but not the index, subtract 1 to find the amount of indeces
  let last = list.length - 1;
  while (first <= last) {
    //Will divide the list/array by half to the nearest whole number
    let midpoint = Math.floor(first + last);
    //once midpoint is assigned then you should compare to the target and reassig first and last to the new bounds
    //This is the best case scenario
    if (list[midpoint] === target) {
      return midpoint;
      //Checks else if the list[midpoint] value is less than the target value
    } else if (list[midpoint] < target) {
      //Subtract one midpoint and assign it to first because its in the previous half not including current midpoint
      first = midpoint + 1;
      //Else the list[midpoint] value was greater than the target value
    } else {
      //Subtract one midpoint and assign it to last because its in the previous half not including current midpoint
      last = midpoint - 1;
    }
  }
  return null;
}

function verify(index) {
  if (index) console.log(`Target value found at index: ${index}`);
  else console.log(`Target not found in list`);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = binary_search(numbers, 12);
verify(result);
result = binary_search(numbers, 6);
verify(result);
