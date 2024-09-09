//find a pair of numbers that add up to a target sum in a sorted or unsorted array.
//input [2,3,5,6,4]  target=11
//output [5,6]

function numberPairWithTargetSum(arr, target) {
  //1 sort the array
  arr.sort((a, b) => a - b);

  //2 initialize pointers
  let left = 0;
  let right = arr.length - 1;

  //3. iterate and check
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}

//use case
const input = [2, 3, 5, 6, 4];
const target = 11;
console.warn(numberPairWithTargetSum(input, target));
