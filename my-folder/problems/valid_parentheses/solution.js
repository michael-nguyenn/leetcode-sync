/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  let poppedParen;
  const openingParen = ['(', '{', '['];
  const closingParen = [')', '}', ']'];

  const match = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  if (s.length % 2 !== 0) return false;

  for (const char of s) {
    if (openingParen.includes(char)) stack.push(char);

    if (closingParen.includes(char)) {
      poppedParen = stack.pop();

      if (match[poppedParen] !== char) return false;
    }
  }

  return stack.length !== 0 ? false : true;
};