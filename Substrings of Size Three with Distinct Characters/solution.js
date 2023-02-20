import { test, expect } from '@jest/globals';

/**
 * @param {string} s
 * @return {number}
 */
function countGoodSubstrings(s) {
  const k = 3;
  const characters = new Map();
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (characters.has(s[i])) {
      characters.set(s[i], characters.get(s[i]) + 1);
    } else {
      characters.set(s[i], 1);
    }
  }

  if (characters.size === k) {
    count++;
  }

  for (let i = k; i < s.length; i++) {
    if (characters.get(s[i - k]) === 1) {
      characters.delete(s[i - k]);
    } else {
      characters.set(s[i - k], characters.get(s[i - k]) - 1);
    }

    if (characters.has(s[i])) {
      characters.set(s[i], characters.get(s[i]) + 1);
    } else {
      characters.set(s[i], 1);
    }

    if (characters.size === k) {
      count++;
    }
  }

  return count;
}

test('Substrings of Size Three with Distinct Characters', () => {
  expect(countGoodSubstrings('xyzzaz')).toBe(1);
  expect(countGoodSubstrings('aababcabc')).toBe(4);
});
