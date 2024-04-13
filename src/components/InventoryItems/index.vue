<template>
    <div
        class="inventory"
        @mouseover="showItems = true"
        @mouseleave="showItems = false"
    >
        <transition name="move-swap">
            <ul v-if="showItems">
                <li
                    v-for="(value, itemName) in inventory"
                    :key="itemName"
                    class="inventory-item"
                >
                    <span :class="`${itemName}--img`"></span>
                    <p>{{ value }}</p>
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

export default {
    name: 'InventoryItems',

    setup() {
        const inventory = {
            money: 500,
            knifes: 2,
            knifes1: 2,
            knifes2: 2,
            knifes3: 2
        }

        const showItems = ref(false)

        return { inventory, showItems }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>