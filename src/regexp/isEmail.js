/**
 * @desc 判断邮箱
 * @param {string} str
 * @return {boolean}
 */

 function isEmail(str){
   return (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).test(str)
 }
 module.exports = isEmail
