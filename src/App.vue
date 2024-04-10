<template>
    <quest-screen />
    <!-- <settings-button></settings-button>
        <inventory-items></inventory-items> -->
</template>

<script>
import QuestScreen from './components/QuestScreen'

export default {
    name: 'QuestAdventure',
    components: { QuestScreen }
}
</script>

<style lang="scss" scoped>
@import './styles/reset.css';
@import './styles/variables.scss';
</style>