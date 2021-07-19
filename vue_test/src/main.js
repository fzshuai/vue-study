/*
  该文件是整个项目的入口文件
*/
// 引入Vue（精简版的没有模板解析器等）
// import Vue from 'vue'
// 完整版的
import Vue from 'vue/dist/vue'
// 引入App组件，它是所有组件的父组件
// import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象vm
new Vue({
  el: '#app',
  // 将App组件放入容器
  // render: h => h(App),
  // 精简版vue时用它
  // render(createElement) {
  //   return createElement('h1','你好呀')
  // }

  template: `<h1>你好呀</h1>`,
  // components: {App}
})
