/* eslint import/no-extraneous-dependencies: "off" */
import Vue from 'vue';
import Framework7 from 'framework7/dist/framework7.esm.bundle';
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle'; // eslint-disable-line
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css';
/* OR for Material Theme: 
import Framework7ThemeMd from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/

import Framework7Icons from 'framework7-icons/css/framework7-icons.css';
import app from './app.vue';
import routes from './routes';
// import style from './assets/common.less';
import rem from './setuprem';
// Install Plugin
Vue.use(Framework7Vue, Framework7);

// Demo Theme
let theme = 'ios';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}
console.log(theme);
// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  render: c => c('app'),
  components: {
    app,
  },
  framework7: {
    id: 'io.framework7.testapp',
    theme,
    root: '#app',
    // dynamicNavbar: true,
    // animateNavBackIcon: true,
    view: {
      animate: true,
      pushState: true,
      history: true,
      pushStateSeparator: '#',
    }
    // pushStateSeparator: '',
  },
  routes,
});
