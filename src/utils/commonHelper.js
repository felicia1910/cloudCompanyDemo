/**
 * @description 產生 unique key 字串，可能用來產生唯一的 id 。
 */
const genGuid = () => {
  const s4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4())
}

/**
 * @description 將傳入數值依指定小數位數進行4捨5入。
 * @param {Number} val 需要4捨5入的值
 * @param {Number} precision 小數位數長度
 */
const roundDecimal = (val, precision) => {
  return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0))
}

export default {
  genGuid,
  roundDecimal
}
