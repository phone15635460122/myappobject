<template>
  <div>
    <div class="top">
      <span class="setself">
        <img src="../../assets/images/timg.png" alt>
      </span>
      <h2>个人中心</h2>
        <el-badge :value="5" style="padding:0">
        <img src="../../assets/images/news.png" alt>
      </el-badge>
    </div>
    <div class="collect">
        <div>这是一个头像管理</div>
    </div>
    这是个人中心页面
  </div>
</template>
<script>
export default {};
</script>
<style lang="" scope>
.top {
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: orange;
}

.top .setself img {
  float: left;
  padding: 0.3rem;
  /* margin-top: 0.3rem; */
  height: 0.6rem;
  /* margin-left: 0.5rem; */
}
.top h2 {
  float: left;
  font-size: 0.4rem;
  margin-left: 1.5rem;
  color: white;
  line-height: 1.2rem;
}
.el-badge{
  float: right;
  margin: 0.3rem;
}
.el-badge img {
  height: 0.6rem;
}
.collect{

}
</style>