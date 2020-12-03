var fs = require('fs');

fs.readFile('puzzle.txt', 'utf8', (error, data) => {
  if (error) throw error;
  const splitted = data.toString().split("\n"); //grab individual lines
  let treesEncountered = 0;
  const rowBound = splitted[0].length; //so we know when we need to wrap back to beginning

  let position = 0; // track current position in a row
  for (let i = 0; i < splitted.length; i++) {
    //if we don't go over the bound just move right 3 from the last position. If we're over wrap back aroudn
    position + 3 < rowBound ? position += 3 : position = ((position + 3) - rowBound);
    if (i != splitted.length - 1) {
      treesEncountered += splitted[i + 1].charAt(position) === "#" ? 1 : 0;
    }
  }
  console.log(`Total Trees Encountered: ${treesEncountered}`);
})