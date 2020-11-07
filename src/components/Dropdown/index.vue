<template>
  <div :class="['drop_tmp']">
    <button
      class="drop_btn"
      type="button"
      @click="openDrop"
      @blur="exit()"
    >
      <div class="w-93pa" > <p class="nameInForm">{{placeHolder}}</p> </div>
      <div class="three_line">
        <div class="event_small_line"></div>
        <div class="event_small_line"></div>
        <div class="event_small_line"></div>
      </div>
    </button>
    <div :class="['drop_drop',isOpen &&'drop_drop_open']">
      <div
        v-for="(value,key) in data"
        :key="key"
        class="drop_item"
        @mousedown="changeHandler(value.value)"
      >
        - &nbsp;&nbsp; {{value.text}}
      </div>
    </div>
  </div>
</template>

<script>
import has from 'lodash/has'
import find from 'lodash/find'
export default {
  name: 'Dropdown',
  props: {
    name: {
      type: String
    },
    data: {
      type: Array,
      required: true
    },
    placeHolder: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  data () {
    return {
      text: '',
      isOpen: false
    }
  },
  computed: {
    maxHeight: function () {
      return `max-height:${this.listHeight}px`
    }
  },
  watch: {
    value: function (newVal) {
      this.initText(newVal)
    },
    data: function () {
      this.initText(this.value)
    }
  },
  methods: {
    openDrop () {
      this.isOpen = !(this.isOpen)
    },
    exit () {
      this.isOpen = false
    },
    changeHandler: function (value) {
      console.log(value)
      const item = find(this.data, function (o) { return o.value === value })
      // update value to v-model binding
      this.$emit('input', value)
      // fire change event
      this.$emit('change', value, item)
      this.isOpen = false
    },
    initText: function (value) {
      const self = this
      if (!String(value)) {
        self.text = self.placeHolder
      } else {
        if (self.data && self.data.length > 0) {
          const item = find(self.data, function (o) { return o.value === value })
          if (item) {
            self.text = item.text
          }
        }
      }
    }
  },
  mounted () {
    this.$el.value = this.value
    this.initText(this.value)
  }
}
</script>
