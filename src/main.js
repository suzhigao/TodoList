
// // Vue2
// import { createApp } from 'vue'
// import App from './App.vue'

// export const eventBus = createApp(App)

// createApp(App).mount('#app')



// 该文件是整个项目的入口文件
//引入Vue
import Vue from "vue"

//引入App组件,它是所有组件的父组件
import App from './App.vue'

//引入VueRouter
// import VueRouter from 'vue-router'

//引入路由器
// import router from './router'


//关闭vue的生产提示
Vue.config.productionTip = false

// Vue.use(VueRouter)

//创建Vue实例对象---vm
new Vue({
    el:'#app',
    render: h => h(App),
    // store,
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    // router:router
})