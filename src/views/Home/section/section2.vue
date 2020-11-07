<template>
  <section class="home_sec2_section" id="searchWhere">
    <div class="home_sec2_left">
      <div :class="['home_sec2_left_title',searchBarTitleFixed&&'home_sec2_text_run']">Where are We ?</div>
      <div :class="['home_sec2_text',searchBarFixed&&'home_sec2_text_run']">Headquartered in Hong Kong, Cloudnifier has quickly expended its operations and offices in Singapore, Taiwan and Vietnam.
        <br/> <br/>
        We have more than 30 consultants across Asia Pacific, covering China, Indonesia, Malaysia, Hong Kong and so forth.</div>
    </div>
    <div class="home_sec2_right">
      <div :class="['home_sec2_right_title',searchBarTitleFixed&&'home_sec2_text_run']">Contact us in this form.</div>
      <div :class="['home_sec2_right_mail',searchBarFixed&&'home_sec2_text_run']"><the-mail/></div>
    </div>
  </section>
</template>

<script>
import theMail from '@/components/Email/index'

export default {
  name: 'homeSec2',
  components: {
    theMail
  },
  data () {
    return {
      searchBarTitleFixed: false,
      searchBarFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop// 网页被卷起来的高度
      var offsetTop = document.querySelector('#searchWhere').offsetTop// 距离顶部的高度

      // 文字
      this.searchBarTitleFixed = (scrollTop > offsetTop - 550)
      this.searchBarFixed = (scrollTop > offsetTop - 600)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
