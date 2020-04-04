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
        if(!result){return "invalid number"}
    else result=result[0]
    if((input.match(/\//g) || []).length>1){
      result=""
    }
    
    else if (input.match(/\//g)){
      var split = result.split("/")
      result = parseFloat(split[0])/parseFloat(split[1])
    }
    
    else parseFloat(result)
    if (result){
      return result}
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
      var input = ['gal','l','mi','km','lbs','kg'];
      var longIn = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      var longConv = ['liters','gallons','kilometers','miles','kilograms','pounds'];
    input.forEach(function(ele, i){
      if (ele===unit){
        result = [longIn[i], longConv[i]];
      }
    })
    return result;
  };
  //
  this.convert = function(initNum, initUnit) {

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var input = ['gal','l','mi','km','lbs','kg'];
    var result;
    var switcher;
   for(var i=0; i<input.length; i++){
     if(input[i]===initUnit){
       switcher =i
     }
   }

    switch (switcher){
      case 0:
        result = initNum*galToL
        break;
 
      case 1:
        result = initNum/galToL
        break;

      case 2:
        result = initNum*miToKm
        break;
      case 3:
        result = initNum/miToKm
        break;
      case 4:
        result = initNum*lbsToKg
        break;
      case 5:
        result = initNum/lbsToKg
        break;
    }
    return result;
  };
  
  this.getString = function(initNum, returnNum, unit) {
    var result=initNum+" "+unit[0]+" converts to "+returnNum+" "+unit[1]
    return result;
  };
  
}

module.exports = ConvertHandler;
