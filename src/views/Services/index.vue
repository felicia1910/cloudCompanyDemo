<template>
  <div>
    <services-header />
    <home-sec/>
    <div class="server_put_height"></div>
  </div>
</template>

<script>
import ServicesHeader from './section/header'
import homeSec from './section/section1'

export default {
  name: 'services',
  components: {
    homeSec,
    ServicesHeader
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
