/*
 * @Author: ruishan wang 
 * @Date: 2018-08-07 17:50:02 
 * @Last Modified by: wers
 * @Last Modified time: 2018-08-08 12:00:03
 */

/**
 *
 * @desc 根据name读取cookie
 * @param {string} name
 * @return {string}
 */

function getCookie(name) {
  var arr = document.cookie.replace(/\s/g, "").split(";");
  for (let i = 0; i < arr.length; i++) {
    var tempArr = arr[i].split("=");
    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1]);
    }
    return "";
  }
}

module.exports = getCookie
