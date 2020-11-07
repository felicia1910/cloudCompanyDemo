<template>
  <fragment>
    <side-menu/>
    <router-view />
    <the-footer />
    <to-top />
  </fragment>
</template>

<script>
import SideMenu from '@/components/SideMenu/index.vue'
import TheFooter from '@/components/Footer/index.vue'
import ToTop from '@/components/ToTop/index.vue'

export default {
  name: 'App',
  components: {
    SideMenu,
    TheFooter,
    ToTop
  }
}
</script>
