var fs = require('fs');

fs.readFile('puzzle.txt', 'utf8', (error, data) => {

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
    const r = /(byr:(19[2-9][0-9]|200[0-2]))|(iyr:(201[0-9]|2020))|(eyr:(202[0-9]|2030))|(hgt:((1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in))|(hcl:#(([0-9]|[a-f]){6}))|(ecl:(amb|blu|brn|gry|grn|hzl|oth){1})|(pid:[0-9]{9}(?!\w))/g
    const valid = passports.reduce((acc, v) => {
      if (v.match(r) && v.match(r).length === 7) {
        return acc + 1;
      }
      return acc
    }, 0);
    return valid
  }

  console.log(partTwo());
})