import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home/Home.vue'
import Category from "views/Category/Category";
import WorthBuy from "views/WorthBuy/WorthBuy";
import BuyCar from "views/BuyCar/BuyCar";
import Profile from "views/Profile/Profile";
import Login from "components/Login/Login";
import EmailLogin from "components/EmailLogin/EmailLogin";
import LoginPage from "components/LoginPage/LoginPage";
import BuyCarSuccess from "views/BuyCar/BuyCarSuccess";
import ProfileSuccess from "views/Profile/ProfileSuccess";
import Search from "components/Search/Search";
import SerachResult from "components/SerachResult/SerachResult";
import ProductDetails from "components/ProductDetails/ProductDetails";
import DisplayPage from "../components/DispalyPage/DisplayPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/worthbuy',
    name: 'WorthBuy',
    component: WorthBuy
  },
  {
    path: '/buycar',
    name: 'BuyCar',
    component: BuyCar
  },
  {
    path: '/buycarsuccess',
    name: 'BuyCarSuccess',
    component: BuyCarSuccess
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/emaillogin',
    name: 'EmailLogin',
    component: EmailLogin
  },
  {
    path: '/loginpage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/profilesuccess',
    name: 'ProfileSuccess',
    component: ProfileSuccess
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/serachresult',
    name: 'SerachResult',
    component: SerachResult
  },
  {
    path: '/productdetails',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/displaypage',
    name: 'DisplayPage',
    component: DisplayPage
  }

]

const router = new VueRouter({
  mode: 'history',

  base: process.env.BASE_URL,
  routes
})

export default router
