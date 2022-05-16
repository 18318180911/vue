import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import ProdItem from '@/components/Demo1.vue'
// Vue.component('ProdItem', ProdItem);

Vue.config.productionTip = false

Vue.filter("reserseFn", function(value) {
  return value.split("").reverse().join("");
});
Vue.filter("moneyFilter", function(value, unit, unit1) {
  return `${value} ${unit} ${unit1 || ''}`
});


new Vue({
  render: h => h(App),
}).$mount('#app')
