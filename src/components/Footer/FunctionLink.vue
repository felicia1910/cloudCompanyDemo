<template>
  <router-link
    class="footer_text_box"
    :to="{name: routerName}"
  >
    <p class="footer_text">{{funcName}}<span v-if="last!==true">/</span></p>

  </router-link>
</template>

<script>
export default {
  name: 'FunctionLink',
  props: {
    funcName: {
      type: String,
      required: true
    },
    routerName: {
      type: String,
      default: ''
    },
    last: {}
  },
  data () {
    return {
      isActive: false
    }
  },
  watch: {
    '$route.name': function (to, from) {
      if (from !== this.$route.name) {
        const { menuActiveWithName } = this.$route.meta
        let chkRouterName = ''
        if (menuActiveWithName) {
          chkRouterName = menuActiveWithName
        } else {
          chkRouterName = to
        }
        this.isActive = !!(chkRouterName && chkRouterName === this.routerName)
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.active {
  background-color: #d71a21;
}
</style>
