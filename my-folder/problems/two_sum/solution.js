/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
        
var twoSum = function(nums, target) {
   let mapOfNumbers = {};
   let indexes = [];
   
   for(let i = 0; i < nums.length; i++) {
       mapOfNumbers[nums[i]] = i;
   }
   
   for (let j=0; j < nums.length; j++) {
        let complement = target - nums[j]
        
        
    if ( mapOfNumbers.hasOwnProperty(complement) &&      
        mapOfNumbers[complement] !== j) {
             return [mapOfNumbers[complement], j]
        }
     };
     
     return null;
 
};
