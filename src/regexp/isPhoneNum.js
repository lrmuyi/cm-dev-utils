/**
 * @desc 判断手机号
 * @param {string|number} value
 * @return {boolean}
 */
function isPhoneNum(value){
  return (/(\+?0?86\-?)?^1[3-9]\d{9}$/).test(value)
}

module.exports = isPhoneNum