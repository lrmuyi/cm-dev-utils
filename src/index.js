/**
 * @desc webpack打包入口文件
 * @example 自动引入子目录下所有js文件
 */

const methodsExport = {}
const r = require.context('./',true,/^\.\/.+\/.+\.js$/)
r.keys().forEach(key => {
  let attr = key.substring(key.lastIndexOf('/')+1,key.lastIndexOf('.'))
  methodsExport[attr] = r[key]
})
module.exports = methodsExport