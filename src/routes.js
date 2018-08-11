import Home from './pages/home.vue';
import Panel from './pages/panel.vue';
import PanelLeft from './pages/panel-left.vue';
import PanelRight from './pages/panel-right.vue';
import About from './pages/about.vue';
import Stock from './pages/stock.vue';
import Purorder from './pages/purorder.vue';
import StockSearch from './pages/stocksearch.vue';
import Business from './pages/business.vue';
import Tabs from './pages/tabs.vue';
import Purhistory from './pages/purhistory.vue';
import Allcategories from './pages/allcategories.vue';
import Information from './pages/information.vue';
import Tree from './pages/tree.vue';
export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/Stock',
    component: Stock,
  },
  {
    path: '/Purorder',
    component: Purorder,
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
  {
    path: '/stocksearch/',
    component: StockSearch,
  },
  {
    path: '/business/',
    component: Business,
  },
  {
    path: '/tabs/',
    component: Tabs,
  },
  {
    path: '/purhistory/',
    component: Purhistory,
  },
  {
    path: '/allcategories/',
    component: Allcategories,
  },
  {
    path: '/information/',
    component: Information,
  },
  {
    path: '/tree/',
    component: Tree,
  }
]
