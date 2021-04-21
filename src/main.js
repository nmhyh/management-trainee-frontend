import 'core-js/stable';
import Vue from 'vue';
import App from './app';
import router from './router';
import CoreuiVue from '@coreui/vue';
import { iconsSet as icons } from './assets/icons/icons.js';
import store from './store/index';
import VModal from 'vue-js-modal';
import '@babel/polyfill';
import Notifications from 'vue-notification';
import Vuelidate from 'vuelidate';

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.config.productionTip = false;
Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.use(Notifications);
Vue.use(Vuelidate);
Vue.prototype.$log = console.log.bind(console);

new Vue({
    el: '#app',
    router,
    store,
    icons,
    template: '<App/>',
    components: {
        App,
    },
});