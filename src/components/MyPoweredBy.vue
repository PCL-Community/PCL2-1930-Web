<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    title: string;
    text: string;
    spc?: string;
    spcd1?: string;
    spcd2?: string;
    spcd3?: string;
    spco?: string;
}>();

const currentStyle = computed(() => {
    return {
        "--spc": props.spc,
        "--spc-d1": props.spcd1,
        "--spc-d2": props.spcd2,
        "--spc-d3": props.spcd3,
        "--spc-o": props.spco,
    };
});
</script>

<template>
    <div class="button-container" :style="currentStyle">
        <button class="brutalist-button button-1">
            <div class="imageawa">
                <slot name="image"></slot>
            </div>
            <div class="button-text">
                <span> {{ props.title }} </span>
                <span> {{ props.text }} </span>
            </div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
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
    box-shadow: 4px 4px 1px var(--bg1);
}

.button-1:hover {
    background-color: var(--spc-d2);
    border-color: var(--spc-d3);
    transform: translate(-6px, -6px) rotate(1deg);
    box-shadow: 10px 10px 0 var(--bg1), 15px 15px 20px var(--spc-o);
}

.button-1::before,
.button-1::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        var(--shadow-c2),
        transparent
    );
    opacity: 0.1;
    transition: 0.6s;
}

.button-1::before {
    left: -100%;
}
.button-1::after {
    left: 100%;
}

.button-1:hover::before {
    animation: swipeRight 1.5s infinite;
}
.button-1:hover::after {
    animation: swipeLeft 1.5s infinite;
}

@keyframes swipeRight {
    100% {
        transform: translateX(200%) skew(-45deg);
    }
}

@keyframes swipeLeft {
    100% {
        transform: translateX(-200%) skew(-45deg);
    }
}

div.imageawa {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Hover effects */
.brutalist-button:hover .openai-logo {
    transform: translateY(-10px);
}

.brutalist-button:hover div.imageawa {
    width: 40px;
    height: 40px;
}

.bruta.brutalist-button:hover .openai-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
}

/* Styles for the OpenAI logo and text */
.openai-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
}

div.imageawa {
    width: 64px;
    height: 64px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.openai-text {
    font-size: 24px;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
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
    color: var(--fg1);
}

.button-text span:first-child {
    margin-top: 12px;
    font-size: 12px;
    font-weight: normal;
}

.button-text span:last-child {
    font-size: 16px;
}

/* Hover effects */
.brutalist-button:hover .openai-logo {
    transform: translateY(-10px);
}

.brutalist-button:hover div.imageawa {
    width: 40px;
    height: 40px;
}

.brutalist-button:hover .button-text,
.brutalist-button:hover .openai-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 12px;
}

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

.brutalist-button:hover div.imageawa {
    animation: spin-and-zoom 4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
    animation-delay: 0.15s;
}

.brutalist-button:hover .openai-text {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.brutalist-button:active div.imageawa,
.brutalist-button:active .openai-text,
.brutalist-button:active .button-text {
    transform: scale(0.95);
}
</style>

<style lang="scss">
div.imageawa {
    margin-top: 0;
    img {
        width: 120px;
        height: 120px;
        transition: scale 0.1s ease-in-out;
        &.avatar {
            width: 90px;
            height: 90px;
            border-radius: 50%;
        }
    }
}

.brutalist-button:hover {
    div.imageawa {
        margin-top: 12px;
        img {
            scale: 0.53;
            &.avatar {
                scale: 0.5;
            }
        }
    }
}
</style>
