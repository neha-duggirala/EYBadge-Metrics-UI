import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import AxiosService from './services/common/AxiosService';
import router from './router'


Vue.config.productionTip = false

AxiosService.getConfig().then(()=>{
  new Vue({
    render: h => h(App),
    router,
    vuetify
  }).$mount('#app');  
});

