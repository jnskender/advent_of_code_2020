var fs = require('fs');

fs.readFile('allValid.txt', 'utf8', (error, data) => {

  const passports = data.toString().split("\n\n");

  const partOne = () => {
    const requiredFields = /(byr)|(iyr)|(eyr)|(hgt)|(hcl)|(ecl)|(pid)/g

    const valid = passports.reduce((acc, v) => {
      if (v.match(requiredFields).length === 7) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return valid
  }


  const partTwo = () => {
    const requirements = [
      /byr:19[2-9][0-9]|20[0-2]0/g,
      /iyr:201[0-9]|iyr:20[0-2]0/g,
      /eyr:20[0-2][0-9]|iyr:2030/g,
      /hgt:\d*(cm|in)/g,
      /hcl:#([0-9]|[a-f]){6}/g,
      /ecl:(amb|blu|brn|gry|grn|hzl|oth)/g,
      /pid:[0-9]{9}/g
    ];

    const r = /(byr:19[2-9][0-9]|20[0-2]0)|(iyr:201[0-9]|iyr:20[0-2]0)|(eyr:20[0-2][0-9]|iyr:2030)|(hgt:\d*(cm|in))|(hcl:#([0-9]|[a-f]){6})|(ecl:(amb|blu|brn|gry|grn|hzl|oth))|(pid:[0-9]{9})/
    // const valid = passports.reduce((acc, v) => {
    //   if (v.match(r).length === 8 ) {
    //     return acc + 1;
    //   }
    //   return acc;
    // }, 0);

    return passports[1].match(r);
  }

  console.log(partTwo());
})