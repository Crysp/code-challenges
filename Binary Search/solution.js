import { test, expect } from '@jest/globals';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

test('Binary Search', () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  expect(search([5], 5)).toBe(0);
});
