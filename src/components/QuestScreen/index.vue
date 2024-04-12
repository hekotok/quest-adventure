<template>
    <main class="quest">
        <img
            :src="imgPath"
            alt="location image"
            class="location"
        />
        <section class="description">
            {{ description }}
        </section>
        <section class="button-wrapper">
            <the-button
                v-for="button in buttons"
                :key="button.text"
                type="button"
                @click="updateLocation(button.onClick)"
            >
                {{ button.text }}
            </the-button>
        </section>
    </main>
</template>

<script>
import { ref } from 'vue'

import TheButton from '@/components/UI/TheButton'
import { forest } from './locations/forest'

export default {
    name: 'QuestScreen',
    components: { TheButton },

    setup() {
        const description = ref('Куда пойти хочешь, добрый путник?')
        const imgPath = ref(new URL('@/assets/img/locations/start.png', import.meta.url).href)

        const buttons = ref([
            { text: 'Лес', onClick: forest, description: '', isDescription: true },
            { text: 'Чилл', onCLick: () => {}, description: '', isDescription: true },
            { text: 'Город', onCLick: () => {}, description: '', isDescription: true },
            { text: 'Гробницы', onCLick: () => {}, description: '', isDescription: true },
            { text: 'Выблядки', onCLick: () => {}, description: '', isDescription: true }
        ])

        const updateLocation = newLocation => {
            const { imgSrc, text, selection } = newLocation()

            imgPath.value = imgSrc
            description.value = text
            buttons.value = selection
        }

        return { buttons, imgPath, description, updateLocation }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>