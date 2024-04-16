<template>
    <div
        class="inventory"
        @mouseover="isShowItems = true"
        @mouseleave="isShowItems = false"
    >
        <transition name="move-swap">
            <ul v-if="isShowItems">
                <li
                    v-for="(value, itemName) in inventory"
                    :key="itemName"
                    class="inventory-item"
                >
                    <template v-if="itemName !== 'riches'">
                        <span :class="`${itemName}--img`"></span>
                        <p>{{ value }}</p>
                    </template>
                </li>
            </ul>
            <div v-else class="inventory-item">
                <span class="money--img"></span>
                <p>{{ inventory.money }}</p>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'InventoryItems',

    setup() {
        const store = useStore()

        const inventory = store.state.inventory
        const isShowItems = ref(false)

        return { inventory, isShowItems }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>