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
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      if (initNum === 'invalid number'){
        if (initUnit === 'invalid input unit'){
          return res.json({initNum, initUnit, returnNum: null, returnUnit: null, string: 'invalid number and input unit'})
        } else {
          return res.json({initNum, initUnit, returnNum: null, returnUnit: null, string: 'invalid number'})
        }
      } else if (initUnit === 'invalid input unit'){
        return res.json({initNum, initUnit, returnNum: null, returnUnit: null, string: 'invalid input unit'})
      } else {
        var returnNum = convertHandler.convert(initNum, initUnit);
        var returnUnit = convertHandler.getReturnUnit(initUnit);
        var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        return res.json({initNum, initUnit, returnNum, returnUnit, string: toString})
      }
    });
    
};
