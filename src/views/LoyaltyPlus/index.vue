<template>
  <div>
    <the-header :the-back="bc" :the-pic="img" :the-title="text"/>
    <services-sec :sec1-data="sec1Data"/>
    <services-sec2 :sec2-data="sec2Data" :sec2-data-top-data="sec2DataTopData" :sec2-img="sec2Img" :sec2-icon="sec2Icon"/>
    <services-sec3 :sec3-data="sec3Data"/>
    <div class="services_mail_box">
      <h3>Get More Information</h3>
      <the-mail/>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/HeaderServicesBig/index'
import servicesSec from '@/components/ServicesSec/section1'
import servicesSec2 from '@/components/ServicesSec/section2'
import servicesSec3 from '@/components/ServicesSec/section3'
import theMail from '@/components/Email/index'

export default {
  name: 'loyaltyPlus',
  components: {
    TheHeader,
    servicesSec,
    servicesSec2,
    servicesSec3,
    theMail
  },
  data () {
    return {
      bc: 'blue_bc',
      img: require('@/assets/img/services-12.png'),
      text: 'Build More Profitable Customer Relationships',
      sec1Data: [
        {
          color: 'blue_bc',
          icon: 'fas fa-pencil-alt',
          where: '',
          text: 'Are you trying to generate more revenue from your existing customer base?'
        },
        {
          color: '',
          icon: 'fas fa-calendar',
          where: 'middle',
          text: 'Are you seeking new insights to optimize the ROI of your marketing programs?'
        },
        {
          color: 'blue_bc',
          icon: 'fas fa-user',
          where: '',
          text: 'Are you enhancing customer care to increase long-term business profitability?'
        }
      ],
      sec2DataTopData: {
        title: 'LoyaltyPlus',
        text: 'LoyaltyPlus enables organizations to better understand and engage with customers, so they can build customer loyalty and grow their business. It records and monitors all customer engagements, from first contact through purchase and post-sales interactions, and provides tools to simplify and automate your company’s sales, marketing and customer service processes.'
      },
      sec2Icon: {
        color: 'blue_bc',
        name: 'fas fa-user-tie'
      },
      sec2Img: require('@/assets/img/picture2-400x400.jpg'),
      sec2Data: [
        {
          title: 'Customer Profiling',
          text: 'Gain a better understanding of your customers by effectively capturing, analyzing and integrating customer data, and enhance your lead and opportunity management with a complete view of customer interactions.'
        },
        {
          title: 'Marketing Campaigns',
          text: 'Automate your marketing campaigns with end-to-end processes, from customer segmentation, campaign execution and data analytics to response management.'
        },
        {
          title: 'Customer Service',
          text: 'Enrich the customer experience by empowering your staff to deliver consistent and efficient customer care, and attain pre-designed SLAs via a best-practice, automated workflow.'
        }
      ],
      sec3Data: [
        {
          color: 'clear_blue_bc',
          title: 'Simplified Workflows',
          list: [
            { text: 'Utilize an array of pre-built, ready-to-use tools to simplify deployment for quick implementation.' },
            { text: 'Automate marketing and customer service workflows to guide staff in the correct and most efficient course of action.' },
            { text: 'Make use of intuitive and familiar Microsoft Office tools to boost productivity and communications.' }
          ]
        },
        {
          color: 'clear_light_blue_bc',
          title: 'Marketing Intelligence',
          list: [
            { text: 'Capture customer data and manage all customer interactions in one system, providing a 360-degree customer view.' },
            { text: 'Enable Dashboard monitoring for marketing and customer service issues with key performance indicators (KPIs).' },
            { text: 'Easily segment data to support marketing campaigns, and identify cross-sell and up-sell opportunities tailored to the needs of specific customer groups.' },
            { text: 'Identify trends, allocate resources and make decisions with powerful predictive analytics.' }
          ]
        },
        // 3
        {
          title: 'Mobility',
          color: 'clear_light_blue_bc',
          list: [
            { text: 'Capture and access customer data from any type of device via the web or a mobile app.' },
            { text: 'Deliver notifications and alerts through mobile devices regarding service schedules and appointments.' },
            { text: 'Enhance communications between field service and office staff.' }
          ]
        },
        {
          color: 'clear_blue_bc',
          title: 'Low Costs',
          list: [
            { text: 'Cloud-based service eliminates the need for major capital investment.' },
            { text: 'Subscription-based service flexibly matches your budget plan with a pay-as-you-go offer.' }
          ]
        }
      ]
    }
  },
  methods: {

  }
}
</script>
