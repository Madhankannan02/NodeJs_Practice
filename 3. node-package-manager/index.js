const lodash = require('lodash');
//imported other module

const names = ['madhan', 'kannan'];

const capti = lodash.map(names, lodash.capitalize);

console.log(capti);
