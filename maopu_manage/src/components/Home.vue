<!--
 * @Author: aaenen
 * @Date: 2021-03-17 17:36:27
 * @LastEditTime: 2021-03-17 19:21:08
 * @LastEditors: aaenen
 * @Description:
 * @FilePath: /maopu_manage/src/components/Home.vue
 * 打码不易，且行且珍惜！
-->
<template>
  <div>
    <the-header></the-header>
    <the-aside></the-aside>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './TheHeader';
import TheAside from './TheAside';

export default {
  components: {
    TheHeader,
    TheAside
  }
};
</script>
