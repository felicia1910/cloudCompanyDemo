<template lang="pug">
  div( :class="['alert alertClass', ...customerClass]" @click="closeMes")
    a.fas.fa-exclamation-circle.text-left.text-light-red.fs-1-5rem( :id="id" ref="tooltip"
      v-if="fakerAlert" href="javascript:;" v-b-tooltip.click.left
      :title="errorMessage")
    a.fas.fa-exclamation-circle.text-left.text-light-red.fs-1-5rem( :id="id" ref="tooltip"
      v-if="!fakerAlert && errorMessage" href="javascript:;")
</template>

<script>
import commonHelper from '@/utils/commonHelper'

export default {
  name: 'VaildateErrorMessage',
  props: {
    customerClass: {
      type: Array,
      default: function () {
        return []
      }
    },
    errorMessage: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      id: commonHelper.genGuid(),
      fakerAlert: false
    }
  },
  mounted () {
    if (this.errorMessage) {
      this.$nextTick(() => {
        this.$root.$emit('bv::show::tooltip', this.id)
        this.$root.$emit('bv::disable::tooltip', this.id)
      })
    }
  },
  watch: {
    errorMessage: function (newVal) {
      if (newVal) {
        this.fakerAlert = true
        this.$nextTick(() => {
          this.$root.$emit('bv::show::tooltip', this.id)
          this.$root.$emit('bv::disable::tooltip', this.id)
        })
      } else {
        this.fakerAlert = false
      }
    }
  },
  methods: {
    closeMes: function () {
      if (this.errorMessage && this.fakerAlert) {
        this.fakerAlert = false
      } else if (this.errorMessage && !this.fakerAlert) {
        this.fakerAlert = true
        this.$nextTick(() => {
          this.$root.$emit('bv::show::tooltip', this.id)
          this.$root.$emit('bv::disable::tooltip', this.id)
        })
      }
    }
  }
}
</script>
