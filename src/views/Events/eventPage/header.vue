<template>
  <div class="header_background_event_all">
    <h1>Business Matching and Networking</h1>
    <div class="header_background_event_dark"></div>
  </div>
</template>

<script>

export default {
  name: 'EventHeader',
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
