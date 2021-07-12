import Vue from 'vue/dist/vue'
import App from './App.vue'

Vue.config.productionTip = false // 关闭生产提示

/*
  vue.runtime.common.js和Vue.esm.js区别
    vue.runtime.common.js
      1.不包含模板解析器，打包后体积小
      2.配置项中的不能写template，要用render: h => h(App)代替
    vue.esm.js
      1.包含模板解析器，打包好铺体积大
      2.配置可以写template
*/

new Vue({
  el: '#app',
  // render: h => h(App), // h函数默认调用loader解析template
  components: {App},
  template: `<App/>`
})
