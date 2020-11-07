<template>
  <section class="home_sec3_section">
    <div class="text-center home_sec3_big_title">Upcoming Events</div>
    <div class="text-center home_sec3_filter_box">
      <div class="home_sec3_filter_text" v-for="(value,key) in filterData" :key="key">{{value.name}}</div>
    </div>
    <div class="home_sec1">
      <div class="home_sec1_box" v-for="(value,key) in sec1Data" :key="key">
        <img class="home_sec3_img" :src="value.img" alt="">
        <h2 class="home_sec3_title">{{value.title}}</h2>
      </div>
    </div>
    <div class="home_sec3_btn">MORE</div>
  </section>
</template>

<script>

export default {
  name: 'homeSec3',
  components: {
  },
  data () {
    return {
      filterData: [
        {
          id: 0,
          name: 'All'
        },
        {
          id: 1,
          name: 'Events'
        },
        {
          id: 2,
          name: 'Exhibition'
        },
        {
          id: 3,
          name: 'Webinar'
        }
      ],
      sec1Data: [
        {
          img: require('@/assets/img/services-04.png'),
          title: 'MechantPlus Webinar'
        },
        {
          img: require('@/assets/img/WDF_836559-450x281.jpg'),
          title: 'Grow Your Business with Microsoft CRM'
        },
        {
          img: require('@/assets/img/picture2-450x250.jpg'),
          title: 'Microsoft CRM Event'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
