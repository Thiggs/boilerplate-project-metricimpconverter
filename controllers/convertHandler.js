/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var regex = /^[+-]?\d+\.?(\d+)?\/?(\d+)?\.?(\d+)?/g;
    result = input.match(regex);
    if((input.match(/\//g) || []).length>1){
      result=""
    }
    if (result){return result}
    else return "invalid number"
  };
  
  this.getUnit = function(input) {
    var result;
    var regex = /[A-Za-z]{1,3}(?=\.?$)/g;
    var acceptable =['gal','l','mi','km','lbs','kg']
    var match = false;
    result = input.match(regex)[0].toLowerCase();
    acceptable.forEach(function(ele) {
        if(result===ele){
          match=true;
        }
      });
    if(match===false){
      return "invalid unit"}

    else if (!result){ 
      return "invalid unit"}
    else return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
          input.forEach(function(ele, i) {
            if (ele===initUnit){
              result=expect[i]
            }
          });
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
