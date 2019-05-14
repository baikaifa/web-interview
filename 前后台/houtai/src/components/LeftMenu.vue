<template>
  <div class="container">
    <el-row class="menu_page">
      <el-col>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#324057"
          text-color="#fff"
          active-text-color="#409eff"
        >
          <router-link to="/home">
            <el-menu-item index="0">
              <i class="fa fa-margin fa-server"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <template v-for="item in items">
              <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                <template slot="title">
                  <i :class="'f:fa-margin'+item.icon"></i>
                  <span slot="title">{{item.name}}</span>
                </template>
                <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">
                  <el-menu-item :index="citem.path">
                    <span slot="title">{{citem.name}}</span>
                  </el-menu-item>
                </router-link>
              </el-submenu>
            </template>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "left-menu",
  data() {
    return {
      items: [
        {
          icon: "fa-money",
          name: "home数据管理",
          path: "home",
          children: [
            { path: "topicList", name: "topicList数据" },
            { path: "articleList", name: "articleList数据" },
            { path: "recommendList", name: "recommendList数据" },
            { path: "fourList", name: "fourList数据" }
          ]
        },
        {
          name: "加载更多管理",
          path: "more",
          children: [{ path: "loadMore", name: "加载更多数据" }]
        },
        {
          name: "详情管理",
          path: "detail",
          children: [{ path: "detail", name: "详情管理" }]
        },
        {
          icon: "fa-asterisk",
          name: "信息管理",
          path: "info",
          children: [{ path: "infoshow", name: "个人信息" }]
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.container {
  width: 200px;
  height: 100%;
  background: #324057;
}
</style>

