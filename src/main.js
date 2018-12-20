import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueHead from 'vue-head'

Vue.prototype.$masterUrl = 'https://faircorp-app-ce.cleverapps.io'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(VueHead, {
    complement: 'Building Lights'
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
