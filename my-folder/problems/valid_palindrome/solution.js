var isPalindrome = function (s) {
  const string = s.toLowerCase().replace(/\W|_/g, '');
  let leftPointer = 0;
  let rightPointer = string.length - 1;

  for (let i = 0; i <= string.length / 2; i++) {
    if (string[leftPointer] !== string[rightPointer]) return false;
    leftPointer++;
    rightPointer--;
  }

  return true;
};