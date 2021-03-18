<!--
 * @Author: aaenen
 * @Date: 2021-03-17 19:07:13
 * @LastEditTime: 2021-03-17 20:45:09
 * @LastEditors: aaenen
 * @Description:
 * @FilePath: /maopu_manage/src/components/TheAside.vue
 * 打码不易，且行且珍惜！
-->
<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRutes"
      :collapse="collapse"
      background-color="#334256"
      text-color="#ffffff"
      active-text-color="#20a0ff"
      router
    >
      <template v-for="item in items">
        <template>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            {{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "../assets/js/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-document",
          index: "Info",
          title: "系统首页",
        },
        {
          icon: "el-icon-document",
          index: "Consumer",
          title: "用户管理",
        },
        {
          icon: "el-icon-document",
          index: "SportList",
          title: "体育种类管理",
        },
        {
          icon: "el-icon-document",
          index: "MatchList",
          title: "赛事种类管理",
        },
        {
          icon: "el-icon-document",
          index: "TeamList",
          title: "球队列表管理",
        },
        {
          icon: "el-icon-document",
          index: "Team",
          title: "球队管理",
        },
        {
          icon: "el-icon-document",
          index: "Player",
          title: "球员管理",
        },
      ],
    };
  },
  computed: {
    onRutes() {
      return this.$route.path.replace("/", "");
    },
  },
  created() {
    //通过bus进行组件的通信，来折叠侧边栏的
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
    });
  },
};
</script>
<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0px;
  background-color: #334256;
  overflow-y: scroll;
}
.sidebar-el-menu {
  width: 150px;
}
</style>
