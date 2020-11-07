<template>
  <section class="home_sec3_section" id="searchWhereSec3">
    <div :class="['text-center','home_sec3_big_title',searchBarTitleFixed &&'home_sec3_move_on']">Upcoming Events</div>
    <div :class="['text-center','home_sec3_filter_box',searchBarTitleFixed &&'home_sec3_move_on']">
      <div class="home_sec3_filter_text" v-for="(value,key) in filterData" :key="key" @click="filrerFun(value)">{{value.name}}</div>
    </div>
    <div class="home_sec3">
      <div :class="['home_sec3_box',searchBarFixed &&'home_sec3_move_on']" v-for="(value,key) in sec1DataTmp" :key="key" @click="goRoute(value.route)">
        <img class="home_sec3_img" :src="value.img" alt="">
        <h2 class="home_sec3_title">{{value.title}}</h2>
      </div>
    </div>
    <div :class="['home_sec3_btn',searchBarFixed &&'home_sec3_move_on']" @click="goMore">MORE</div>
  </section>
</template>

<script>

export default {
  name: 'homeSec3',
  components: {
  },
  data () {
    return {
      filterData: [
        {
          id: 0,
          name: 'All'
        },
        {
          id: 1,
          name: 'Events'
        },
        {
          id: 2,
          name: 'Exhibition'
        },
        {
          id: 3,
          name: 'Webinar'
        }
      ],
      sec1Data: [
        {
          img: require('@/assets/img/services-04.png'),
          title: 'MechantPlus Webinar',
          id: [0, 1, 3],
          route: 0
        },
        {
          img: require('@/assets/img/WDF_836559-450x281.jpg'),
          title: 'Grow Your Business with Microsoft CRM',
          id: [0, 1, 2],
          route: 1
        },
        {
          img: require('@/assets/img/picture2-450x250.jpg'),
          title: 'Microsoft CRM Event',
          id: [0, 1, 2],
          route: 2
        }
      ],
      sec1DataTmp: [],
      searchBarTitleFixed: false,
      searchBarFixed: false
    }
  },
  mounted () {
    this.startFun()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    startFun () {
      this.sec1DataTmp = this.sec1Data
    },
    filrerFun (val) {
      this.sec1DataTmp = this.sec1Data.filter(obj =>
        obj.id.includes(val.id)
      )
    },
    goRoute (key) {
      this.$router.push({ name: 'eventsPage', params: { name: key } })
    },
    goMore () {
      this.$router.push({ name: 'events' })
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop// 网页被卷起来的高度
      var offsetTop = document.querySelector('#searchWhereSec3').offsetTop// 距离顶部的高度

      // 文字
      this.searchBarTitleFixed = (scrollTop > offsetTop - 550)
      this.searchBarFixed = (scrollTop > offsetTop - 400)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
