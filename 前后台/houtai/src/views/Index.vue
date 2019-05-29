<template>
  <div class="index">
    <HeadNav></HeadNav>
    <LeftMenu></LeftMenu>
    <div class="rightContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeadNav from "../components/HeadNav";
import LeftMenu from "../components/LeftMenu";
export default {
  name: "index",
  components: {
    HeadNav,
    LeftMenu
  }
};
</script>
<style>
.index {
  width: 100%;
  height: 100%;
  /* background: red; */
  /* overflow: hidden; */
}
.rightContainer{
  position:absolute;
  top: 70px;
  left: 200px;
}
.btnRight{
  float:right;
}
</style>

