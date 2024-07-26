<script setup lang="ts">
const props = defineProps<{
    username: string;
}>();
</script>

<template>
    <a :href="`https://github.com/${props.username}`" target="_blank">
        @{{ props.username }}
    </a>
</template>

<style lang="scss" scoped>
a {
    color: var(--fg);
    font-weight: 800;
}
</style>
