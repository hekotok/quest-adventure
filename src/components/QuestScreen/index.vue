<template>
    <button
        type="button"
        :disabled="!isDescription"
        class="hide-description"
        @click="hideDescription"
    >
        <main class="quest">
            <img
                :src="imgSrc"
                alt="location image"
                class="location"
            />
            <section class="description">
                {{ description }}
            </section>

            <template v-if="!isDescription">
                <section
                    class="button-wrapper"
                    @click.stop
                >
                    <the-button
                        v-for="button in buttons"
                        :key="button.text"
                        type="button"
                        @click="updateLocation(button.click, button.isDescription, button.description)"
                    >
                        {{ button.text }}
                    </the-button>
                </section>
                <button
                    type="button"
                    class="home--img"
                    @click="backToStart"
                ></button>
                <button
                    type="button"
                    class="suicide--img"
                    @click="suicide"
                ></button>
            </template>
        </main>
    </button>
</template>

<script>
import { ref } from 'vue'

import TheButton from '@/components/UI/TheButton'
import { start, startDescription, suicideDescription, dead } from './locations/start'

export default {
    name: 'QuestScreen',
    components: { TheButton },

    setup () {
        const imgSrc = ref(start.imgSrc)
        const buttons = ref(start.buttons)

        const isDescription = ref(true)
        const description = ref(startDescription)
        let locationText = start.text

        const updateLocation = (adventure, isLocationDescription, locationDescription) => {
            const location = adventure()

            if (location) {
                imgSrc.value = location.imgSrc
                buttons.value = location.buttons

                isDescription.value = isLocationDescription
                if (isDescription.value) {
                    description.value = locationDescription
                    locationText = location.text
                }
                else
                    description.value = location.text
            }
            else
                backToStart()
        }

        const hideDescription = () => {
            isDescription.value = false
            description.value = locationText
        }

        const backToStart = () => {
            isDescription.value = false
            imgSrc.value = start.imgSrc
            buttons.value = start.buttons
            description.value = start.text
        }

        const suicide = () => {
            isDescription.value = true
            imgSrc.value = dead.imgSrc
            buttons.value = dead.buttons
            locationText = dead.text
            description.value = suicideDescription
        }

        return {
            buttons,
            imgSrc,
            description,
            isDescription,
            updateLocation,
            hideDescription,
            backToStart,
            suicide
        }
    }
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>