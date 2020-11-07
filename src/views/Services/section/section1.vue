<template>
  <section>
    <div class="service_all_box" v-for="(val,key) in sec1Data" :key="key">
      <img class="service_all_pic" :src="val.img" alt="">
      <div class="service_all_text_box">
        <div :class="['service_all_text_title',val.colorText]">{{val.title}}</div>
        <div class="service_all_text_small" v-for="(i,index) in val.text" :key="index">{{i.word}}</div>
        <div :class="['service_all_btn',val.color]" @click="goRoute(val)">MORE DETAILS</div>
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
          name: 'eduSmart',
          color: 'green_bc',
          colorText: 'green',
          to: '',
          img: require('@/assets/img/services-05.png'),
          title: 'Empower School and Student Growth',
          text: [
            { word: 'Are you committed to understanding your students and developing teaching plans that meet their individual needs?' },
            { word: 'Are you seeking a tool to effectively align your educational goals with school management?' },
            { word: 'Are you striving to enhance communication among all stakeholders, including the principal, administrators, teachers and parents?' }
          ]
        },
        {
          name: 'loyaltyPlus',
          color: 'blue_bc',
          colorText: 'blue',
          to: '',
          img: require('@/assets/img/services-07.png'),
          title: 'Build More Profitable Customer Relationships',
          text: [
            { word: 'Are you trying to generate more revenue from your existing customer base?' },
            { word: 'Are you seeking new insights to optimize the ROI of your marketing programs?' },
            { word: 'Are you enhancing customer care to increase long-term business profitability?' }
          ]
        },
        {
          name: 'merchantPlus',
          color: 'yellow_bc',
          colorText: 'yellow',
          to: '',
          img: require('@/assets/img/services-04.png'),
          title: 'Achieve Customer Compliance at Every Step',
          text: [
            { word: 'Are you facing complexity in client collaboration and documentation during the product development and production process?' },
            { word: 'Are you looking for a streamlined, action-monitored workflow to avoid production and delivery delays?' },
            { word: 'Are you trying to secure future profit margins by controlling product costs as early as possible in the sample production stage?' }
          ]
        }
      ]
    }
  },
  methods: {
    goRoute (val) {
      this.$router.push({ name: val.name })
    }
  }
}
</script>
