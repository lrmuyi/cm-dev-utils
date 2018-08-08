/*
 * @Author: wers 
 * @Date: 2018-08-07 18:54:43 
 * @Last Modified by: wers
 * @Last Modified time: 2018-08-08 12:00:17
 */

/**
 * @desc 生成指定范围随机数
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function randomNum(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

module.exports = randomNum