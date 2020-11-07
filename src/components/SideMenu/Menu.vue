<template>
  <!--NAVIGATION START-->
  <div :class="className">
      <div class="nav_top_block"></div>
      <function-link
        :func-name="'HOME'"
        :router-name="'home'"
      />
      <function-link
        :func-name="'ABOUT US'"
        :router-name="'aboutUs'"
      />
      <function-link
        :func-name="'SERVICES'"
        :router-name="'services'"
      />
      <function-link
        v-if="serOpen"
        :func-name="'EduSmart'"
        :router-name="'eduSmart'"
        :dark="true"
      />
      <function-link
        v-if="serOpen"
        :func-name="'LoyaltyPlus'"
        :router-name="'loyaltyPlus'"
        :dark="true"
      />
      <function-link
        v-if="serOpen"
        :func-name="'MerchantPlus'"
        :router-name="'merchantPlus'"
        :dark="true"
      />
      <function-link
        v-if="serOpen"
        :func-name="'Salesplus for SMB'"
        :router-name="''"
        :dark="true"
      />
      <function-link
        :func-name="'EVENTS'"
        :router-name="'events'"
      />
      <function-link
        :func-name="'SUPPORT'"
        :router-name="''"
      />
      <function-link
        :func-name="'CONTACT US'"
        :router-name="'contactUs'"
      />
  </div>
  <!--NAV>MENU>BOTTOM BLOCK-->
</template>

<script>
import FunctionLink from './FunctionLink.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import store from '@/store'

export default {
  name: 'Menu',
  props: {
    className: {}
  },
  components: {
    FunctionLink
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('Nav', {
      'serOpen': 'getopenSer'
    })
  },
  mounted () {

  },
  watch: {

  },
  methods: {

  }
}
</script>
