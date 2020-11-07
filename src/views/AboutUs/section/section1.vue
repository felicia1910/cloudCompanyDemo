<template>
  <section class="about_sec1">
    <div class="about_sec1_left"></div>
    <div class="about_sec1_right">
      <div class="about_sec1_title">About Cloudnifier</div>
      <div class="about_sec1_text">
        <p>Founded in 2013 with headquartered in Hong Kong. Cloudnifier quickly expended its operations and offices in Singapore, Taiwan and Vietnam.</p>
        <br/>
        <p>Today, we have more than 30 consultants across Asia Pacific including Hong Kong, Singapore, Taiwan, Vietnam, China, Indonesia and Malaysia.</p>
        <br/>
        <p>We provides cloud-based or cloud related solutions and focus on 6 major industries – Manufacturing, Distribution, Real Estate, Retails, Services and Education.</p>
        <br/>
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
