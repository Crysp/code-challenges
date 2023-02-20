import { test, expect } from '@jest/globals';

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
function divisorSubstrings(num, k) {
  const nums = String(num).split('').map(Number);
  let window = 0;
  let beauty = 0;

  for (let i = 0; i < k; i++) {
    window *= 10;
    window += nums[i];
  }

  if (num % window === 0) {
    beauty++;
  }

  for (let i = k; i < nums.length; i++) {
    window -= nums[i - k] * 10 ** (k - 1);
    window *= 10;
    window += nums[i];

    if (num % window === 0) {
      beauty++;
    }
  }

  return beauty;
}

test('Find the K-Beauty of a Number', () => {
  expect(divisorSubstrings(240, 2)).toBe(2);
  expect(divisorSubstrings(430043, 2)).toBe(2);
  expect(divisorSubstrings(30003, 3)).toBe(1);
  expect(divisorSubstrings(9090, 3)).toBe(2);
});
