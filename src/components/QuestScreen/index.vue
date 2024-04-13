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

            <Transition name="move">
                <section
                    v-if="!isDescription"
                    class="button-wrapper"
                    @click.stop
                >
                    <the-button
                        v-for="button in buttons"
                        :key="button.text"
                        type="button"
                        @click="updateLocation(button)"
                    >
                        {{ button.text }}
                    </the-button>
                </section>
            </Transition>

            <TransitionGroup name="fade">
                <template v-if="!isDescription">
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
            </TransitionGroup>
        </main>
    </button>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
@import './style.scss'
</style>