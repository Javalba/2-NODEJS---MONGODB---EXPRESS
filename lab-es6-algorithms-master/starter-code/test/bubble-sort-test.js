var { expect }  = require('chai');
var bubbleSort  = require('../src/bubble-sort');

describe('bubbleSort()', function() {
  it('should an array of numbers sorted from least to greatest', function() {
    var array = [12, 15, 0, 3, 6, 5, 10, 7, 9, 3];
    expect(bubbleSort(array)).to.deep.equal([ 0, 3, 3, 5, 6, 7, 9, 10, 12, 15 ]);
  });
});
