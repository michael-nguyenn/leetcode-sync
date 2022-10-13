/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    
    return x === Number([...x.toString().split('')].reverse().join(''));
   
}


// take x -> turn into string -> turn into array -> reverse it -> turn back into int
//compare it to original int