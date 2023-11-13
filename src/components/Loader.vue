<template>
	<div class="loader"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.loader {
	border: 7px solid #25194f;
	border-bottom: 7px solid transparent;
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	animation: rotate 1.5s linear infinite;
}
@keyframes rotate {
	from {
		transform: rotateZ(0deg);
	}
	to {
		transform: rotateZ(360deg);
	}
}
</style>