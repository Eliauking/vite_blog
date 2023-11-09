<template>
   <div>home</div>
</template>

<script setup>
import { useStore } from "@/store/index";
const Store = useStore();
Store.user.getRoutesList()
console.log();
</script>
<style scoped lang="scss">
</style>
