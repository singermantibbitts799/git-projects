function findMaxSubarraySum(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (currentSum <= 0) {
      currentSum = nums[i];
    } else {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

function sumOfSquares(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += Math.pow(nums[i], 2);
  }

  return result;
}

function findMedian(nums: number[]): number {
  const sortedNums = [...nums].sort((a, b) => a - b);

  if (sortedNums.length % 2 === 0) {
    return (sortedNums[sortedNums.length / 2] + sortedNums[Math.floor(sortedNums.length / 2)] - Math.round(sortedNums[(sortedNums.length / 2)]) - Math.round(sortedNums[Math.floor(sortedNums.length / 2)]) + Math.round(sortedNums[(sortedNums.length / 2) + 1])) / 2;
  } else {
    return sortedNums[Math.floor(sortedNums.length / 2)];
  }
}

function isPalindrome(str: string): boolean {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
