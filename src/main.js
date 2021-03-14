import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false

const dateFormat = 'DD/MM/YYYY'
const currentDate = moment().format(dateFormat)
const proxy = 'https://cors-anywhere.herokuapp.com/'
const url = 'https://www.cbr.ru/scripts/XML_daily.asp?date_req='
Vue.prototype.$apiPath = `${proxy}${url}${currentDate}`

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
