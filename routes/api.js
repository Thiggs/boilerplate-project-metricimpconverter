/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum;
      var initUnit;
      var unit;
      var returnNum;
      var returnUnit;
      var toString;
    
    let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});
    
    function parseInput(input){
      initNum = convertHandler.getNum(input)
      initUnit = convertHandler.getUnit(input)
      promise.then(convertInput(initNum, initUnit));
    }
    
    function convertInput(initNum, initUnit){
      if (initNum==="invalid number"&&initUnit==="invalid unit"){
        res.send("invalid number and unit")
      }
      else if(initNum==="invalid number"){res.send(initNum)}
      else if(initUnit==="invalid unit"){res.send(initUnit)} 
      else {
      returnNum = convertHandler.convert(initNum, initUnit);
      returnUnit = convertHandler.getReturnUnit(initUnit);
      unit = convertHandler.spellOutUnit(initUnit)
      promise.then(stringMaker(initNum, returnNum, unit, initUnit, returnUnit))
    }}
    
    function stringMaker(initNum, returnNum, unit, initUnit, returnUnit){
      toString = convertHandler.getString(initNum, returnNum, unit)
      res.json({"initNum":parseFloat(initNum),"initUnit":initUnit,"returnNum":parseFloat(returnNum),"returnUnit":returnUnit,"string":toString})
    }
    parseInput(input);
});
};
