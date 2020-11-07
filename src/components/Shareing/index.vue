<template>
  <div class="share_box_rea">
    <div class="share_box" @click="openHandler">
      <div class="share_hover_box">
        <social-sharing :url="nowUrl" inline-template >
          <div class="share_ul">
            <div class="share_li">
              <network network="facebook">
                <i class="fab fa-facebook"></i>Facebook
              </network>
            </div>
            <div class="share_li">
              <network network="pinterest">
                <i class="fab fa-pinterest"></i>Pinterest
              </network>
            </div>
            <div class="share_li">
              <network network="twitter">
                <i class="fab fa-twitter"></i> Twitter
              </network>
            </div>
          </div>
        </social-sharing>
      </div>
      <div class="share">share</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Shareing',
  components: {
  },
  props: {
    nowUrl: {}
  },
  data () {
    return {
      openIt: false
    }
  },
  mounted () {

  },
  methods: {
    openHandler () {
      this.openIt = !(this.openIt)
    }
  }
}
</script>
