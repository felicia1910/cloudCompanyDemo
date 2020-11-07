<template>
  <section class="edu_sec2">
    <div class="edu_sec2_top">
      <div class="edu_sec2_icon_box">
        <div :class="['edu_sec2_icon',sec2Icon.color]"><i :class="sec2Icon.name"></i></div>
      </div>
      <div class="edu_sec2_top_text">
        <h2>{{sec2DataTopData.title}}</h2>
        <p>{{sec2DataTopData.text}}</p>
      </div>
    </div>
    <div class="edu_sec2_bottom">
      <div class="edu_sec2_bottom_text">
        <div v-for="(val,key) in sec2Data" :key="key">
          <h4>{{val.title}}</h4>
          <p>{{val.text}}</p>
        </div>
      </div>
      <img class="edu_sec2_pic" :src="sec2Img" alt="">
    </div>
  </section>
</template>

<script>

export default {
  name: 'servicesSec2',
  props: {
    sec2DataTopData: {},
    sec2Data: {},
    sec2Img: {},
    sec2Icon: {}
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
