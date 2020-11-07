<template>
  <section class="event_page_sec">
    <div class="event_page_sec_left"></div>
    <div class="event_page_sec_bottom">
      <div class="event_page_cat" >{{theData.where}}</div>
      <div class="event_page_title_box">
        <div class="event_page_title">{{theData.title}}</div>
        <div class="event_text event_text_page" >
          <p class="event_date">{{theData.date}}
            <span>by</span>
            <span class="event_text_name" @click="goPage(theData.author)">{{theData.author}}</span>
            <span>in</span>
            <span class="event_text_name" @click="goPage(theData.where)">{{theData.where}}</span>
          </p>
        </div>
      </div>
      <img v-if="theData.imgIn" class="event_page_img" :src="theData.imgIn" alt="">
      <div class="event_page_text" v-html="theData.text"></div>
      <shareing :now-url="nowUrl"/>
      <div class="event_page_filter_box">
        <div :class="['event_page_filter',key===nowWhere&&'event_page_filter_click']"
         v-for="(val,key) in filterData" :key="key"
         @click="whichBox(key)">{{val.name}}</div>
      </div>
      <!-- 細節 -->
      <div v-if="nowWhere===0">
        <div class="event_page_details_box" v-for="(val,key) in theData.det" :key="key">
          <div class="event_page_details_box_title">
            <i :class="val.icon"></i>
            <h3>{{val.text}}</h3>
          </div>
          <p>{{val.in}}</p>
        </div>
      </div>
      <!-- 寫信 -->
      <div class="event_page_mail" v-if="nowWhere===1">
        <h2>Join it Now</h2>
        <email/>
      </div>
      <!-- 評論 -->
      <div v-if="nowWhere===2">
        <commit/>
      </div>
      <div style="height:60px"></div>
    </div>
    <div class="event_page_sec_right"></div>
  </section>
</template>

<script>
import Email from '@/components/Email'
import Commit from './commit'
import Shareing from '@/components/Shareing/index.vue'

export default {
  name: 'homeSec',
  props: {
    theData: {}
  },
  components: {
    Email,
    Commit,
    Shareing
  },
  data () {
    return {
      filterData: [
        {
          id: 1,
          name: 'Details'
        },
        {
          id: 2,
          name: 'Join'
        },
        {
          id: 3,
          name: 'Comments'
        }
      ],
      nowWhere: 0,
      nowUrl: window.location.href
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    whichBox (key) {
      this.nowWhere = key
    },
    goPage (val) {
      this.$router.push({ name: 'events', params: { filter: val } })
    }
  }
}
</script>
