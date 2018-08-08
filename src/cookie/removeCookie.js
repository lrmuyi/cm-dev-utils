/*
 * @Author: wers 
 * @Date: 2018-08-07 18:42:41 
 * @Last Modified by: wers
 * @Last Modified time: 2018-08-08 12:00:30
 */
var setCookie = require("./setCookie");
/**
 * @desc 根据name删除cookie
 * @param {string} name
 */

function removeCookie(name) {
  // 设置已过期，系统会立刻删除cookie
  setCookie(name, "1", -1);
}

module.exports = removeCookie