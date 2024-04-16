<template>
    <button type="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'TheButton',

    props: {
        imgClass: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

button {
	background: $secondary-color;
	border-radius: 12px;
	padding: 20px;
	font-weight: bold;
	transition: .3s;
    border: 6px outset transparent;

	&:hover {
		background-color: $primary-color;
        border: 6px outset $secondary-color;
        color: $secondary-color;
        animation: glimmer 3s infinite
	}
}

@keyframes glimmer {
    25% {
        opacity: 1
    }
    40% {
        color: transparent
    }
    50% {
        opacity: 0;
        border-radius: 0
    }
    60% {
        color: transparent
    }
    75% {
        opacity: 1
    }
}
</style>