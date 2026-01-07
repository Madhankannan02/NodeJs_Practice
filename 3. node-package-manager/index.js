const lodash = require('lodash');

const names = ['madhan', 'kannan'];

const capti = lodash.map(names, lodash.capitalize);

console.log(capti);