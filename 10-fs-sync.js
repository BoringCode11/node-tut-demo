// fs module
const fs = require('fs');
const { readFileSync, writeFileSync } = fs;


const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/first.txt', 'utf-8');

console.log('start');

console.log(first);
console.log(second);

writeFileSync(
  './content/third.txt',
  `Here is the result:\n${first}\n${second}`,
  { flag: 'a' }
);

console.log('start next file');