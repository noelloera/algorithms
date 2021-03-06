function recursive_binary_search(list, target) {
  if (list.length === 0) {
    return false;
  } else {
    let midpoint = Math.floor(list.length / 2);
    if (list[midpoint] === target) {
      return true;
    } else {
      //This is the part of the function which will call itself until a value is returned making it a recursion
      if (list[midpoint] < target) {
        //The stopping condition is often called the base case
        return recursive_binary_search(list.slice(midpoint + 1), target);
      } else {
        return recursive_binary_search(list.slice(0, midpoint - 1), target);
      }
    }
  }
}

function verify(result) {
  console.log(`Target found: ${result}`);
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = recursive_binary_search(numbers, 12);
verify(result);
result = recursive_binary_search(numbers, 6);
verify(result);
