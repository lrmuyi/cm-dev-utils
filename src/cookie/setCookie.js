/*
 * @Author: wers 
 * @Date: 2018-08-07 18:45:51 
 * @Last Modified by: wers
 * @Last Modified time: 2018-08-08 12:00:43
 */

/**
 * @desc 设置cookie
 * @param {string} name
 * @param {string} value
 * @param {number} days
 */

function setCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + "=" + value + ";expires=" + date;
}

module.exports = setCookie