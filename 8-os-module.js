// https://nodejs.org/dist/latest-v18.x/docs/api/os.html
const os = require('os');

const user = os.userInfo(); // current user
console.log(user);

const uptime = os.uptime(); // system uptime in secods
console.log(uptime);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
}

console.log(currentOS);