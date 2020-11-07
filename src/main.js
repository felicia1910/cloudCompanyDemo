import '@babel/polyfill'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/app.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'

// setup
import './setup/setupAxios'
import './setup/setupVeeValidate'
import './setup/setupFragment'
import './setup/setupPrint'
import './setup/setupVueFilters'
import './setup/setupBootstrap'

// header掛件
import VueParticles from 'vue-particles'

// google
import * as VueGoogleMaps from 'vue2-google-maps'

// cookie
import VueCookie from 'vue-cookie'

// 螢幕寬度
import VueWindowSize from 'vue-window-size'

// share
import SocialSharing from 'vue-social-sharing'
Vue.use(VueParticles)
Vue.use(VueCookie)
Vue.use(VueWindowSize)
Vue.use(SocialSharing)

//

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB2F6h85TvGY3AgVRlXnRRLWlv_Ws359i8',
    libraries: 'places' // This is required if you use the Autocomplete plugin
  },
  installComponents: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
