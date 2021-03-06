/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input ='3.24Mi'
      assert.equal(convertHandler.getNum(input), 3.24)
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '3/4xylophone'
      assert.approximately(convertHandler.getNum(input), .75,.001)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '3.4/5.72KM'
      assert.approximately(convertHandler.getNum(input), .5944,0.001)
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = "5.3/7/2L"
      assert.equal(convertHandler.getNum(input), "invalid number")
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = "misdaadfds"
      assert.equal(convertHandler.getNum(input), "invalid number")
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      var matched = false
      input.forEach(function(ele) {
        if (convertHandler.getUnit(ele)===ele){
          matched=true
        }
        assert.equal(matched, true)
      }); 
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = ['shoe', 'blah'];
      var matched = false
      input.forEach(function(ele) {
        if (convertHandler.getUnit(ele)==="invalid unit"){
          matched=true
        }
        assert.equal(matched, true)
      }); 
      done();
    });  
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg']
      var long = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      var longC = ['liters','gallons','kilometers','miles','kilograms','pounds'];
      input.forEach(function(ele, i) {
        assert.deepEqual(convertHandler.spellOutUnit(ele), [long[i], longC[i]]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var expected = 5;
      var input = [18.9271, 'l'];
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      var expected = 1.60934;
      var input = [1, 'mi'];
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });  
    
    test('Km to Mi', function(done) {
      var input = [1.60934, 'km'];
      var expected = 1;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);  
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var expected = 0.453592;
      var input = [1, 'lbs'];
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);  
      done();
    });

    test('Kg to Lbs', function(done) {
          var expected = 1;
      var input = [0.453592, 'kg'];
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);    
      done();
    });
    
  });

});