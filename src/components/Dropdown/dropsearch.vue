<template>
  <div :class="['dropdown',...customerClass]" v-if="options">

    <!-- Dropdown Input -->
    <input class="displayNone" v-model="filteredOptionsItem"/>
    <input class="dropdown-input box-reset btn dropdown-toggle text-left text-dark d-flex justify-content-between align-items-center fs-1-2rem bg-transparent res-label-drop-inside"
      :name="name"
      @focus="showOptions()"
      @blur="exit()"
      v-model="searchFilter"
      :disabled="readonly"
      :placeholder="$t('btn.choice')"
      autocomplete="off"
      @click.once="()=>{
        if (name && $validator && $validator.validate) {
          $validator.validate(name)
        }
      }" />
    <div class="triangle-search"></div>

    <!-- Dropdown Menu -->
    <div class="dropdown-content  col-12 fs-1-2rem y-scroll x-noscroll"
      v-show="optionsShown" :style="maxHeight">
      <a
        class="dropdown-item rounded"
        @mousedown="selectOption(option)"
        v-for="(option, index) in filteredOptions"
        :key="index">
          {{ option.name || option.id || '-' }}
      </a>
    </div>
  </div>
</template>

<script>
import map from 'lodash/map'

export default {
  name: 'Dropdownsearch',
  template: 'Dropdownsearch',
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    housingEstatesnameInput: {},
    housingEstatesid: {},
    customerClass: {
      type: Array,
      default: function () {
        return []
      }
    },
    name: {
      type: String,
      required: false,
      default: 'dropdown',
      note: 'Input name'
    },
    options: {
      type: Array,
      required: true,
      default: [],
      note: 'Options of dropdown. An array of options with id and name'
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Please select an option',
      note: 'Placeholder of dropdown'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
      note: 'Disable the dropdown'
    },
    filteredOptionsOut: {},
    housingEstatesname: {}
  },
  data () {
    return {
      selected: {},
      optionsShown: false,
      searchFilter: '',
      filteredOptionsItem: true
    }
  },
  created () {
    // this.$emit('selected', this.selected);
    this.runFun()
  },
  computed: {
    filteredOptions () {
      const filtered = []
      let text = this.searchFilter
      let textsp = text.split('\\').join(' ')
      const regOption = new RegExp(textsp, 'ig')
      for (const option of this.options) {
        if (textsp.length < 1 || option.name.match(regOption)) {
          filtered.push(option)
        }
      }
      return filtered
    },
    maxHeight: function () {
      return `max-height:${this.listHeight}px`
    }
  },
  async mounted () {
    this.filteredOptionsItem = this.filteredOptionsOut
    this.searchFilter = this.housingEstatesnameInput
    await this.runFun()
  },
  methods: {
    runFun () {
      this.searchFilter = this.housingEstatesname
      this.selected = this.options
    },
    selectOption (option) {
      this.selected = option
      this.optionsShown = false
      this.searchFilter = this.selected.name
      this.$emit('selected', this.selected)
    },
    showOptions () {
      if (!this.disabled) {
        this.searchFilter = ''
        this.optionsShown = true
      }
    },
    exit () {
      if (this.housingEstatesid == undefined || this.housingEstatesid === '') {
        this.searchFilter = ''
      }
      this.optionsShown = false
    },
    // Selecting when pressing Enter
    keyMonitor: function (event) {
      if (event.key === 'Enter' && this.filteredOptions[0]) { this.selectOption(this.filteredOptions[0]) }
    }
  },
  watch: {
    // housingEstatesid(){
    //   if(this.housingEstatesid!==''||this.housingEstatesid!==undefined){
    //     this.runFun()
    //   }
    // },
    housingEstatesnameInput (val) {
      this.searchFilter = val
    },
    searchFilter (val) {
      if (this.filteredOptions.length === 0) {
        this.selected = {}
      } else {
        this.selected = this.filteredOptions[0]
      }

      this.$emit('filter', this.searchFilter)
    },
    filteredOptionsOut: function (newVal, val) {
      this.filteredOptionsItem = newVal
    },
    filteredOptionsItem: function () {
      this.$emit('input', this.filteredOptionsItem)
    },
    filteredOptions: function (val) {
      if ((val.length < 1 && this.housingEstatesid === '') || (val.length < 1 && this.housingEstatesid == undefined)) {
        this.filteredOptionsItem = false
      } else {
        this.filteredOptionsItem = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown {
    position: relative;
    display: block;
    margin: auto;
    width: 80%;
    .dropdown-input {
      cursor: pointer;
      min-width: 100%;
      max-width: 100%;
      &:hover {
        background: #f8f8fa;
      }
    }
    .dropdown-content {
      position: absolute;
      top:55px;
      background-color: #fff;
      max-height: 178px;
      overflow: auto;
      z-index: 10;
      min-width:auto;
      padding: .25rem;
      border:solid 1px #eee;
      border-radius: 5px;
    }
    .dropdown-content a:hover{
      background-color: #d71a21;
      color: #fff;
      border-radius: .25rem;
      cursor: pointer;
    }
    .dropdown:hover .dropdowncontent {
      display: block;
      background-color: #d71a21;
      color: #fff;
      border-radius: .25rem;
    }
  }
</style>
