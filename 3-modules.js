// modules: encapsulated code
// import modules
const { student1, student2 } = require('./4-names');
const { greetUser } = require('./5-utils');
const { person } = require('./6-alt-flavour')


greetUser('lesedi');
greetUser(student1);
greetUser(student2);
