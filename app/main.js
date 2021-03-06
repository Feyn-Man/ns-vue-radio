import Vue from 'nativescript-vue'
//import App from './components/App'
//import VueDevtools from 'nativescript-vue-devtools'

import store from './store';

import './sass/styles.scss';

import Home from './components/Home.vue'

//if(TNS_ENV !== 'production') {
//  Vue.use(VueDevtools)
//}
// Prints Vue logs when --env.production is *NOT* set while building
//Vue.config.silent = (TNS_ENV === 'production')

Vue.config.silent = false;

Vue.registerElement('BottomNavigation', () => require('nativescript-bottom-navigation').BottomNavigation)
Vue.registerElement('BottomNavigationTab', () => require('nativescript-bottom-navigation').BottomNavigationTab)
Vue.registerElement('OnTabSelectedEventData', () => require('nativescript-bottom-navigation'));
Vue.registerElement('CardView', () => require('nativescript-cardview').CardView);


new Vue({
  store,
  render: h => h('frame', [h(Home)])
}).$start();
