<template>
  <div id="app">
    <h1 class="logo"></h1>
    <div class="wrapper">
      <transition name="fade" mode="out-in">
        <router-view class="router"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/common.css";
@import "./assets/fonts/iconfont.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app .logo {
  width: 4.5rem;
  height: 4.5rem;
  background: url("./assets/img/logo.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
}
.wrapper {
  margin-top: 5rem;
}
</style>
