/**
 * @desc 生份证号验证
 * @param {string|number} value
 */

 function isIdCardNum(value){
   return (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\dX|x)$)/).test(value)
 }
 module.exports = isIdCardNum