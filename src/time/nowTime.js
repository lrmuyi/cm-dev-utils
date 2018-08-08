/**
 * @desc 获取当前时间  1 12:00:00
 *                   2 2018-08-08
 *                   3 2018-08-08 12:00:00
 * @param {number} 1|2|3
 * @return {string}
 */
function nowTime(number) {
  const time = new Date();
  const t = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  const d =
    time.getFullYear() +
    "-" +
    ("0" + time.getMonth()) +
    "-" +
    ("0" + time.getDay());
  if (number == 1) return t;
  if (number == 2) return d;
  if (number == 3) return d + " " + t;
}
module.exports = nowTime;
