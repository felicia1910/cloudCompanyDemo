<template>
  <div class="about_big_box">
    <about-us-header/>
    <home-sec/>
    <div class="tran sec1_tran"></div>
    <home-sec2/>
    <div class="tran sec2_tran"></div>
    <home-sec3/>
  </div>
</template>

<script>
import AboutUsHeader from './section/header'
import homeSec from './section/section1'
import homeSec2 from './section/section2'
import homeSec3 from './section/section3'

export default {
  name: 'aboutUs',
  components: {
    AboutUsHeader,
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
