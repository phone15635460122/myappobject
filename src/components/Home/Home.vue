<template>
  <div>
    <div class="banner">
      <img src="../../assets/images/banner.png" alt>
      <div class="scarch">
        <input type="text" placeholder="请输入想搜索的商品">
        <button>
          <img src="../../assets/images/洋店网_首页-assets/search.png" alt>
        </button>
      </div>
    </div>
    <ul>
      <li class="list" v-for="(ilist,index) in menulist" :key="index">
        <h3>
          <img :src="ilist.icon" alt="#">
          {{ilist.title}}
        </h3>
        <div style="width:100%;overflow:auto;">
          <ul class="content">
            <li v-for="(item,index) in ilist.morelist" :key="index">
              <router-link to="/home">
                <img src="../../assets/images/sp1.jpg" alt="#">
                <div class="price">
                  <span class="nowpri">￥{{item.nowprice}}</span>
                  <span class="oldpri">￥{{item.oldprice}}</span>
                </div>
                <p class="abstract">{{item.abstracts}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menulist: [
        {
          icon: require("../../assets/images/洋店网_首页-assets/hot.png"),
          title: "今日疯抢",
          morelist: [
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            }
          ]
        },
                {
          icon: require("../../assets/images/洋店网_首页-assets/hot.png"),
          title: "今日疯抢",
          morelist: [
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            }
          ]
        },
                {
          icon: require("../../assets/images/洋店网_首页-assets/hot.png"),
          title: "今日疯抢",
          morelist: [
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            }
          ]
        },
                {
          icon: require("../../assets/images/洋店网_首页-assets/hot.png"),
          title: "今日疯抢",
          morelist: [
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            }
          ]
        },
                {
          icon: require("../../assets/images/洋店网_首页-assets/hot.png"),
          title: "今日疯抢",
          morelist: [
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            }
          ]
        },
                {
          icon: require("../../assets/images/洋店网_首页-assets/hot.png"),
          title: "今日疯抢",
          morelist: [
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            },
            {
              id: 1,
              img: require("../../assets/images/sp1.jpg"),
              nowprice:'88.00',
              oldprice:'96.00',
              abstracts:'美国/SUPER MILD沐浴露500ml'
            }
          ]
        },
      ],
    };
  },
  mounted() {}
};
</script>
<style lang="" scope>
body{
    padding-bottom: 1.2rem;
}
.banner {
  height: 4.8rem;
  width: 100%;
  position: relative;
}
.banner img {
  height: 4.8rem;
  width: 100%;
}
.scarch {
  position: absolute;
  top: 0.3rem;
  left: 15%;
  width: 70%;
  height: 0.62rem;
}
.scarch input {
  border: 1px solid #fed0dc;
  border-radius: 0.15rem;
  height: 0.62rem;
  width: 100%;
  background-color: #fed0dc;
}
.scarch button {
  position: absolute;
  top: 0;
  right: 0.1rem;
  height: 0.62rem;
  border: 0;
  background-color: #fed0dc;
}
.scarch button img {
  margin-top: 0.05rem;
  height: 0.5rem;
  width: 0.5rem;
}
.list {
  height: 5.64rem;
  background-color: #fafafa;
}
.list h3 {
  margin-left: 0.2rem;
  line-height: 0.9rem;
  font-size: 0.3rem;
}
.list h3 img {
  float: left;
  height: 0.5rem;
  margin: 0.2rem;
}
.content {
  float: left;
  overflow: hidden;
  height: 4.8rem;
  /* width: auto; */
  width: 21.6rem;
}
.content li {
  float: left;
  width: 3.3rem;
  height: 4.7rem;
  background-color: white;
  margin-left: 0.2rem;
  border: 2px solid #eee;
}
.content li img {
  width: 3.24rem;
  height: 3.24rem;
}
.price {
  height: 0.5rem;
  width: 100%;
}
.price .nowpri {
  float: left;
  margin-left: 0.2rem;
  color: red;
  font-size: 0.3rem;
}
.price .oldpri {
  float: right;
  color: #aaa;
  text-decoration: line-through;
  margin-right: 0.4rem;
  padding-top: 0.06rem;
  font-size: 0.24rem;
}
.abstract {
  padding: 0 0.2rem;
  font-size: 0.28rem;
  color: #666666;
  overflow: hidden;
}
</style>
