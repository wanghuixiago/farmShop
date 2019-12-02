<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/> 
    <ul class="footer-nav">
      <li class="footer-nav-item"><router-link to="/">首页</router-link></li>
      <li class="footer-nav-item"><router-link to="/Class">分类</router-link></li>
      <li class="footer-nav-item"><router-link to="/Shop">购物车</router-link></li>
      <li class="footer-nav-item"><router-link to="/Me">我的</router-link></li>
    </ul>
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
.footer-nav{
  display: flex;
  position:fixed;
  width:100%;
  bottom:0;
  background-color: #42b983;
  color:#fff;
  height:2rem;
  line-height:2rem;
}
.footer-nav-item{
  width:25%;
  text-align: center;
}
.footer-nav-item a{
  color:#fff;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
