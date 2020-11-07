<template>
  <section class="edu_sec1">
    <div :class="['edu_sec1_box',val.color]" v-for="(val,key) in sec1Data" :key="key">
      <i :class="['edu_esc1_icon',val.icon,val.where!=='middle'&&'white']"></i>
      <div :class="['edu_sec1_text',val.where !=='middle'&&'white']">{{val.text}}</div>
    </div>

  </section>
</template>

<script>

export default {
  name: 'servicesSec',
  props: {
    sec1Data: {}
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
