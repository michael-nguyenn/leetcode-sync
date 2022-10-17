/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
const setPosition = () => {
  let x = 0;
  let y = 0;

  return function (interaction) {
      interaction.split('').forEach((interaction) => {
          if (interaction === 'D') {
        y--
      } else if (interaction === 'U') {
        y++
      } else if (interaction === 'L') {
        x++
      } else if (interaction === 'R') {
        x--
      } else {
        return console.log('Please put a valid input');
      }
      
      })

     return x === 0 && y === 0
      
  }
}


const robot = setPosition()
return robot(moves)
};




