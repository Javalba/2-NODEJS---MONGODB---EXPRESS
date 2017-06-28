var { expect } = require('chai');
var ArrayFunctions = require('../src/array-functions.js');
const arrayFunctionsObject = new ArrayFunctions();

describe('ArrayFunctions', function() {
  describe('printSpecial()', function() {
    it('should return each element with " --- " in between', function() {
      var numbers = [12, 33, 144, 122];
      expect(arrayFunctionsObject.printSpecial(numbers)).to.equal("12 --- 33 --- 144 --- 122");
    });
  });

  describe('doubleArray()', function(){
    it('should double the value of all numbers in an array', function(){
      var numbers = [10, 20, 35, 12];
      expect(arrayFunctionsObject.doubleArray(numbers)).to.deep.equal([20, 40, 70, 24])
    });
  });

  describe('superPower()', function(){
    it('should return each element to the power of it\'s index', function(){
      var numbers = [8,7,3,2,1,5]
      expect(arrayFunctionsObject.superPower(numbers)).to.equal(512378)
    });
  });
});
