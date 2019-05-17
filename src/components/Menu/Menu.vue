<template>
  <div>
    <div class="scarch">
      <input type="text" placeholder="请输入想搜索的商品">
      <button>
        <img src="../../assets/images/洋店网_首页-assets/search.png" alt>
      </button>
    </div>
    <ul class="navlist">
        <li @click="Conmenu(nav)" v-for="(nav,index) in navlist" :key=index :class='nav.act'>
            母婴专区
        </li>
    </ul>
    <ul class="conlist">
        <li class="listmore" v-for="(item,index) in shoplist" :key=index>
            <router-link to="/menu">
            <img src="../../assets/images/sp2.jpg" alt="#">
            <h3>驱蚊防蚊</h3>
            </router-link>
        </li>
    </ul>
    <!-- <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: 'left',
      act: "",
      shoplist: [
        {
          1: 1
        },
        {
          1: 1
        },
        {
          1: 1
        },
        {
          1: 1
        },
        {
          1: 1
        },
        {
          1: 1
        },
        {
          1: 1
        },
        {
          1: 1
        },
        {
          1: 1
        },
        {
          1: 1
        },
        {
          1: 1
        }
      ],
      navlist: [
        { act: "", 1: 1 },
        { act: "", 1: 1 },
        { act: "", 1: 1 },
        { act: "", 1: 1 }
      ]
    };
  },
  methods: {
    Conmenu(res) {
      for(let i=0;i<this.navlist.length;i++){
          this.navlist[i].act=""
      }      
      res.act = "active";
      this.$router.push("/menu");
    }
  }
};
</script>
<style lang="" scope>
/* .el-tabs{
    padding-top: 1.2rem;
}
.el-tabs__item{

} */


.scarch {
  position: fixed;
  width: 100%;
  height: 1.2rem;
  background: #ff9900;
}
.scarch input {
  position: absolute;
  top: 0.3rem;
  left: 15%;
  border: 1px solid #ffe1b5;
  border-radius: 0.15rem;
  height: 0.62rem;
  width: 70%;
  background-color: #ffe1b5;
}
.scarch button {
  position: absolute;
  top: 0.4rem;
  right: 1.2rem;
  height: 0.5rem;
  border: 0;
  background-color: #ffe1b5;
}
.scarch button img {
  margin-top: 0.05rem;
  height: 0.5rem;
  width: 0.5rem;
}
.navlist {
  position: fixed;
  top: 1.2rem;
  width: 30%;
  height: 100%;
  background: #fafafa;
}

.navlist li {
  height: 0.96rem;
  line-height: 0.96rem;
  text-align: center;
}
.active {
  background-color: white;
  border-left: 5px solid blue;
}
.conlist {
  margin-top: 1.4rem;
  float: right;
  width: 70%;
}
.listmore {
  float: left;
  width: 42%;
  /* height: 4rem; */
  margin-left: 4%;
  margin-bottom: 0.24rem;
  border: 2px solid #1d84a7;
  border-radius: 0.1rem;
}
.listmore img {
  width: 100%;
}
.listmore h3 {
  background-color: #1d84a7;
  width: 100%;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.24rem;
  color: white;
}
</style>