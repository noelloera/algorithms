function merge_sort(list) {
  /*
    -Sort the given list in ascending order 
    -Returns a new list with the sorted values
    -Divide: find the midpoint of the list and divide into sublists
    -Conquer: Sort the sublists made in the previous step
    -Combine: Merge the sorted sublists created in the previous step
     */
  if (list.length <= 1) {
    return list;
  }
  let [left_half, right_half] = split(list);
  let left = merge_sort(left_half);
  let right = merge_sort(right_half);
  return merge(left, right);
}
function split(list) {
  /*
    -Divides the provided list into two sublists at the midpoint
    -Returns two sublists - left and right
     */
  let midpoint = Math.floor(list.length / 2);
  //Slice will not include the last index but instead the one prior
  let left = list.slice(0, midpoint);
  //Will start the slice at the midpoint and go to the end of the array
  let right = list.slice(midpoint);
  //Return both of the new sub lists
  return [left, right];
}

function merge(left, right) {
  /*
    -Will take as an argument the left and right sublists, compare the values and sort them 
     */
  let merged_list = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged_list.push(left[i]);
      i += 1;
    } else {
      merged_list.push(right[j]);
      j += 1;
    }
  }
  while (i < left.length) {
    merged_list.push(left[i]);
    i += 1;
  }
  while (j < right.length) {
    merged_list.push(right[j]);
    j += 1;
  }
  return merged_list;
}

let list1 = [23, 12, 11, 3, 5, 90, 34, 19, 2];
let sorted = merge_sort(list1);
console.log(sorted);
