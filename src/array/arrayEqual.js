/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @return {Boolean}
 */
// 数组是否相等
function arrayEqual(arr1,arr2){
  if(arr1.length !== arr2.length) return false
  if (arr1 === arr2) return true
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

module.exports = arrayEqual