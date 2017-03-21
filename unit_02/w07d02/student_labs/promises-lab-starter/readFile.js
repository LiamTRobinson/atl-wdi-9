'use strict';

const fs = require('fs');

let inFile = process.argv[2];



var filePromise = new Promise(function(resolve, reject) {
  fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
      
      if (error) {
      reject("error", error);
      }
      resolve(content);
  });
});
  // 'Billy\nJames\nNick\n' --> ['Billy', 'James', 'Nick']

filePromise
  .then(function(fromResolve) {
    var array = fromResolve.split("\n");
    return array;
  })
  .then(function(array){
    array.pop();
    return array;
  })
  .then(function(array){
    array.forEach(function(line) {
      console.log('Hello, ' + line + '!');
    });
  })
  .catch(function(fromReject) {
    console.log(fromReject);
  });



  // let lines = content.split('\n');

  // // clean up the array by removing the empty line
  // lines.pop();

  // lines.forEach



