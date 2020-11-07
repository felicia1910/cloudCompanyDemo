<template>
  <section>
      <div class="text-center home_sec1_big_title">You focus on your strengths and we serve you remain.</div>
      <div class="text-center home_sec1_big_icon"><i class="fas fa-angle-double-down"></i></div>
      <div class="home_sec1">
        <div class="home_sec1_box" v-for="(value,key) in sec1Data" :key="key">
          <img class="home_sec1_img" :src="value.img" alt="">
          <h2 class="home_sec1_title">{{value.title}}</h2>
          <p class="home_sec1_text">{{value.text}}</p>
        </div>
      </div>
  </section>
</template>

<script>

export default {
  name: 'homeSec',
  components: {
  },
  data () {
    return {
      sec1Data: [
        {
          img: require('@/assets/img/web_graphic-01.png'),
          title: 'Sales',
          text: 'increase your sales success by managing your sales life cycle. It includes Account, Contact, Lead, Opportunity, Quote, Order, Invoice, and Product Catalog management.'
        },
        {
          img: require('@/assets/img/web_graphic-02.png'),
          title: 'Customer Service',
          text: 'deliver outstanding customer service by managing your service and service scheduling life cycle. This includes Contract, Case, Knowledge Base, and Queue management, Service scheduling and Scheduling administration.'
        },
        {
          img: require('@/assets/img/web_graphic-03.png'),
          title: 'Marketing Automation',
          text: 'enhance marketing effectiveness by managing you marketing automation life cycle. Plan, manage and track your marketing campaigns from development to launch.'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
