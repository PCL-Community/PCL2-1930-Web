<script setup lang="ts">
const props = defineProps<{
    text: string;
    url?: string;
    color?: string;
    type: "Outlink" | "GitHub" | "Gitee" | "Custom";
}>();

const this_style = {
    "--mlspc": props.color,
};
</script>

<template>
    <span class="example-2" :style="this_style">
        <li class="icon-content">
            <a
                :href="props.url"
                :aria-label="props.text"
                :data-social="props.text.toLowerCase()">
                <div class="filled"></div>
                <svg
                    v-if="props.type == `Outlink`"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M72.704 48.64h385.097143a36.132571 36.132571 0 0 1 3.510857 72.045714l-3.510857 0.146286H108.763429v794.331429h794.404571V566.272a36.132571 36.132571 0 0 1 72.045714-3.510857l0.146286 3.510857v385.097143a36.132571 36.132571 0 0 1-32.621714 35.986286l-3.437715 0.146285H72.704a36.132571 36.132571 0 0 1-35.986286-32.621714L36.571429 951.296V84.699429C36.571429 66.121143 50.688 50.541714 69.193143 48.786286L72.704 48.64zM951.296 36.571429c19.968 0 36.132571 16.164571 36.132571 36.132571v252.708571a36.132571 36.132571 0 0 1-72.192 0V156.525714L602.843429 448.146286a36.132571 36.132571 0 0 1-48.420572 0.731428l-2.633143-2.486857a36.132571 36.132571 0 0 1-0.731428-48.420571l2.486857-2.633143 306.980571-286.573714H698.587429a36.132571 36.132571 0 0 1 0-72.192h252.708571z"></path>
                </svg>
                <svg
                    v-else-if="props.type == `GitHub`"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30">
                    <path
                        d="M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512a426.410667 426.410667 0 0 0 291.754667 404.821333c21.333333 3.712 29.312-9.088 29.312-20.309333 0-10.112-0.554667-43.690667-0.554667-79.445333-107.178667 19.754667-134.912-26.112-143.445333-50.133334-4.821333-12.288-25.6-50.133333-43.733333-60.288-14.933333-7.978667-36.266667-27.733333-0.554667-28.245333 33.621333-0.554667 57.6 30.933333 65.621333 43.733333 38.4 64.512 99.754667 46.378667 124.245334 35.2 3.754667-27.733333 14.933333-46.378667 27.221333-57.045333-94.933333-10.666667-194.133333-47.488-194.133333-210.688 0-46.421333 16.512-84.778667 43.733333-114.688-4.266667-10.666667-19.2-54.4 4.266667-113.066667 0 0 35.712-11.178667 117.333333 43.776a395.946667 395.946667 0 0 1 106.666667-14.421333c36.266667 0 72.533333 4.778667 106.666666 14.378667 81.578667-55.466667 117.333333-43.690667 117.333334-43.690667 23.466667 58.666667 8.533333 102.4 4.266666 113.066667 27.178667 29.866667 43.733333 67.712 43.733334 114.645333 0 163.754667-99.712 200.021333-194.645334 210.688 15.445333 13.312 28.8 38.912 28.8 78.933333 0 57.045333-0.554667 102.912-0.554666 117.333334 0 11.178667 8.021333 24.490667 29.354666 20.224A427.349333 427.349333 0 0 0 938.666667 512c0-235.733333-190.933333-426.666667-426.666667-426.666667z"></path>
                </svg>
                <svg
                    v-else-if="props.type == `Gitee`"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m259.168-568.896h-290.752a25.28 25.28 0 0 0-25.28 25.28l-0.032 63.232c0 13.952 11.296 25.28 25.28 25.28h177.024a25.28 25.28 0 0 1 25.28 25.28v12.64a75.84 75.84 0 0 1-75.84 75.84h-240.224a25.28 25.28 0 0 1-25.28-25.28v-240.192a75.84 75.84 0 0 1 75.84-75.84h353.92a25.28 25.28 0 0 0 25.28-25.28l0.064-63.2a25.312 25.312 0 0 0-25.28-25.312H417.184a189.632 189.632 0 0 0-189.632 189.6v353.952c0 13.952 11.328 25.28 25.28 25.28h372.928a170.656 170.656 0 0 0 170.656-170.656v-145.376a25.28 25.28 0 0 0-25.28-25.28z"></path>
                </svg>
                <slot name="image" v-else-if="props.type == `Custom`"></slot>
            </a>
            <div class="tooltip">{{ props.text }}</div>
        </li>
    </span>
</template>

<style lang="scss" scoped>
.example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-content {
        margin: 0 10px;
        position: relative;
        list-style: none;
        .tooltip {
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            color: var(--fg);
            padding: 6px 10px;
            border-radius: 15px;
            opacity: 0;
            visibility: hidden;
            font-size: 14px;
            transition: all 0.3s ease;
            width: max-content;
            z-index: 10;
        }
        a {
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 20%;
            color: var(--fg);
            background-color: var(--bg2);
            transition: all 0.3s ease-in-out;
            &:hover {
                box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 50%);
                color: white;
                .filled {
                    height: 100%;
                }
            }
            .filled {
                position: absolute;
                top: auto;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 0;
                background-color: #000;
                transition: all 0.3s ease-in-out;
            }
            .filled,
            & ~ .tooltip {
                background-color: var(--mlspc);
            }
        }
    }
    .icon-content:hover .tooltip {
        opacity: 1;
        visibility: visible;
        top: -50px;
    }
}
</style>

<style lang="scss" deep>
span.example-2 .icon-content a svg {
    position: relative;
    width: 30px;
    height: 30px;
    path {
        fill: var(--fg1);
    }
}
svg,
img {
    z-index: 1;
}
</style>
