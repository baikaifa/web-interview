<template>

  <div class="infoshow">
        <router-link to="/home">回到首页</router-link>
      <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="8">
              <div class="user.avatar" alt="">  
                  <img :src="user.avatar" class="avatar" alt="">
              </div>
          </el-col>
          <el-col :span="16">
              <div class="userinfo">
                  <div class="user-item">
                      <i class="fa fa-user"></i>
                      <span>姓名：{{user.name}}</span>
                  </div>
                  <div class="user-item">
                      <i class="fa fa-cog"></i>
                      <span>职位：{{user.identity=="manager"?"管理员":"普通员工"}}</span>
                  </div>
              </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name:"infoshow",
    computed:{
        user(){
            console.log('user',this.$store.getters.user);
            return this.$store.getters.user;
        }
    }
}
</script>

<style scoped>
/* .infoshow{
position: absolute;
right:30%;
top:30%;
} */
</style>
