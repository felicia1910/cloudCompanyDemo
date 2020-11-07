<template>
  <div
    :class="['nav_text_box', isActive && 'nav_text_box_active',
    funcName==='SERVICES'&&'nav_text_box_is_service',
    dark &&'nav_text_box_is_service_dark',
    funcName==='SERVICES'&& serOpen &&'nav_text_box_is_service_top_dark' ]"
    @click.stop="goRoute(routerName)"
  >
    <p class="nav_text">{{funcName}}<span v-if="funcName==='SERVICES'" class="nav_small_click" @click.stop="runser(funcName,serOpen)"><i class="fas fa-ellipsis-v"></i></span></p>
    <transition name="fades">
    <div class="service_nav_box" v-if="funcName==='SERVICES'">
      <div v-for="(value,key) in serviceData" :key="key" class="service_nav_text" @click.stop="goRoute(value.to)">
        <p class="service_nav_text">{{value.name}}</p>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import store from '@/store'

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
    dark: {}
  },
  data () {
    return {
      isActive: false,
      testData: '',
      serviceData: [
        {
          to: 'eduSmart',
          name: 'EduSmart'
        },
        {
          to: 'loyaltyPlus',
          name: 'LoyaltyPlus'
        },
        {
          to: 'merchantPlus',
          name: 'MerchantPlus'
        },
        {
          to: '',
          name: 'Salesplus for SMB'
        }
      ],
      nowWhere: '',
      fromWhere: ''
    }
  },
  computed: {
    ...mapGetters('Nav', {
      'serOpen': 'getopenSer',
      'navNow': 'getopenNav'
    })
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
    ...mapActions('Nav', {
      'ser': 'getSer',
      'nav': 'getNav'
    }),
    runser (val, i) {
      if (val && val === 'SERVICES' && window.innerWidth <= 1150) {
        this.ser(i)
      }
    },
    runnav () {
      this.nav(this.navNow)
    },
    goRoute (name) {
      this.$router.push({ name: name })
      if (window.innerWidth <= 1150) {
        this.runnav()
        this.ser(true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fades-enter-active, .fades-leave-active {
  transition: .8s;
  transform: translate(0,0);
  height: auto;
}
.fades-enter, .fades-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(0px,-100vh);
  height: 0;
  overflow: hidden;
}
</style>
