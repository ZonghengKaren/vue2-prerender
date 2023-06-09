import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    mounted() {
        // 预编译
        document.dispatchEvent(new Event('render-event'))
    }
}).$mount('#app')
