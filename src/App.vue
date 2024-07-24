<script setup lang="ts">
import Sidebar from "./components/MySidebar.vue";
import MyCard from "./components/MyCard.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <div class="container">
        <Sidebar />
        <MyCard style="width: 100%; height: 100%">
            <RouterView />
        </MyCard>
    </div>
</template>

<style scoped lang="scss">
div.container {
    $pad: 56px;
    width: calc(100% - $pad - $pad);
    height: calc(100vh - $pad - $pad);
    padding: $pad;
    display: flex;
    gap: 36px;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
}
</style>
