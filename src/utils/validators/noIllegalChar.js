/**
 * @description 不可輸入不合法字元
 * @param {String} value 需檢核的字串
 */
const validate = (value) => {
  const alphanumeric = /^[0-9A-Z]*$/i
  if (Array.isArray(value)) {
    return value.every(val => alphanumeric.test(val))
  }
  return alphanumeric.test(value)
}

export default validate
