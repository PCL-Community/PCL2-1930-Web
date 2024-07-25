<script setup lang="ts">
import MyPoweredBy from "@/components/MyPoweredBy.vue";
</script>

<template>
    <main>
        <div class="Title">
            <img src="^/images/logoraw.png" width="128" />
            <span class="title">Welcome.</span>
            <span class="desp">PCL2 #1930(Discussion) 文档 | 网页镜像</span>
        </div>
        <div class="pb-container">
            <MyPoweredBy
                title="Powered By"
                text="1930Builder"
                spc="#6B9F93"
                spcd1="rgba(107, 159, 147, 0.35)"
                spcd2="rgba(107, 159, 147, 0.37)"
                spcd3="rgba(107, 159, 147, 0.4)"
                spco="rgba(107, 159, 147, 0.2)">
                <template #image>
                    <img src="^/images/builder.png" width="64" />
                </template>
            </MyPoweredBy>
            <MyPoweredBy
                title="Degisn & Create By"
                text="凌云"
                spc="#5631A7"
                spcd1="rgba(86, 49, 167, 0.35)"
                spcd2="rgba(86, 49, 167, 0.37)"
                spcd3="rgba(86, 49, 167, 0.4)"
                spco=" rgba(86, 49, 167, 0.2)">
                <template #image>
                    <img class="avatar" src="^/images/lingyun.png" />
                </template>
            </MyPoweredBy>
            <MyPoweredBy
                title="Maintain By"
                text="无聊的小洛"
                spc="#ADCFEB"
                spcd1="rgba(173, 207, 235, 0.35)"
                spcd2="rgba(173, 207, 235, 0.37)"
                spcd3="rgba(173, 207, 235, 0.4)"
                spco=" rgba(173, 207, 235, 0.2)">
                <template #image>
                    <img class="avatar" src="^/images/wuliaodexiaoluo.jpg" />
                </template>
            </MyPoweredBy>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 120px 1fr 3fr;
    gap: 0px 0px;
    grid-template-areas:
        "NULL"
        "Title"
        "PoweredBy";
}

div.Title {
    grid-area: Title;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span.title {
        font-size: 60px;
        font-weight: 600;
    }
    span.desp {
        font-size: 24px;
        font-weight: 400;
        opacity: 0.7;
    }
}

div.pb-container {
    grid-area: PoweredBy;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 120px;
}
</style>
