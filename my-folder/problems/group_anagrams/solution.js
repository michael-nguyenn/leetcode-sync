var groupAnagrams = function (strs) {
  let objectIndex = {};

  strs.forEach(word => {
    let key = word.split('').sort().join('');

    if (objectIndex[key]) {
      objectIndex[key].push(word);
    } else {
      objectIndex[key] = [word];
    }
  });

  return Object.values(objectIndex);
};