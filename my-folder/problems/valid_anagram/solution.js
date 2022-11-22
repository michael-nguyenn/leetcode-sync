/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let hashMap = {};
  let longerString, shorterString;

  if (s.length >= t.length) {
    longerString = s;
    shorterString = t;
  } else {
    longerString = t;
    shorterString = s;
  }

  for (const letter of longerString) {
    if (hashMap[letter]) {
      hashMap[letter] += 1;
    } else {
      hashMap[letter] = 1;
    }
  }

  for (const letter of shorterString) {
    if (hashMap[letter] > 1) {
      hashMap[letter] -= 1;
    } else if (hashMap[letter] === 1) {
      delete hashMap[letter];
    }
  }

  if (Object.keys(hashMap).length === 0) {
    return true;
  } else {
    return false;
  }
};
