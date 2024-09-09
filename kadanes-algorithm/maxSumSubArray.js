// Finding the maximum sum sub-array of agiven array.
// Input:
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output:
// [4, -1, 2, 1]

function maxSubArray(nums) {
  let maxSum = nums[0]; // Initialize maxSum to the first element
  let currentSum = nums[0]; // Initialize currentSum to the first element
  let start = 0,
    end = 0,
    tempStart = 0; // Track the indices for the subarray

  for (let i = 1; i < nums.length; i++) {
    // Update the current sum to the maximum of the current element or the current sum + element
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      tempStart = i; // Update the start of the subarray
    } else {
      currentSum += nums[i];
    }

    // Update the maximum sum if the current sum is larger
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart; // Update the starting index
      end = i; // Update the ending index
    }
  }

  // Return the subarray with the maximum sum
  return nums.slice(start, end + 1);
}

// Example usage:
const inputArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = maxSubArray(inputArray);
console.log(result);
