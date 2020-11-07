<template>
  <section>
      <div class="contact_left">
        <h2>Find Us in Hong Kong</h2>
        <div class="contact_box">
          <GmapMap
            :center="{lat:22.338446, lng:114.145394}"
            :zoom="18"
            map-type-id="terrain"
            style="width: 100%; height: 366px; margin-top:47px ;"
          >
          </GmapMap>
        </div>
      </div>
      <div class="contact_right">
        <h2>Contact via this form.</h2>
        <div class="contact_box">
          <email/>
        </div>
      </div>
  </section>
</template>

<script>

import Email from '@/components/Email'

export default {
  name: 'homeSec',
  components: {
    Email
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
