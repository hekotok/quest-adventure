<template>
    <main class="quest">
        <img
            :src="imgPath"
            alt="location image"
            class="location"
        />
        <section class="description">
            Куда пойти хочешь, добрый путник?
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
import TheButton from '@/components/UI/TheButton'

export default {
    name: 'QuestScreen',
    components: { TheButton },

    setup() {
        const imgPath = new URL('@/assets/img/locations/start.png', import.meta.url).href
        const buttons = [
            { text: 'Лес' },
            { text: 'Чилл' },
            { text: 'Город' },
            { text: 'Гробницы' },
            { text: 'Выблядки' }
        ]

        return { buttons, imgPath }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>