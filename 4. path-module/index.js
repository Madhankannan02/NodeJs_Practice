const path = require('path');

console.log("Directory name:", path.dirname(__filename));
//Directory name: D:\Coding Files\NodeJs\4. path-module

console.log("File name:", path.basename(__filename));
//File name: index.js

console.log("File Extension:", path.extname(__filename));
//File Extension: .js

const joinPath = path.join('/user' , 'documents', 'node', 'projects');
console.log(joinPath);
//\user\documents\node\projects

const resolvePath = path.resolve('user', 'documents', 'node', 'prjects');
console.log(resolvePath);
//D:\Coding Files\NodeJs\4. path-module\user\documents\node\prjects

const normalizepath = path.normalize('/user/documents/../node/projects');
console.log(normalizepath);
//\user\node\projects