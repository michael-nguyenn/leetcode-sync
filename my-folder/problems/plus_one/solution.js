const plusOne = digits => {
  let index = digits.length - 1;
  let val = 0;
  let carry = 1;

  while (index >= 0 && carry) {
    val = digits[index] + carry;
    carry = Math.floor(val / 10);
    digits[index] = val % 10;
    index--;
  }

  if (carry) digits.unshift(carry);
  return digits;
};

