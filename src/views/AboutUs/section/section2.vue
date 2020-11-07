<template>
  <section class="about_sec2">
    <div class="about_sec2_left">
      <div class="about_sec2_title">Our Advisory Services</div>
      <div class="about_sec2_text">
        <div class="about_sec2_text_small_box" v-for="(value,key) in sec2Data" :key="key">
          <i :class="value.class"></i>
          <p>{{value.text}}</p>
        </div>
      </div>
    </div>
    <div class="about_sec2_right"></div>
  </section>
</template>

<script>

export default {
  name: 'homeSec2',
  components: {
  },
  data () {
    return {
      sec2Data: [
        {
          class: 'fas fa-pencil-ruler',
          text: 'Design Process'
        },
        {
          class: 'fas fa-sitemap',
          text: 'Deploy Solution'
        },
        {
          class: 'fas fa-hands',
          text: 'Test Application'
        },
        {
          class: 'fas fa-chart-bar',
          text: 'Monitor Performance'
        },
        {
          class: 'fas fa-headset',
          text: 'Support Production'
        },
        {
          class: 'fas fa-chart-line',
          text: 'Enhance Business'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
