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

  var codeToCompare = codeCleaner(code.split('\n')) || [],
    expectedToCompare = codeCleaner(expected.split('\n')),
    errors = [];

  for(var i = 0; i < expectedToCompare.length; i++) {
    if(expectedToCompare[i] !== codeToCompare[i]){
      errors.push(codeToCompare[i]);
    }
  }
  return errors;
};