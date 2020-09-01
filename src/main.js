import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import VueHorizontalTimeline from "vue-horizontal-timeline";
Vue.use(VueHorizontalTimeline);

Vue.config.productionTip = false

  new Vue({
    render: h => h(App),
    router,
    vuetify,
    store
  }).$mount('#app');  


