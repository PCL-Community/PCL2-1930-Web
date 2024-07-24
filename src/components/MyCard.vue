<template>
    <div class="MyCard">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
div.MyCard {
    background-color: var(--card-bg);
    border-radius: 12px;
    box-shadow: var(--card-shadow);
    padding: 12px;
    overflow: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
