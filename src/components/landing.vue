<template>
	<header class="landing">
		<n-navbar />
		<!-- Test -->
		<h2 v-if="section.name">{{ section.name }}</h2>
		<img v-if="section.poster" :src="section.poster" :alt="section.name" />
		<slot></slot>
	</header>
</template>

<script>
import NNavbar from "./NNavbar.vue";
export default {
	name: "landing",
	components: { NNavbar },
	props: {
		section: {
			type: Object,
		},
	},
};
</script>

<style lang="scss">
.page > header {
	height: 100vh;
	width: 100%;
	color: white;
	background: linear-gradient(
		220.1deg,
		rgba(32, 23, 72, 1) 0%,
		rgba(75, 43, 132, 1) 100%
	);
	display: flex;
	flex-flow: row wrap-reverse;
	align-content: center;
	align-items: center;
	justify-content: space-between;
	padding: 0 6vw 0;
	.titles {
		max-width: 100%;
		flex-flow: row wrap;
		.MBUTTON {
			width: 140px;
			font-weight: normal;
			font-size: 1em;
			margin: 0;
		}
	}
	h2 {
		text-align: right;
		margin: 2em 0 0;
		width: 630px;
		max-width: 90%;
	}
	h3 {
		text-align: right;
		margin: 1em 0;
	}
	.buttons {
		text-align: right;
		display: flex;
		flex-flow: row wrap;
		gap: 20px;
	}
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	ul.social-links {
		list-style: none;
		position: absolute;
		top: 50%;
		left: 6vw;
		transform: translateY(-50%);
		li {
			margin: 10px 0;
		}
	}
	h2 {
		font-size: max(3vw, 1.6em);
		margin: 0;
	}
	img:not(nav img) {
		height: 60vw;
		max-height: 450px;
	}
}

@media (max-width: 690px) {
	.page > header {
		height: 70vh !important;
	}
	.social-links {
		display: none;
	}
	.MBUTTON {
		padding-top: 11px !important;
	}
}
</style>
