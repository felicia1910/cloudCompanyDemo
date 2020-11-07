<template>
  <div>
    <event-header/>
    <home-sec :the-data="theData"/>
  </div>
</template>

<script>
import eventHeader from './header'
import homeSec from './section1'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import store from '@/store'

export default {
  name: 'eventsPage',
  components: {
    homeSec,
    eventHeader
  },
  data () {
    return {
      theData: ''
    }
  },
  async mounted () {
    await this.startFun()
  },
  computed: {
    ...mapGetters('Events', {
      'sec1Data': 'eventsData'
    })
  },
  methods: {
    startFun () {
      let startFind = window.location.href.indexOf('eventsPage/')
      let num = parseInt(window.location.href.substr(startFind + 11))

      let getData = this.sec1Data.filter(function (o) {
        return o.id === num
      })
      this.theData = getData[0]
    }

  }
}
</script>
