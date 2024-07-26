<script setup lang="ts">
import { useRoute } from "vue-router";
import MyLink from "@/components/MyLink.vue";
import GithubUser from "@/components/GithubUser.vue";

const route = useRoute();
console.log(route.query);
</script>

<template>
    <div class="view">
        <header>
            <img src="^/images/book.png" width="32" />
            <h2>预设主页</h2>
        </header>
        <hr />
        <main>
            <table class="MyTable">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <th>主页名称</th>
                    <th>仓库 / 主页链接</th>
                    <th>联网更新地址</th>
                    <th>作者</th>
                </thead>
                <tr>
                    <td>Minecraft 新闻</td>
                    <td>
                        <MyLink
                            text="Light-Beacon/PCL2-NewsHomepage"
                            url="https://github.com/Light-Beacon/PCL2-NewsHomepage"
                            color="var(--ml-github)"
                            type="GitHub" />
                    </td>
                    <td>
                        <div class="flex">
                            <MyLink
                                text="pcl.mcnews.thestack.top"
                                url="https://pcl.mcnews.thestack.top"
                                color="var(--ml-outlink)"
                                type="Outlink" />
                            <MyLink
                                text="news.bugjump.net"
                                url="https://news.bugjump.net"
                                color="var(--ml-outlink)"
                                type="Outlink" />
                        </div>
                    </td>
                    <td>
                        <GithubUser username="Light-Beacon" />
                    </td>
                </tr>
                <tr>
                    <td>简单主页</td>
                    <td>
                        <MyLink
                            text="MFn233/PCL-Mainpage"
                            url="https://github.com/MFn233/PCL-Mainpage"
                            color="var(--ml-github)"
                            type="GitHub" />
                    </td>
                    <td>
                        <MyLink
                            text="MFn233/PCL-Mainpage@main/Custom.xaml"
                            url="https://gitee.com/mfn233/PCL-Mainpage/raw/main/Custom.xaml"
                            color="var(--ml-gitee)"
                            type="Gitee" />
                    </td>
                    <td>
                        <GithubUser username="MFn233" />
                    </td>
                </tr>
                <tr>
                    <td>每日整合包推荐</td>
                    <td>
                        <MyLink
                            text="sodamc.com"
                            url="https://sodamc.com/31402-29042412.html"
                            color="var(--ml-custom-1)"
                            type="Custom">
                            <template #image>
                                <img src="^/images/out/sodamc.png" width="30" />
                            </template>
                        </MyLink>
                    </td>
                    <td>
                        <MyLink
                            text="pclsub.sodamc.com"
                            url="https://pclsub.sodamc.com/"
                            color="var(--ml-custom-1)"
                            type="Custom">
                            <template #image>
                                <img src="^/images/out/sodamc.png" width="30" />
                            </template>
                        </MyLink>
                    </td>
                    <td>
                        <GithubUser username="wkea" />
                    </td>
                </tr>
                <tr>
                    <td>Minecraft 皮肤推荐</td>
                    <td>
                        <MyLink
                            text="sodamc.com"
                            url="https://sodamc.com/45080-44052300.html"
                            color="var(--ml-custom-1)"
                            type="Custom">
                            <template #image>
                                <img src="^/images/out/sodamc.png" width="30" />
                            </template>
                        </MyLink>
                    </td>
                    <td>
                        <MyLink
                            text="forgepixel.com"
                            url="https://forgepixel.com/pcl_sub_file"
                            color="var(--ml-custom-1)"
                            type="Custom">
                            <template #image>
                                <img src="^/images/out/forgepixel.png" width="30" />
                            </template>
                        </MyLink>
                    </td>
                    <td>
                        <GithubUser username="wkea" />
                    </td>
                </tr>
            </table>
        </main>
    </div>
</template>

<style lang="scss" scoped>
div.view {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    header {
        display: flex;
        height: 32px;
        align-items: center;
        gap: 12px;
        margin-left: 8px;
    }
    hr {
        opacity: 0.3;
        width: 100%;
        margin: 12px 0 24px 0;
    }
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
