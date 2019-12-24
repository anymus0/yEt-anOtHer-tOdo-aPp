//Globals
import FlashMessage from '@smartweb/vue-flash-message';
import BootstrapVue from 'bootstrap-vue'

//bootstrap_custome.scss: contains Bootstrap + custome modifications
import './assets/scss/bootstrap_custome.scss'

import Vue from 'vue'
import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(FlashMessage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
