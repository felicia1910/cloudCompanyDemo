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
  name: 'merchantPlus',
  components: {
    TheHeader,
    servicesSec,
    servicesSec2,
    servicesSec3,
    theMail
  },
  data () {
    return {
      bc: 'yellow_bc',
      img: require('@/assets/img/services-13.png'),
      text: 'Achieve Customer Compliance at Every Step',
      sec1Data: [
        {
          color: 'yellow_bc',
          icon: 'fas fa-pencil-alt',
          where: '',
          text: 'Are you facing complexity in client collaboration and documentation during the product development and production process?'
        },
        {
          color: '',
          icon: 'fas fa-calendar',
          where: 'middle',
          text: 'Are you looking for a streamlined, action-monitored workflow to avoid production and delivery delays?'
        },
        {
          color: 'yellow_bc',
          icon: 'fas fa-user',
          where: '',
          text: 'Are you trying to secure future profit margins by controlling product costs as early as possible in the sample production stage?'
        }
      ],
      sec2DataTopData: {
        title: 'MerchantPlus',
        text: 'MerchantPlus is an innovative tool to help manufacturers and sourcing companies monitor product lifecycles from samples to finished products using best-practice procedures and guided workflows. It not only improves communication, boosts productivity and controls costs, it also secures compliance with customer requirements and promised service standards.'
      },
      sec2Icon: {
        color: 'yellow_bc',
        name: 'fas fa-shopping-cart'
      },
      sec2Img: require('@/assets/img/WDF_836559-400x400.jpg'),
      sec2Data: [
        {
          title: 'Customer Collaboration',
          text: 'Work smarter with a complete view of all customer contacts, communications and documentations, and authoritatively handle customer interactions at every step, from initial contact to production.'
        },
        {
          title: 'Product Development',
          text: 'Use a single platform to record, handle and monitor the entire process of new product innovations and customer-specific designs, from receiving customer specifications and customer feedback to materials acquisition, product costing analysis and production tracking.'
        },
        {
          title: 'Process Control',
          text: 'Automate customer service and collaborative workflows to ensure staff perform their tasks in a timely and correct manner. By safeguarding your time to production and time to delivery, you can eliminate the massive expenses associated with late deliveries.'
        }
      ],
      sec3Data: [
        {
          color: 'yellow_bc',
          title: 'Controlled Workflows',
          list: [
            { text: 'Pre-defined and standardized procedures guide users through specific business processes from start to completion.' },
            { text: 'Preset schedules and KPIs ensure that orders are processed accurately and on time, according to each customer鈥檚 specified requirements.' },
            { text: 'Automated workflows use familiar Microsoft Office tools to increase staff performance, efficiency and service quality.' }
          ]
        },
        {
          color: 'brown_bc',
          title: 'Analytics and Reports',
          list: [
            { text: 'Capture and track all data and actions, including customer communications, sample amendment images, quotations, order status, staff responses, materials orders, cost analyses and more.' },
            { text: 'Intelligently associate e-mail messages and tasks with relevant staff and customers.' },
            { text: 'Analyze sales performance and profitability, and consolidate the production status of all orders.' }
          ]
        },
        {
          title: 'Cost and Risk Control',
          list: [
            { text: 'Archive sample quotations, cost trends and historical sample development records for future reference.' },
            { text: 'Create a cost breakdown structure to simplify profit margin calculations and shorten the time needed for quotations and responding to changing customer requirements.' },
            { text: 'Minimize the risk of delayed shipments with pro-active email alerts and reports to all responsible management.' }
          ]
        },
        {
          color: 'yellow_bc',
          title: 'Mobility',
          list: [
            { text: 'A tailor-made mobile app provides content and information to meet the specific needs of merchandising staff and customers.' },
            { text: 'Staff can use the mobile app to present products and concepts during exhibitions and meetings.' },
            { text: 'Staff can also access a private section of the app to check customer details and act on sample amendments while on the move.' }
          ]
        },
        {
          color: 'brown_bc',
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
