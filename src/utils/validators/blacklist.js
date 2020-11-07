/**
 * @description 檢查字串是否含有指定字串，指定字串在掛載驗証時傳入blacklist:黑名單
 * @param {String} value 需檢核的字串
 */
const validate = (value, [...blacklist]) => {
  let isValidate = true
  if (blacklist && blacklist.length > 0) {
    for (let i = 0; i < blacklist.length; i++) {
      const item = blacklist[i]
      if (item && value.indexOf(item) > -1) {
        isValidate = false
        break
      }
    }
  }
  return isValidate
}

export default validate
