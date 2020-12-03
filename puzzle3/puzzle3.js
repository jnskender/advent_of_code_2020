var fs = require('fs');

fs.readFile('puzzle3.txt', 'utf8', (error, data) => {
  if (error) throw error;
  const splitted = data.toString().split("\n");
  let treesEncountered = 0;
  const rowBound = splitted[0].length;

  let position = 0;
  for (let i = 0; i < splitted.length; i++) {
    position + 3 < rowBound ? position += 3 : position = ((position + 3) - rowBound);

    if (i != splitted.length - 1) {
      treesEncountered += splitted[i + 1].charAt(position) === "#" ? 1 : 0;
    }

  }
  console.log(`Total Trees Encountered: ${treesEncountered}`);
})