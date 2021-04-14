import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Col, Row , Search,Tab, Tabs, Swipe, SwipeItem,Tabbar,
  TabbarItem ,Grid, GridItem , Sticky, Button,TreeSelect, Image as VanImage,
  Icon,Field,Checkbox, CheckboxGroup,Toast,DropdownMenu, DropdownItem,
  GoodsAction, GoodsActionIcon, GoodsActionButton,Popup, Cell,Area,Picker,Rate,Card,
  SwipeCell,Tag,SubmitBar,Stepper} from 'vant';
import './assets/reset.css'
Vue.use(Col).use(Row).use(Search).use(Tab).use(Tabs).use(Swipe)
    .use(SwipeItem).use(Tabbar).use(TabbarItem).use(Grid).use(GridItem)
    .use(Sticky).use(Button).use(TreeSelect).use(VanImage).use(Icon).use(Field)
    .use(Checkbox).use(CheckboxGroup).use(Toast).use(DropdownMenu).use(DropdownItem).
use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Popup).use(Cell).
use(Area).use(Picker).use(Rate).use(Card).use(SwipeCell).use(Tag).use(SubmitBar).use(Stepper);
import './assets/rem'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
