<!--
 * @Author: aaenen
 * @Date: 2021-03-17 19:07:28
 * @LastEditTime: 2021-03-17 20:47:52
 * @LastEditors: aaenen
 * @Description: 后台管理页面的头部
 * @FilePath: /maopu_manage/src/components/TheHeader.vue
 * 打码不易，且行且珍惜！
-->
<template>
  <div class="header">
    <!-- 折叠图片 -->
    <div class="collapse-btn" @click="collapseChange">
      <i class="el-icon-menu"> </i>
    </div>
  </div>
</template>

<script>
import bus from "../assets/js/bus";
export default {
  data(){
    return {
      collapse:true
    }
  },
  methods:{
    collapseChange(){
      this.collapse = !this.collapse;
      bus.$emit('collapse',this.collapse)
    }
  }
};
</script>
<style scoped>
.header {
  position: relative;
  background-color: #253041;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #ffffff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
</style>
