<template>
  <!--NAVIGATION START-->
  <nav class="navBg">
    <div class="nav_img" @click="goHome"></div>
    <div :class="['nav_btn_box',nav&&'nav_btn_box_fixed']" @click="opennavHandler()">
      <div class="nav_line"></div>
      <div class="nav_line"></div>
      <div class="nav_line"></div>
    </div>
    <!--NAV>MENU>MIDDLE BLOCK-->
    <the-menu :class-name="'nav_box'"/>
    <transition name="fade">
    <the-menu :class-name="'nav_box_rwd'" v-if="nav"/>
    </transition>
  </nav>
  <!--NAV>MENU>BOTTOM BLOCK-->
</template>

<script>
import FunctionLink from './FunctionLink.vue'
import TheMenu from './Menu.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import store from '@/store'
import { vueWindowSizeMixin } from 'vue-window-size'

export default {
  name: 'SideMenu',
  components: {
    FunctionLink,
    TheMenu
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('Nav', {
      'serOpen': 'getopenSer',
      'nav': 'getopenNav'
    })
  },
  mounted () {

  },
  watch: {
    windowWidth (val) {
      if (val > 1150 && this.nav) {
        this.navHandler(true)
      }
    }
  },
  methods: {
    ...mapActions('Nav', {
      'ser': 'getSer',
      'navHandler': 'getNav'
    }),
    opennavHandler () {
      this.navHandler(this.nav)
    },
    openSerHandler () {
      this.serOpen = !(this.serOpen)
    },
    goHome () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: .8s;
  transform: translate(0,0);
  height: 100vh;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(0px,-100vh);
  height: 0;
  overflow: hidden;
}
</style>
