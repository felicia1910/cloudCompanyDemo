<template>
  <section class="edu_sec3">
    <div :class="['edu_sec3_block',val.color,key+1===3 && val.color!=='clear_light_blue_bc' && 'edu_sec3_block3']" v-for="(val,key) in sec3Data" :key="key">
      <div class="edu_sec3_number">0{{key+1}}</div>
      <div class="edu_sec3_small_box">
        <div class="edu_sec3_title">{{val.title}}</div>
        <ul class="edu_sec3_text_list" v-for="(v,index) in val.list" :key="index">
          <li class="edu_sec3_text">{{v.text}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'servicesSec3',
  props: {
    sec3Data: {}
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
