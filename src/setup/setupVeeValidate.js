import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import validators from '../utils/validators'
import each from 'lodash/each'
import ch from '@/utils/validators/message/ch'

// 取出所有自定義 validators
each(validators, (validator, key) => {
  // 註冊 validator
  Validator.extend(key, validator)
})

// global config
const config = {
  errorBagName: 'errors', // change if property conflicts
  fieldsBagName: 'fields',
  delay: 0,
  dictionary: {
    ch
  },
  strict: true,
  classes: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true,
  locale: 'ch'
}

Vue.use(VeeValidate, config)
