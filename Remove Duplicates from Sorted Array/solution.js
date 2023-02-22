import { test, expect } from '@jest/globals';

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let left = 0;
  let right = 0;
  let count = 1;

  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      right++;
    } else {
      nums[++left] = nums[right];
      count++;
    }
  }

  return count;
}

test('Remove Duplicates from Sorted Array', () => {
  const arr1 = [1, 1, 2];
  expect(removeDuplicates(arr1)).toBe(2);
  expect(arr1).toEqual(expect.arrayContaining([1, 2]));
  const arr2 = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(removeDuplicates(arr2)).toBe(5);
  expect(arr2).toEqual(expect.arrayContaining([0, 1, 2, 3, 4]));
});
