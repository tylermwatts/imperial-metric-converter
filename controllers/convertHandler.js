/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    if (input.includes('/')){
      var numArr = input.split('/')
      if (numArr.length > 2) {
        return 'invalid number'
      }
      var result = (parseFloat(numArr[0]) / parseFloat(numArr[1]))
    } else if (input.match(/^\d/) === null){
      var result = 1;
    } else {
      var result = input.split(/[a-z]/gi)[0]
    }
    console.log(result)
    return result;
  };
  
  this.getUnit = function(input) {
    var validInputs = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var result = input.split(/([a-z])/gi).filter(d=>d.match(/[a-z]/gi)).join('');
    if (validInputs.includes(result)){
      console.log(result);
      return result.toLowerCase();
    }
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['l','gal','km','mi','kg','lbs'];
    var result = expect[input.indexOf(initUnit)]
    return result;
  };

  this.spellOutUnit = function(unit) {
    var input = ['gal','l','mi','km','lbs','kg'];
    var expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms']
    var result = expect[input.indexOf(unit)];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var input = ['gal','l','mi','km','lbs','kg'];    
    var result = 0;
    switch(initUnit){
      case input[0]:
        result = initNum * galToL;
        break;
      case input[1]:
        result = initNum / galToL;
        break;
      case input[2]:
        result = initNum * miToKm;
        break;
      case input[3]:
        result = initNum / miToKm;
        break;
      case input[4]:
        result = initNum * lbsToKg;
        break;
      case input[5]:
        result = initNum / lbsToKg;
        break;
      default:
        result = 1;
        break;
    }
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
