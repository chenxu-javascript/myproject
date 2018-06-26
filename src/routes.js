import Home from './pages/home.vue';
import Panel from './pages/panel.vue';
import PanelLeft from './pages/panel-left.vue';
import PanelRight from './pages/panel-right.vue';
import About from './pages/about.vue';
export default [
  {
    path: '/',
    component: Home,
  },
  // About page
  {
    path: '/about/',
    component: About,
  },
  // Left Panel
  {
    path: '/panel-left/',
    component: PanelLeft,
  },
  // Right Panel
  {
    path: '/panel-right/',
    component: PanelRight,
  },
  {
    path: '/panel/',
    component: Panel,
  },
]
