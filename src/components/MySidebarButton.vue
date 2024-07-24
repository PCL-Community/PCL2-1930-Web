<script setup lang="ts">
import { ref } from "vue";
import { darkenHexColor, hexToRgb } from "@/assets/utils/color";

const props = defineProps<{
    text?: string;
    color?: string | string[];
}>();

const this_color = ref("#0064D9");
const this_color_d1 = ref({ r: 0, g: 0, b: 0 });
const this_color_d2 = ref({ r: 0, g: 0, b: 0 });
const this_color_d3 = ref({ r: 0, g: 0, b: 0 });
const this_color_o = ref({ r: 0, g: 0, b: 0 });
const this_style = ref({});

function useDynColors() {
    function applyTheme(isDark: boolean) {
        if (!props.color) return;
        if (isDark) {
            this_color.value = props.color[1];
        } else {
            this_color.value = props.color[0];
        }
        createStyle();
    }
    const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );
    applyTheme(darkModeMediaQuery.matches);
    darkModeMediaQuery.addEventListener("change", (event) => {
        applyTheme(event.matches);
    });
}

function createStyle() {
    this_color_d1.value = hexToRgb(this_color.value);
    this_color_d2.value = hexToRgb(this_color.value);
    this_color_d3.value = hexToRgb(this_color.value);
    this_color_o.value = hexToRgb(this_color.value);
    this_style.value = {
        "--spc": this_color.value,
        "--spc-d1": `rgba(${this_color_d1.value.r}, ${this_color_d1.value.g}, ${this_color_d1.value.b}, 0.32)`,
        "--spc-d2": `rgba(${this_color_d2.value.r}, ${this_color_d2.value.g}, ${this_color_d2.value.b}, 0.35)`,
        "--spc-d3": `rgba(${this_color_d3.value.r}, ${this_color_d3.value.g}, ${this_color_d3.value.b}, 0.35)`,
        "--spc-o": `rgba(${this_color_o.value.r}, ${this_color_o.value.g}, ${this_color_o.value.b}, 0.2)`,
    };
}

switch (typeof props.color) {
    case "string":
        this_color.value = props.color;
        createStyle();
        break;
    case "object":
        useDynColors();
        break;
}
</script>

<template>
    <div class="button-container" :style="this_style">
        <button class="brutalist-button button-1">
            <div class="image">
                <div class="openai-icon">
                    <slot name="image"></slot>
                </div>
            </div>
            <div class="button-text">
                <span> {{ props.text || "undefined" }} </span>
            </div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.button-container {
    display: flex;
    justify-content: center;
    scale: 0.45;
    margin-top: -39px;
    margin-bottom: -39px;
}

/* Common styles for both buttons */
.brutalist-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 142px;
    height: 142px;
    color: #e5dede;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Styles for the first button */
.button-1 {
    background-color: var(--spc-d1);
    border: 3px solid var(--spc);
    border-radius: 12px;
    margin-bottom: -2px;
    margin-right: -2px;
}

.button-1:hover {
    background-color: var(--spc-d2);
    border-color: var(--spc-d3);
}

.button-1::before,
.button-1::after {
    content: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
    );
    transition: 0.6s;
}

.button-1::before {
    left: -100%;
}
.button-1::after {
    left: 100%;
}

/* Styles for the OpenAI logo and text */
.image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
}

.openai-icon {
    width: 72px;
    height: 72px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.button-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.2;
    text-align: center;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
}

.button-text span {
    font-size: 32px;
    font-weight: normal;
    margin-bottom: -2px;
}

/* Hover effects */

/* Animation for the OpenAI logo */
@keyframes spin-and-zoom {
    0% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(180deg) scale(1.1);
    }
    100% {
        transform: rotate(360deg) scale(1);
    }
}

.brutalist-button:active .openai-icon,
.brutalist-button:active .openai-text,
.brutalist-button:active .button-text {
    transform: scale(0.95);
}
</style>
