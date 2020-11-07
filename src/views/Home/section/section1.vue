<template>
  <section>
      <div :class="['text-center','home_sec1_big_title',titleFixed &&'home_sec1_big_title_run']">You focus on your strengths and we serve you remain.</div>
      <div :class="['text-center','home_sec1_big_icon',iconFixed&&'home_sec1_big_icon_run']"><i class="fas fa-angle-double-down"></i></div>
      <div class="home_sec1" id="searchBar">
        <div :class="['home_sec1_box',searchBarFixed&&'home_sec1_box_run']" v-for="(value,key) in sec1Data" :key="key">
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
      ],
      searchBarFixed: false,
      titleFixed: false,
      iconFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  watch: {

  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop// 网页被卷起来的高度
      var offsetTop = document.querySelector('#searchBar').offsetTop// 距离顶部的高度

      // 三格
      this.searchBarFixed = (scrollTop > offsetTop - 600)
      // title
      this.titleFixed = (scrollTop > offsetTop - 650)
      this.iconFixed = (scrollTop > offsetTop - 630)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
