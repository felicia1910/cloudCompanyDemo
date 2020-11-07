<template>
<div class="header_background_about">
  <div class="header_body">
    <div :class="['header_text_box_about',searchBarTitleFixed&&'header_text_box_about_ani']" id="about_top">
      <h1>Simplify Work, Great Work</h1>
      <p>We make your work more easy, and get greater result</p>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'AboutUsHeader',
  components: {
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
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
      searchBarTitleFixed: ''
    }
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop// 网页被卷起来的高度
      var offsetTop = document.querySelector('#about_top').offsetTop// 距离顶部的高度

      // 文字
      this.searchBarTitleFixed = (scrollTop > offsetTop + 100)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
