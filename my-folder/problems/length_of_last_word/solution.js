/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.split(' ').filter(e => String(e).trim()).pop().length;
};



