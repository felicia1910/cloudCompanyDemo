<template>
  <div class="contact_big_box">
    <contact-us-header/>
    <home-sec/>
  </div>
</template>

<script>
import contactUsHeader from './section/header'
import homeSec from './section/section1'

export default {
  name: 'contactUs',
  components: {
    contactUsHeader,
    homeSec
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
