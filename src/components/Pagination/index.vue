<template lang="pug">
  div.pagination_box
    ul.pagination
      li( :class="['page-item', !isShowPrevious && 'disabled']" )
        div.page-link.border-0( @click="goPrevious" :disabled="cantNotClick")
          div.btnForText_pug
            i.fas.fa-angle-left
            div &nbsp;上一頁
      li.page-item-css( v-for="(value, key) in displayPages" :key="key" :disabled="cantNotClick" :class="['', cantNotClick && 'page-item-css-click']")
        a( :class="['border-0 page-link', value===pageIndex && 'active',cantNotClick && 'click-page']"
          href="" tabindex="-1" @click.prevent="goTo(value)" :disabled="cantNotClick") {{value + 1}}
          span.sr-only( v-if="value===pageIndex" :disabled="cantNotClick")(current)
      li( :class="['page-item', !isShowNext && 'disabled']" )
        div.page-link.border-0( @click="goNext" :disabled="cantNotClick" )
          div.btnForText_pug
            div 下一頁&nbsp;
            i.fas.fa-angle-right
</template>

<script>
import head from 'lodash/head'
import last from 'lodash/last'
import isNumber from 'lodash/isNumber'

export default {
  name: 'Pagination',
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    pageIndex: {
      type: Number,
      required: true
    },
    cantNotClick: {}
  },
  data () {
    return {
      pageLimit: 10,
      displayPages: []
    }
  },
  watch: {
    totalPage: function () {
      this.initDisplayPages()
    }
  },
  computed: {
    isShowPrevious: function () {
      return this.pageIndex > 0
    },
    isShowNext: function () {
      return this.totalPage > 0 && this.pageIndex < this.totalPage - 1
    }
  },
  methods: {
    goPrevious: function () {
      if (this.isShowPrevious && !this.cantNotClick) {
        this.updateDisplayPages(this.pageIndex - 1, this.pageIndex)
        this.$emit('change', this.pageIndex - 1)
      }
    },
    goNext: function () {
      if (this.isShowNext && !this.cantNotClick) {
        this.updateDisplayPages(this.pageIndex + 1, this.pageIndex)
        this.$emit('change', this.pageIndex + 1)
      }
    },
    goTo: function (index) {
      if (index !== this.pageIndex && !this.cantNotClick) {
        this.$emit('change', index)
      }
    },
    initDisplayPages: function () {
      const pages = []
      let pageDisplayMax = 0
      if (this.totalPage > this.pageLimit) {
        pageDisplayMax = this.pageLimit
      } else {
        pageDisplayMax = this.totalPage
      }
      let i = this.pageIndex
      while (i < pageDisplayMax) {
        pages.push(i)
        i++
      }
      this.displayPages = pages
    },
    updateDisplayPages: function (to, from) {
      const pages = []
      if (isNumber(to) && isNumber(from) && this.displayPages.length > 0) {
        const firstPage = head(this.displayPages)
        const lastPage = last(this.displayPages)
        if (to > from) {
          // 下一頁
          if (to > lastPage) {
            // 已超出目前顯示的頁數
            let i = firstPage + 1
            let pageDisplayMax = 0
            if (i + this.pageLimit < this.totalPage) {
              pageDisplayMax = i + this.pageLimit
            } else {
              pageDisplayMax = this.totalPage
            }
            while (i < pageDisplayMax) {
              pages.push(i)
              i++
            }
            this.displayPages = pages
          }
        } else if (from > to) {
          // 上一頁
          if (to < firstPage) {
            // 已超出目前顯示的頁數
            let i = firstPage - 1
            let pageDisplayMax = 0
            if (i + this.pageLimit < this.totalPage) {
              pageDisplayMax = i + this.pageLimit
            } else {
              pageDisplayMax = this.totalPage
            }
            while (i < pageDisplayMax) {
              pages.push(i)
              i++
            }
            this.displayPages = pages
          }
        }
      }
    }
  },
  mounted () {
    this.initDisplayPages()
  }
}
</script>

<style lang="scss" scoped>
.active {
  color: #fff;
  background-color: #999;
  outline: 0;
}
</style>
