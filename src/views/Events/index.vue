<template>
  <div>
    <event-header/>
    <home-sec/>
  </div>
</template>

<script>
import eventHeader from './section/header'
import homeSec from './section/section1'

export default {
  name: 'events',
  components: {
    homeSec,
    eventHeader
  },
  data () {
    return {
      stepHome: '',
      lang: ''
    }
  },
  methods: {

  }
}
</script>
