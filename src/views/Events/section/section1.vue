<template>
  <section>
    <div class="filter_big_box">
      <div class="event_filter_left">
        <p class="filter_by">Filter by:</p>
        <dropdown place-holder="Categories" :data="catGroups" v-model="catid" name="ageGroups"
        @change="catChangeHandler"/>
        <dropdown place-holder="Tags" :data="tagGroups" v-model="tagid" name="ageGroups" @change="catChangeHandler"/>
        <dropdown place-holder="Authors" :data="autGroups" v-model="autid" name="ageGroups" @change="catChangeHandler"/>
      </div>
      <div class="event_filter_right">
        <input type="text" v-model="keyWord" v-on:keyup.13="searchIt"/>
        <i class="fas fa-search" @click="searchIt"></i>
      </div>
    </div>
    <!-- 內容 -->
    <div class="event_big_box">
      <div class="event_box" v-for="(val,key) in sec1DataTmp" :key="key">
        <div class="event_img_box">
          <img :src="val.img" alt="">
          <div class="event_img_brightness"></div>
          <div class="event_text_box">
            <div class="event_title">{{val.title}}</div>
          </div>
        </div>
        <div class="event_box_bottom">
          <div class="event_text" >
            <p class="event_date">{{val.date}}
              <span>by</span>
              <span class="event_text_name" @click="filterAut(val.author)">{{val.author}}</span>
              <span>in</span>
              <span class="event_text_name" @click="filterAut(val.where)">{{val.where}}</span>
            </p>
          </div>
          <div class="event_btn" @click="goRoute(val)">More</div>
        </div>
      </div>
    </div>
    <div style="width:100%; height:40px"></div>
  </section>
</template>

<script>
import Dropdown from '@/components/Dropdown/index.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import store from '@/store'
import map from 'lodash/map'

export default {
  name: 'homeSec',
  components: {
    Dropdown
  },
  data () {
    return {
      sec1DataTmp: [],
      sec1DataTmpBox: [],
      catGroups: [
        { value: 0, text: 'Events' },
        { value: 1, text: 'Exhibition' },
        { value: 2, text: 'Seminar' },
        { value: 3, text: 'Webinar' },
        { value: 4, text: 'Workshop' }
      ],
      catid: '',
      tagGroups: [
        { value: 0, text: 'Business' },
        { value: 1, text: 'CRM' },
        { value: 2, text: 'HKTDC' },
        { value: 3, text: 'ICT' },
        { value: 4, text: 'IDT Expo' },
        { value: 5, text: 'IT' },
        { value: 6, text: 'Microsoft' },
        { value: 7, text: 'OGCIO' },
        { value: 8, text: 'Sales' },
        { value: 9, text: 'SAP' }
      ],
      tagid: '',
      autGroups: [
        { value: 0, text: 'boaz' },
        { value: 1, text: 'edmondyip' }
      ],
      autid: '',
      keyWord: '',
      getkeyWord: '',
      getFilter: this.$route.params.filter || false
    }
  },
  computed: {
    ...mapGetters('Events', {
      'sec1Data': 'eventsData'
    })
  },
  mounted () {
    this.startFun()
  },
  methods: {
    // 時間排序
    sortDataArray (dataArray) {
      return dataArray.sort(function (a, b) {
        return Date.parse(b.date.replace(/-/g, '/')) - Date.parse(a.date.replace(/-/g, '/'))
      })
    },
    startFun () {
      this.sec1DataTmpBox = this.sortDataArray(this.sec1Data)
      this.sec1DataTmp = this.sec1DataTmpBox

      if (this.getFilter) {
        this.sec1DataTmp = this.filterIt(this.sec1DataTmpBox, this.getFilter)
      }
    },
    // filter
    filterIt (arr, searchKey) {
      return arr.filter(function (obj) {
        return obj.cat.includes(searchKey) || obj.tag.includes(searchKey) || obj.author.includes(searchKey) || obj.title.includes(searchKey)
      })
    },
    filterAut (val) {
      this.sec1DataTmp = this.filterIt(this.sec1DataTmpBox, val)
    },
    // 分類的
    catChangeHandler (val, obj) {
      this.sec1DataTmp = this.filterIt(this.sec1DataTmpBox, obj.text)
    },
    // 搜尋
    searchIt () {
      this.sec1DataTmp = this.filterIt(this.sec1DataTmpBox, this.keyWord)
      this.keyWord = ''
    },
    goRoute (val) {
      this.$router.push({ name: 'eventsPage', params: { isEdit: val, name: val.id } })
    }
  }
}
</script>
