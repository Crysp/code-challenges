import { test, expect } from '@jest/globals';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] >= target) {
      right = middle - 1;
    } else if (nums[middle] <= target) {
      left = middle + 1;
    }
  }

  return left;
}

test('Search Insert Position', () => {
  expect(searchInsert([1, 3, 5, 7, 9], 8)).toBe(4);
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  expect(searchInsert([2], 1)).toBe(0);
  expect(searchInsert([1], 2)).toBe(1);
  expect(searchInsert([1, 3], 0)).toBe(0);
});
