<template>
  <div class="event_page_commit_big_box">
    <h2>There are {{totalRead}} comments on this post</h2>
    <!-- 回應後的樣子 -->
    <div class="event_page_commit_box" v-for="(val,key) in commitDataShow" :key="key">
      <!-- 起頭人 -->
      <div class="event_page_commit_top_box">
        <img class="event_page_commit_img" :src="theImg" alt />
        <div class="event_page_commit_title">
          {{val.topUser}}
          <span>{{val.date}}</span>
        </div>
        <div class="event_page_commit_text">{{val.say}}</div>
        <div class="event_page_commit_icon" >
          <i class="fas fa-reply" @click="replySomeBody(val,false)"></i>
        </div>
      </div>
      <!-- 回應人 -->
      <div class="event_page_commit_bottom_box" v-for="(v,index) in val.replyShow" :key="index" >
        <div class="event_page_commit_img_in">
          <img :src="theImg" alt />
        </div>
        <div class="event_page_commit_title_in_box">
          <div class="event_page_commit_title_in">
            {{v.who}}
            <span>{{v.date}}</span>
          </div>
          <div class="event_page_commit_text_in">
            <span>@{{v.replyWho}}</span>
            <br />
            {{v.say}}
          </div>
          <div class="event_page_commit_icon_in" >
            <i class="fas fa-reply" @click="replySomeBody(false,v)"></i>
          </div>
        </div>
      </div>
      <div class="event_page_howMuch" v-if="val.replyLength-1> 0 && !val.open" @click="showReply(key)">加載剩餘{{val.replyLength-1}}則留言...</div>
      <div class="event_page_howMuch" v-if="val.open" @click="hideReply(key)">收合留言</div>
    </div>
    <div style="height:20px"></div>
    <pagination v-if="hasQueryData" :total-page="totalPage" :page-index="pageIndex" @change="changePageIndex" :cant-not-click="cantNotClickPage"/>
    <!-- 回應 -->
    <h2 class="start_commit_title" style="margin-top:30px">Leave a reply<span>{{forWho}}</span>
    <span class="start_commit_det" v-if="forWho" @click="cleanReply">X</span></h2>
    <div class="start_commit_box">
      <div class="start_commit_box_top">
        <div>
          <h5>
            Name
            <span style="color:#d71a21">*</span>
          </h5>
          <input type="text" v-model="name"/>
        </div>
        <div>
          <h5>
            Email
            <span style="color:#d71a21">*</span>
          </h5>
          <input type="email" v-model="email"/>
        </div>
        <div>
          <h5>Website</h5>
          <input type="text" v-model="website"/>
        </div>
      </div>
      <div class="start_commit_box_bottom">
        <h5>
          Message
          <span style="color:#d71a21">*</span>
        </h5>
        <textarea cols="50" rows="5" v-model="letter"></textarea>
      </div>
      <div class="start_commit_btn" @click="submit">SUBMIT COMMENT</div>
    </div>
  </div>
</template>

<script>
import map from 'lodash/map'
import Pagination from '@/components/Pagination/index.vue'
import Shareing from '@/components/Shareing/index.vue'

export default {
  name: 'commit',
  props: {},
  components: {
    Pagination,
    Shareing
  },
  data () {
    return {
      theImg: require('@/assets/img/5f632ca23a57919165f2031c0dc8f7ba.png'),
      commitData: [
        {
          topUser: '測試第一人',
          date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
          say:
            '這個是測試第一個，測試測試：同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家',
          reply: [
            {
              who: '回應第一人',
              date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
              replyWho: '測試第一人',
              say: '同事Ａ：我不知道啊'
            },
            {
              who: '回應第二人',
              date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
              replyWho: '回應第一人',
              say:
                '同事Ｃ：不是啊！小當家裡面沒有微波爐吼！！在那邊騙！！'
            }
          ]
        },
        {
          topUser: '測試第二個人',
          date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
          say: '這個是測試第-4個，測試測試',
          reply: [
            {
              who: '回應第一人',
              date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
              replyWho: '測試第二人',
              say: 'PPPPPPPPPPOOIUGUYUYGFTYFTHBJNLK'
            }
          ]
        },
        {
          topUser: '測試第三人',
          date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
          say:
            '這個是測試',
          reply: [
            {
              who: '回應第一人',
              date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
              replyWho: '測試第一人',
              say: 'PPPPPPPPPPOOIUGUYUYGFTYFTHBJNLK'
            },
            {
              who: '回應第二人',
              date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
              replyWho: '回應第一人',
              say:
                '微波爐'
            },
            {
              who: '回應第一人',
              date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
              replyWho: '測試第一人',
              say: 'PPPPPPPPPPOOIUGUYUYGFTYFTHBJNLK'
            }
          ]
        },
        {
          topUser: '測試第四人',
          date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
          say:
            '這個是測試第一個，測試測試：同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家',
          reply: [
            {
              who: '回應第一人',
              date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
              replyWho: '測試第一人',
              say: 'PPPPPPPPPPOOIUGUYUYGFTYFTHBJNLK'
            },
            {
              who: '回應第二人',
              date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
              replyWho: '回應第一人',
              say:
                '同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家'
            }
          ]
        },
        {
          topUser: '測試第五人',
          date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
          say:
            '這個是測試第一個，測試測試：同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家',
          reply: [
            {
              who: '回應第一人',
              date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
              replyWho: '測試第一人',
              say: 'PPPPPPPPPPOOIUGUYUYGFTYFTHBJNLK'
            },
            {
              who: '回應第二人',
              date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getDate() + '號  ' + new Date().getHours() + ':' + new Date().getMinutes(),
              replyWho: '回應第一人',
              say:
                '同事Ａ：天哪我的包子用微波爐盧微波後變得好硬;同事Ｂ：白癡喔 要加水吼 你是不是都沒在看小當家'
            }
          ]
        }
      ],
      commitDataTmp: [],
      commitDataShow: [],
      totalRead: 0,
      // page
      totalPage: 3,
      hasQueryData: true,
      pageIndex: 0,
      cantNotClickPage: false,
      showHow: 2,
      name: '',
      email: '',
      website: '',
      forWho: '',
      letter: ''
    }
  },
  watch: {
  },
  mounted () {
    this.startFun()
  },
  methods: {
    startFun () {
      // 算出總共幾筆留言
      let replyL = parseFloat(this.commitData.length)
      this.commitData.map(e => {
        replyL += parseFloat(e.reply.length)
      })
      this.totalRead = replyL

      // 控制底下留言只先顯示一筆
      this.commitDataTmp = map(this.commitData, function (o) {
        let show = [o.reply[0]]
        return { ...o, replyLength: o.reply.length, replyShow: show, open: false }
      })
      // 切割留言//一頁兩則
      let showHow = this.showHow
      this.totalPage = this.commitDataTmp.length / showHow
      // 一頁顯示幾筆//最後顯示
      this.commitDataShow = this.commitDataTmp.filter(function (item, index, array) {
        if (index < showHow) {
          return item
        }
      })
      // cookie
      if (this.$cookie.get('userName')) {
        this.name = this.$cookie.get('userName')
      }
      if (this.$cookie.get('userEmail')) {
        this.email = this.$cookie.get('userEmail')
      }
    },
    // 展開所有留言
    showReply (val) {
      this.commitDataShow[val].replyShow = this.commitDataShow[val].reply
      this.commitDataShow[val].open = true
    },
    hideReply (val) {
      this.commitDataShow[val].replyShow = [this.commitDataShow[val].reply[0]]
      this.commitDataShow[val].open = false
    },
    // 換頁
    changePageIndex (pageIndex) {
      this.pageIndex = pageIndex
      this.filterIndex()
    },
    filterIndex () {
      let toUsePage = this.pageIndex + 1
      // 一頁顯示幾筆//最後顯示
      let showHow = this.showHow
      this.commitDataShow = this.commitDataTmp.filter(function (item, index, array) {
        let toWhichIndex = showHow * toUsePage - showHow
        if (index < showHow * toUsePage) {
          if (index >= toWhichIndex) {
            return item
          }
        }
      })
    },
    // 回應人
    replySomeBody (top, bo) {
      if (top) {
        this.forWho = `@${top.topUser}`
      } else {
        this.forWho = `@${bo.who}`
      }
    },
    // 清除回應人
    cleanReply () {
      this.forWho = ''
    },
    submit () {
      if (this.name === '' || this.email === '' || this.letter === '') {
        alert('請將以下資訊填寫完整（名字、電子郵件位址）')
      } else {
        this.$cookie.set('userName', this.name)
        this.$cookie.set('userEmail', this.email)
        alert('回覆成功')
        this.letter = ''
        this.forWho = ''
      }
    }
  }
}
</script>
