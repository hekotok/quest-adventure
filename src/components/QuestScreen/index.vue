<template>
    <button
        type="button"
        :disabled="!isDescription"
        class="hide-description"
        @click="hideDescription"
    >
        <main class="quest">
            <transition name="fade">
                <img
                    v-if="isShowImg"
                    :src="imgSrc"
                    alt="location image"
                    class="location"
                />
            </transition>
            <transition name="fade">
                <section v-if="isShowDescription" class="description">
                    {{ description }}
                </section>
            </transition>

            <transition name="fade">
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
            </transition>

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