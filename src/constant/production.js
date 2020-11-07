import baseConstant from './development'
let constant = baseConstant

// 僅調整與 development 有差別的部分就好，修改方式如下以 env 為例
constant = { ...constant, env: 'production' }

export default constant
