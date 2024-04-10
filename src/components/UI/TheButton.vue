<template>
    <button type="button">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

button {
	background: $secondary-color;
	border-radius: 12px;
	padding: 20px;
	font-weight: bold;
	transition: .3s;

	&:hover {
		transform: scale(1.15);
	}
}
</style>