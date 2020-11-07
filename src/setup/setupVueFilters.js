import Vue from 'vue'
import filters from '../utils/filters'
import each from 'lodash/each'

// 取出所有自定義 filters
each(filters, (filter, key) => {
  // 註冊 filters
  Vue.filter(key, filter)
})
