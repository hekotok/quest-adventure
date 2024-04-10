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

	&:hover {
		transform: scale(1.15)
	}
}
</style>