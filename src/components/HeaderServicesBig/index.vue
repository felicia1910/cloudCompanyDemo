<template>
<div :class="['header_background','header_background_ser',theBack]">
  <div class="header_body_ser">
    <div class="header_text_box_about header_text_box_service_big">
      <img :src="thePic" alt="">
      <h1>{{theTitle}}</h1>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'theHeader',
  components: {
  },
  props: {
    thePic: {},
    theTitle: {},
    theBack: {}
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
