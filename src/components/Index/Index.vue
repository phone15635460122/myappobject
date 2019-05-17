<template>
  <div>
    <ul class="nav">
      <li>
        <router-link to="/home" active-class="icon1">
          <img src="../../assets/images/洋店网_首页-assets/tab_home_nor.png" alt="#">
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/menu" active-class="icon2">
          <img src="../../assets/images/洋店网_首页-assets/tab_menu_nor.png" alt="#">
          <p>分类</p>
        </router-link>
      </li>
      <li>
        <router-link to="/shopping" active-class="icon3">
          <img src="../../assets/images/洋店网_首页-assets/tab_shopping_nor.png" alt="#">
          <p>购物车</p>
        </router-link>
      </li>
      <li>
        <router-link to="/mine" active-class="icon4">
          <img src="../../assets/images/洋店网_首页-assets/tab_me_nor.png" alt="#">
          <p>我</p>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import "../../assets/js/remScale.js";

export default {
  data() {
    return {
      iconlist: {
        home: require("../../assets/images/洋店网_首页-assets/tab_home_hig.png"),
        menu: require("../../assets/images/洋店网_首页-assets/tab_menu_hig.png"),
        shopping: require("../../assets/images/洋店网_首页-assets/tab_shopping_hig.png"),
        mine: require("../../assets/images/洋店网_首页-assets/tab_me_hig.png")
      }
    };
  },
  mounted() {
    // window.location.href = "#/home";
  }
};
</script>

<style lang="">
@import "../../assets/css/reset.css";
/* .nav.icon{
    height: 1rem;
     color:orange;
     background: url('../../assets/images/洋店网_首页-assets/tab_home_nor.png') no-repeat center 0.1rem;
     background-size: 0.5rem;
} */
.nav .icon1 {
  color: orange;
  background: url("../../assets/images/洋店网_首页-assets/tab_home_hig.png")
    no-repeat center 0.12rem;
  background-size: 0.5rem;
}
.nav .icon2 {
  background: url("../../assets/images/洋店网_首页-assets/tab_menu_hig.png")
    no-repeat center 0.12rem;
  background-size: 0.5rem;
}
.nav .icon3 {
  background: url("../../assets/images/洋店网_首页-assets/tab_shopping_hig.png")
    no-repeat center 0.12rem;
  background-size: 0.5rem;
}
.nav .icon4 {
  background: url("../../assets/images/洋店网_首页-assets/tab_me_hig.png")
    no-repeat center 0.12rem;
  background-size: 0.5rem;
}
.nav {
  background-color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 10;
  border-top: 1px solid #eeeeee;
}

.nav a {
  height: 1rem;
  text-align: center;
  line-height: 0.3rem;
  float: left;
  width: 25%;
  color: #696969;
}
.nav a img {
  width: 0.5rem;
  height: 0.5rem;
  padding: 0.1rem 0;
}
</style>