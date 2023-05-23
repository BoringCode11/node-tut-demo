const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const first = data;

  readFile('./content/second.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = data;

    writeFile(
      './content/result-async.txt',
      `Result is: ${first}, ${second}`,
      (err, data) => {
        if (err) {
          return;
        }
        console.log(`file created`);
      });
  })
});

console.log("starting next file");