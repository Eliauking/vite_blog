
<template>
  <!-- 路由出口 -->
  <router-view></router-view>
</template>
<script setup>
import { useStore } from "@/store/index";
const Store = useStore();
Store.user.getRoutesList();
console.log();
</script>
<style scoped lang="scss">
</style>
