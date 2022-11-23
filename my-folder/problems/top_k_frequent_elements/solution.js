/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hashMap = {};
  let sortedMap = [];
  let finalArray = [];

  for (const num of nums) {
    if (hashMap[num]) hashMap[num] += 1;
    else hashMap[num] = 1;
  }

  for (const key in hashMap) {
    sortedMap.push([key, hashMap[key]]);
  }

  sortedMap.sort((a, b) => {
    return b[1] - a[1];
  });

  for (let i = 0; i < k; i++) {
    finalArray.push(sortedMap[i][0]);
  }

  return finalArray;
};