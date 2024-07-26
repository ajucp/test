// console.log('hello i am node js');
const fs=require('fs');
const path=require('path');

fs.writeFileSync('abc.txt','hello i am node js');
const folderPath=path.join(__dirname,'node_programs');
const filePath=path.join(folderPath,'abc.txt');
const absolutepath=path.resolve(filePath);

console.log(`path of the folder is : ${absolutepath}`);

// new line