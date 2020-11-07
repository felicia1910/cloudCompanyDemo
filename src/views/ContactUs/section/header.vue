<template>
<div class="header_background_contact">
    <div class="particles_box2">
    <vue-particles
        class='particlesClass'
        color="#ffffff"
        :particleOpacity="0.8"
        :particlesNumber="10"
        shapeType="circle"
        :particleSize="1"
        linesColor="#ffffff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.7"
        :linesDistance="1200"
        :moveSpeed="0"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="push"
      ></vue-particles>
  </div>
  <div class="header_text_box_contact">
    <h3>Contact Us</h3>
    <div class="contact_small_box"><i class="fas fa-phone"></i><p>+852 2337 2188</p></div>
    <div class="contact_small_box"><i class="fas fa-envelope"></i><p>sales@cloudnifier.com</p></div>
    <div class="contact_small_box"><i class="fas fa-map-marker-alt"></i><p>2C, Lippo Leighton Tower, 103 Leighton Road, Causeway Bay, Hong Kong.</p></div>
  </div>
</div>
</template>

<script>

export default {
  name: 'AboutUsHeader',
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
