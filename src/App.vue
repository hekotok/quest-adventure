<template>
    <quest-screen />
    <inventory-items />
</template>

<script>
import QuestScreen from './components/QuestScreen'
import InventoryItems from './components/InventoryItems'

export default {
    name: 'QuestAdventure',
    components: { QuestScreen, InventoryItems }
}
</script>

<style lang="scss" scoped>
@import './styles/reset.css';
@import './styles/fonts.css';
@import './styles/variables.scss';
</style>