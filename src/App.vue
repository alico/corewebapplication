<template>
  <div id="app">
    <Header></Header>
    <div class="container body-content margin-top">
      <router-view class></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/shared/Header";

export default {
  name: "app",
  components:{
    Header
  }
};
</script>

<style scoped>
.margin-top {
  margin-top: 20px;
}
</style>