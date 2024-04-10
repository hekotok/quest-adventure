<template>
    <main class="quest">
    </main>
</template>

<script>
export default {
    name: 'QuestScreen'
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.quest {
    @include size(50%, 90%);

    position: absolute;
    background: $primary-color;
    border-radius: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
</style>