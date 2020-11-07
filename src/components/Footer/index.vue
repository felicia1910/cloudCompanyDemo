<template>
  <!--NAVIGATION START-->
  <div class="footer_background">

    <!--NAV>MENU>MIDDLE BLOCK-->
    <div class="footer_box">
      <function-link
        :func-name="'HOME   '"
        :router-name="'home'"
      />
      <function-link
        :func-name="'ABOUT US   '"
        :router-name="'aboutUs'"
      />
      <function-link
        :func-name="'SERVICES   '"
        :router-name="'services'"
      />
      <function-link
        :func-name="'EVENTS   '"
        :router-name="'events'"
      />
      <function-link
        :func-name="'SUPPORT   '"
        :router-name="''"
      />
      <function-link
        :func-name="'CONTACT US'"
        :router-name="'contactUs'"
        :last="true"
      />
    </div>
    <!-- <div class="cloudnifier_com">Cloudnifier.com</div> -->
    <div class="cookie_text">Cloudnifier.com.為提供您個人化且即時的服務，本網站透過使用"Cookies"記錄與存取您的瀏覽使用訊息。</div>
  </div>
  <!--NAV>MENU>BOTTOM BLOCK-->
</template>

<script>
import FunctionLink from './FunctionLink.vue'

export default {
  name: 'TheFooter',
  components: {
    FunctionLink
  },
  data () {
    return {
      timer: null,
      weekdaysMin: ['日', '一', '二', '三', '四', '五', '六'],
      displayCurrentTime: '',
      profile: [],
      userName: ''
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
