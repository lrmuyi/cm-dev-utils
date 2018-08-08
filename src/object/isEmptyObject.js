/*
 * @Author: wers 
 * @Date: 2018-08-07 18:51:13 
 * @Last Modified by: wers
 * @Last Modified time: 2018-08-08 11:19:38
 */

/**
 * @desc 判断‘object’是否为空
 * @param {object} obj
 * @return {boolean}
 *
 */

function isEmptyObject(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
  return !Object.keys(obj).length;
}
console.log(isEmptyObject({wer:'wer'}))