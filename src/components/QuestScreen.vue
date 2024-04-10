<template>
    <main class="quest">
        <img
            src="@/assets/locations/start.png"
            alt="location image"
            class="location"
        />
        <section class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque placeat veniam aliquam totam quod, ullam accusamus itaque tempore voluptates commodi laboriosam ab consequuntur dolorem voluptatum deserunt blanditiis! Voluptatum, aliquam.
        </section>
        <section class="button-wrapper">
            <the-button
                v-for="button in buttons"
                :key="button.text"
                type="button"
            >
                {{ button.text }}
            </the-button>
        </section>
    </main>
</template>

<script>
import TheButton from './UI/TheButton'

export default {
    name: 'QuestScreen',
    components: { TheButton },

    setup() {
        const buttons = [
            { text: 'Лес' },
            { text: 'Лес' },
            { text: 'Лес' },
            { text: 'Лес' }
        ]

        return { buttons }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>