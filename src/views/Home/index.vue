<template>
  <div>
    <the-header/>
    <home-sec/>
    <home-sec2/>
    <home-sec3/>
  </div>
</template>

<script>
import TheHeader from '@/components/Header/index.vue'
import homeSec from './section/section1'
import homeSec2 from './section/section2'
import homeSec3 from './section/section3'

export default {
  name: 'home',
  components: {
    TheHeader,
    homeSec,
    homeSec2,
    homeSec3
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
