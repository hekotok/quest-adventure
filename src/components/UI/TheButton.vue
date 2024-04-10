<template>
    <button type="button">
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

button {
	background: $secondary-color;
	border-radius: 12px;
	border: 2px solid $border-color;
	padding: 10px;
	font-weight: bold
}
</style>