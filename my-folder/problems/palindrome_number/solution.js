var isPalindrome = function (x) {
  let stringNum = x.toString();
  let leftPointer = 0;
  let rightPointer = stringNum.length - 1;

  while (leftPointer < stringNum.length / 2) {
    if (stringNum[leftPointer] !== stringNum[rightPointer]) return false;

    leftPointer++;
    rightPointer--;
  }
  return true;
};