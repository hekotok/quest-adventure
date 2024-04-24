import { ref, watch } from 'vue'

import TheButton from '@/components/UI/TheButton'
import { start, startDescription, suicideDescription, dead } from './locations/start'

export default {
    name: 'QuestScreen',
    components: { TheButton },

    setup () {
        const imgSrc = ref(start.imgSrc)
        const isShowImg = ref(true)

        const isDescription = ref(true)
        const description = ref(startDescription)
        const isShowDescription = ref(true)

        const buttons = ref(start.buttons)
        let locationText = start.text

        const updateLocation = button => {
            const location = button.click()

            if (location) {
                imgSrc.value = location.imgSrc
                buttons.value = location.buttons

                isDescription.value = button.isDescription || false
                if (button.isDescription) {
                    description.value = button.description
                    locationText = location.text
                }
                else
                    description.value = location.text
            }
            else
                backToStart()

            button.isDescription && start.buttons.map(startButton => startButton.text).includes(button.text)
				&& (start.buttons[start.buttons.findIndex(startButton => startButton.text === button.text)].isDescription = false)
        }

        const hideDescription = () => {
            isDescription.value = false
            description.value = locationText
        }

        const backToStart = () => {
            imgSrc.value = start.imgSrc
            buttons.value = start.buttons

            isDescription.value = false
            description.value = start.text
        }

        const suicide = () => {
            isDescription.value = true
            imgSrc.value = dead.imgSrc
            buttons.value = dead.buttons
            locationText = dead.text
            description.value = suicideDescription

            start.buttons.forEach((_, idx) => start.buttons[idx].isDescription = true)
        }

        watch(imgSrc, () => {
            isShowImg.value = false
            setTimeout(() => isShowImg.value = true, 500)
        })
        watch(description, () => {
            watch(description, () => {
                if (!isDescription.value) {
                    isShowDescription.value = false
                    setTimeout(() => isShowDescription.value = true, 500)
                }
            })
        })

        return {
            buttons,
            imgSrc,
            description,
            isDescription,
            isShowImg,
            isShowDescription,

            updateLocation,
            hideDescription,
            backToStart,
            suicide
        }
    }
}