/**
 * @description 將時間轉換為 MM/YYYY 格式
 * @param {Object} value 需進行 filter 的資料
 */
const filter = (value) => {
  if (value) {
    return moment(String(value)).format('MM/YYYY')
  }
}

export default filter
