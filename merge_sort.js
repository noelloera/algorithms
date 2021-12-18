function merge_sort(list) {
  /*
    -Sort the given list in ascending order 
    -Returns a new list with the sorted values
    -Divide: find the midpoint of the list and divide into sublists
    -Conquer: Sort the sublists made in the previous step
    -Combine: Merge the sorted sublists created in the previous step
     */
  if (list.length <= 1) return list;
  let left_half,
    right_half = split(list);
}
