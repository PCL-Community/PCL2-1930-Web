<script setup lang="ts">
import { useRouter } from "vue-router";
import MyCard from "./MyCard.vue";
import MySidebarButton from "./MySidebarButton.vue";

const openUri = (uri: string) => {
    window.open(uri, "_blank");
};

const switchPage = (path: string) => {
    const $router = useRouter();
    $router.push(path);
};
</script>

<template>
    <MyCard style="width: 80px; height: 100%">
        <div class="items">
            <MySidebarButton
                color="#6B9F93"
                @click="openUri('https://github.com/orgs/PCL-Community')">
                <template #image>
                    <img
                        src="/logo.png"
                        width="86"
                        style="transform: translate(-6px, -6px)" />
                </template>
            </MySidebarButton>
            <hr />
            <div class="item-center">
                <MySidebarButton
                    color="#FF7800"
                    style="
                        --spc-d1: rgba(255, 120, 0, 0.25);
                        --spc-d2: rgba(255, 120, 0, 0.27);
                        --spc-d3: rgba(255, 120, 0, 0.27);
                    "
                    @click="">
                    <template #image>
                        <svg
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="86"
                            style="transform: translate(-6px, -6px)">
                            <path
                                d="M469.333333 85.333333a384 384 0 0 1 293.290667 631.893334l166.698667 166.826666a32 32 0 0 1-41.685334 48.341334l-3.626666-3.114667-166.656-166.784A384 384 0 1 1 469.333333 85.333333z m0 64a320 320 0 1 0 0 640 320 320 0 0 0 0-640z m33.408 109.525334l4.352 0.469333a213.504 213.504 0 0 1 172.245334 172.202667 32 32 0 0 1-63.018667 11.264 149.504 149.504 0 0 0-120.490667-120.448 32 32 0 0 1 6.912-63.488z"
                                fill="#FF7800"></path>
                        </svg>
                    </template>
                </MySidebarButton>
                <MySidebarButton color="#80C46D" @click="">
                    <template #image>
                        <img
                            src="^/images/minecraft.png"
                            width="86"
                            style="transform: translate(-6px, -6px)" />
                    </template>
                </MySidebarButton>
                <MySidebarButton color="#2D95F3" @click="">
                    <template #image>
                        <img
                            src="^/images/pcl.ico"
                            width="86"
                            style="transform: translate(-6px, -6px)" />
                    </template>
                </MySidebarButton>
                <MySidebarButton color="#FF1414" @click="">
                    <template #image>
                        <img
                            src="^/images/compass.png"
                            width="86"
                            style="transform: translate(-6px, -6px)" />
                    </template>
                </MySidebarButton>
                <MySidebarButton
                    color="#7700FF"
                    style="
                        --spc-d1: rgba(119, 0, 255, 0.3);
                        --spc-d2: rgba(119, 0, 255, 0.32);
                        --spc-d3: rgba(119, 0, 255, 0.32);
                    "
                    @click="">
                    <template #image>
                        <img
                            src="^/images/book.png"
                            width="86"
                            style="transform: translate(-6px, -6px)" />
                    </template>
                </MySidebarButton>
                <MySidebarButton color="#F8DA3F" @click="">
                    <template #image>
                        <img
                            src="^/images/gold.png"
                            width="86"
                            style="transform: translate(-6px, -6px)" />
                    </template>
                </MySidebarButton>
            </div>
            <hr />
            <MySidebarButton
                text="GitHub"
                :color="['#a5a5a5', '#5c5c5c']"
                @click="
                    openUri('https://github.com/PCL-Community/PCL2-1930-Web')
                ">
                <template #image>
                    <svg
                        t="1721716831825"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M64 512c0 195.2 124.8 361.6 300.8 422.4 22.4 6.4 19.2-9.6 19.2-22.4v-76.8c-134.4 16-140.8-73.6-150.4-89.6-19.2-32-60.8-38.4-48-54.4 32-16 64 3.2 99.2 57.6 25.6 38.4 76.8 32 105.6 25.6 6.4-22.4 19.2-44.8 35.2-60.8-144-22.4-201.6-108.8-201.6-211.2 0-48 16-96 48-131.2-22.4-60.8 0-115.2 3.2-121.6 57.6-6.4 118.4 41.6 124.8 44.8 32-9.6 70.4-12.8 112-12.8 41.6 0 80 6.4 112 12.8 12.8-9.6 67.2-48 121.6-44.8 3.2 6.4 25.6 57.6 6.4 118.4 32 38.4 48 83.2 48 131.2 0 102.4-57.6 188.8-201.6 214.4 22.4 22.4 38.4 54.4 38.4 92.8v112c0 9.6 0 19.2 16 19.2C832 876.8 960 710.4 960 512c0-246.4-201.6-448-448-448S64 265.6 64 512z"
                            p-id="4247"
                            fill="var(--fg1)"></path>
                    </svg>
                </template>
            </MySidebarButton>
        </div>
    </MyCard>
</template>

<style lang="scss" scoped>
div.items {
    $paddding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - $paddding - $paddding);
    gap: 24px;
    overflow: hidden;
    padding: $paddding 0;
    div.item-center {
        justify-content: space-around;
        align-items: center;
    }
    hr {
        opacity: 0.4;
        width: 20px;
        margin: auto 0;
    }
}
</style>
