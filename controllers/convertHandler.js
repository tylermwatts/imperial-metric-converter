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
    if (validInputs.findIndex(result) === -1){
      return 'invalid unit';
    } else {
    console.log(result)
    return result;
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
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
