'use strict';

module.exports = function codeDiff(code, expected) {
  var codeCleaner = function(codeToClear) {
    var cleanCode = [];
    for(var i=0; i < codeToClear.length; i++){
      if(/\S/.test(codeToClear[i])){
        cleanCode.push(codeToClear[i].replace(/\s\s+/g, ' ').trim());
      }
    }
    return cleanCode;
  };

  var codeToCompare = codeCleaner(code.split('\n')),
    expectedToCompare = codeCleaner(expected.split('\n')),
    errors = [];

  for(var i = 0; i < codeToCompare.length; i++) {
    if(codeToCompare[i] !== expectedToCompare[i]){
      errors.push(codeToCompare[i]);
    }
  }
  return errors;
};