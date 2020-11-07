<template>
  <section class="about_sec3">
    <div class="about_sec2_left">
      <div class="about_sec2_title">Our Project Direction</div>
      <div class="about_sec3_text">
        <div class="about_sec3_icon_all_box">
          <div class="dot_line"></div>
          <div class="six_div" v-for="(i,key) in iconClass" :key="key"><i :class="i.class"></i></div>
        </div>
        <div class="about_sec3_text_box">
          <div v-for="(i,key) in textData" :key="key">
            <h4>{{i.title}}</h4>
            <p>{{i.text}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="about_sec3_right"></div>
  </section>
</template>

<script>

export default {
  name: 'homeSec3',
  components: {
  },
  data () {
    return {
      iconClass: [
        { class: 'fas fa-cloud' },
        { class: 'fas fa-sitemap' },
        { class: 'fas fa-tasks' }
      ],
      textData: [
        {
          title: 'Cloudnifier SaaS Solution',
          text: 'Cloudnifier Development Soultion'
        },
        {
          title: 'Add-on Existing SaaS Solution',
          text: 'Microsoft Dynamic CRM, ServiceNow'
        },
        {
          title: 'Cloudnifier Platform',
          text: 'Talend, Microsoft Azure, Cloudera'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
