var fs = require('fs');

fs.readFile('puzzle.txt', 'utf8', (error, data) => {

  if (error) throw error;
  const splitted = data.toString().split("\n"); //grab individual lines
  let iterations = [];
  const rowBound = splitted[0].length; //so we know when we need to wrap back to beginning
  const moves = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

  moves.forEach((move) => {
    let [right, down] = move
    let treesEncountered = 0;
    let position = 0; // track current position in a row
    for (let i = 0; i < splitted.length; i+=down) {
      //if we don't go over the bound just move right 3 from the last position. If we're over wrap back aroudn
      position + right < rowBound ? position += right : position = ((position + right) - rowBound);
      if (splitted[i + down]) {
        treesEncountered += splitted[i + down].charAt(position) === "#" ? 1 : 0;
      }
    }
    console.log(`trees: ${treesEncountered}`)
    iterations.push(treesEncountered)
  });

  console.log(iterations.reduce((acc, val) => acc * val));
  // console.log(`Total Trees Encountered: ${treesEncountered}`);
})
