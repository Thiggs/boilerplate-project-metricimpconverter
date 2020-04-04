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
    
    function parseInput(input){
      initNum = convertHandler.getNum(input);
      initUnit = convertHandler.getUnit(input);
    }
    
    function convertInput(initNum, initUnit){
      unit = convertHandler.spellOutUnit(initUnit);
      returnNum = convertHandler.convert(initNum, initUnit);
      returnUnit = convertHandler.getReturnUnit(initUnit);
    }
    
    function stringMaker(initNum, initUnit, returnNum, returnUnit){
      toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    }

    parseInput(input).then(convertInput(initNum, initUnit).then(stringMaker(initNum, initUnit, returnNum, returnUnit)))
    
      res.json(toString);
});
};
