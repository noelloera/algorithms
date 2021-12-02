//The function will return the index in which the target value if found, else return none
function linear_search(list, target) {
  for (let i = 0; i < list.length; i++) {
    //Constant time operation, with a strict equality comparison
    if (list[i] === target) {
      return i;
    }
  }
  //After it completes cycling through each value if not found then return string none
  return null;
}

function verify(index) {
  if (index) console.log(`target found at index ${index}`);
  else console.log("target not found");
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = linear_search(numbers, 12);
verify(result);

result = linear_search(numbers, 6);
verify(result);
