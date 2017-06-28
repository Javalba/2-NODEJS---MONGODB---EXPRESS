var { expect }     = require("chai");
var LetterSequence = require('../src/sequencer');
const sequence = new LetterSequence();

describe('LetterSequence', function() {
  describe('createSequence()', function() {
    it('should return the sequence with the count of repetitions in between each character', function() {
      expect(sequence.createSequence("aabbccabbca")).to.equal("2a2b2ca2bca");
    });

    it('should only have a numbered sequence for repeats greater than 1', function(){
      expect(sequence.createSequence("abcd")).to.equal("abcd");
    });
  });

  describe('decodeSequence()', function(){
    it('should return a sequence with repetition count in letters', function() {
      expect(sequence.decodeSequence("2a2b2ca2bca")).to.equal("aabbccabbca");
    });
  })
});
