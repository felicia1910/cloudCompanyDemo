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
  name: 'eduSmart',
  components: {
    TheHeader,
    servicesSec,
    servicesSec2,
    servicesSec3,
    theMail
  },
  data () {
    return {
      bc: 'green_bc',
      img: require('@/assets/img/services-10.png'),
      text: 'Empower School and Student Growth',
      sec1Data: [
        {
          color: 'green_bc',
          icon: 'fas fa-pencil-alt',
          where: '',
          text: 'Are you committed to understanding your students and developing teaching plans that meet their individual needs?'
        },
        {
          color: '',
          icon: 'fas fa-calendar',
          where: 'middle',
          text: 'Are you seeking a tool to effectively align your educational goals with school management?'
        },
        {
          color: 'green_bc',
          icon: 'fas fa-user',
          where: '',
          text: 'Are you striving to enhance communication among all stakeholders, including the principal, administrators, teachers and parents?'
        }
      ],
      sec2DataTopData: {
        title: 'EduSmart',
        text: 'EduSmart is an easy-to-use, integrated, cloud-based system that includes data collection with analysis and reporting of educational information to help educators monitor and evaluate the performance of education, maximize student success, and communicate more effectively with parents. It not only enhances the quality of both teaching and learning, it also simplifies school administration and strengthens student development.'
      },
      sec2Icon: {
        color: 'green_bc',
        name: 'fas fa-book'
      },
      sec2Img: require('@/assets/img/Fotolia_49036212_M-400x450.jpg'),
      sec2Data: [
        {
          title: 'Student Data and Analytics',
          text: 'Gain an in-depth understanding of your students鈥� strengths and weaknesses, both academically and behaviorally, with comprehensive reports and multi-faceted analysis functions. Tailor-make teaching plans and study advice according to each individual student鈥檚 performance.'
        },
        {
          title: 'Education Management',
          text: 'Manage your school鈥檚 records and statistics to simplify administrative tasks, and facilitate effective assessment and evaluation with pre-defined guidelines, SLAs and schedules.'
        },
        {
          title: 'School-to-home Communication',
          text: 'Make information easily available for parents with updates on their child鈥檚 progress, achievements, punishments and activities, as well as insights on teachers鈥� comments and evaluations.'
        }
      ],
      sec3Data: [
        {
          color: 'light_green_bc',
          title: 'One-stop Information Management',
          list: [
            { text: 'Centralize and integrate all student information, such as student demographics, academic reports, public-examination reports, TSA results, student attendance and activities, as well as student life-planning, educational progress and more.' },
            { text: 'Record all staff information, financial statistics, spending patterns, alumni records, and donation reports.' },
            { text: 'Provide user-based analytics, reports, search functions, bookmarks and a dashboard view.' }
          ]
        },
        {
          color: 'green_bc',
          title: 'Comprehensive Analytics',
          list: [
            { text: 'Help teachers better understand students鈥� performance with in-depth analysis of each student鈥檚 semester results, extra-circular activities (ECA), and service, award and punishment records' },
            { text: 'Enable powerful multi-layer browsing functions to enable teachers to review and analyze each student鈥檚 performance in detail, by subject, by semester, by examination paper or by overall performance' },
            { text: 'Gain new educational insights with historical data comparisons, ECA calendar, survey reports and teachers鈥� comments' }
          ]
        },
        {
          title: 'Teacher Performance Management',
          list: [
            { text: 'Maintain educational quality with scheduled reviews and evaluations of teacher performance according to individual goals and required service levels' },
            { text: 'Provide insights for enhancing teaching quality, including principal鈥檚 and peer comments and performance comparisons, organized by time, by class, or by teacher' }
          ]
        },
        {
          color: 'light_green_bc',
          title: 'Parent Communications',
          list: [
            { text: 'Enable parents to check their child鈥檚 profile, grade cards and ECA calendar anytime, anywhere' },
            { text: 'Deliver school notices, surveys and teacher comments in a timely fashion, and provide a channel for parent feedback' }
          ]
        },
        {
          color: 'green_bc',
          title: 'Low Costs',
          list: [
            { text: 'Cloud-based service eliminates the need for major capital investment' },
            { text: 'Subscription-based service flexibly matches your budget plan with a pay-as-you-go offer' }
          ]
        }
      ]
    }
  },
  methods: {

  }
}
</script>
