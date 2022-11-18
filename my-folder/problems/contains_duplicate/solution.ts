function containsDuplicate(nums: number[]): boolean {
  let hashMap: Record<number, boolean> = {};

  for (const num of nums) {
    if (hashMap[num]) {
      return true;
    } else {
      hashMap[num] = true;
    }
  }

  return false;
}