import { test, expect } from '@jest/globals';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
  let max;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  max = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    max = Math.max(max, windowSum);
  }

  return max / k;
}

test('Maximum Average Subarray I', () => {
  expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  expect(findMaxAverage([5], 1)).toBe(5);
});
