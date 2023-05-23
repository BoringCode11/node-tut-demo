// npm - global command, comes with node
// npm --version

// local dependency - use it only in a particular project
// npm install <packageName>

// global dependency - use it in any project
// mpm install -g <packageName>
// sudo install -g <packageName> (macOS)

// package.json - manifest file (stores important info abou the project)
// manual approach
// npm init (step by step)
// npm init -y (everything default)


const _ = require("lodash");
console.log(_.VERSION);
