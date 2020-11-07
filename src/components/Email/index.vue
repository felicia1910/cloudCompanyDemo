<template>
  <div class="w-100pa">
    <div class="error_mes" v-if="errMes">{{errMes}}</div>
    <div :class="['home_sec2_mail_box',errMes&&'home_sec2_mail_box_no']">
      <div class="name_mail_box">
        <input class="home_sec2_name" placeholder="*Name" v-model="name"/>
        <input class="home_sec2_mail" placeholder="*Email" v-model="email" type="email" required/>
      </div>
      <input class="home_sec2_subject" placeholder="Subject" v-model="subject"/>
      <textarea class="home_sec2_message" cols="50" rows="5" placeholder="*Message" v-model="message"></textarea>
      <div class="home_sec2_message_btn" @click="sendMes">Message</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheHeader',
  components: {
  },
  props: {

  },
  data () {
    return {
      email: '',
      name: '',
      subject: '',
      message: '',
      errMes: ''
    }
  },
  mounted () {

  },
  methods: {
    sendMes () {
      if (!this.email || !this.name || !this.message) {
        let mail = (this.email) ? '' : 'email/'
        mail = (this.name && this.message && mail) ? 'email' : mail
        let name = (this.name) ? '' : 'name/'
        name = (this.email && this.message && name) ? 'name' : name
        let message = (this.message) ? '' : 'message'
        this.errMes = 'Please fill in the required field-' + mail + name + message
      } else {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)) {
          this.errMes = ''
          alert('Sent successfully!')
        } else {
          this.errMes = 'Valid email required.'
        }
      }
    }
  }
}
</script>
