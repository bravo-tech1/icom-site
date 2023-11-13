<template>
	<!-- <canvas style="max-width: 100%;" width="75" class="webgl"></canvas> -->
	<!-- <canvas style="max-width: 100%; position: relative;" width="75" class="webgl"></canvas> -->

	<div style="display: none">
		<img
			v-for="(section, index) in $store.state.sections"
			:key="'img-hidden-' + index"
			:src="section.poster"
			:alt="section.name"
		/>
	</div>
	<router-view v-slot="{ Component }">
		<transition name="fade">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script>
import { MTheme } from "./m-labs";
import MDrop from "./components/MDrop.vue";
import Masonry from "masonry-layout";
export default {
	components: { MDrop },
	name: "App",
	data() {
		return {
			int: 0,
			masonaryCreation: 0,
		};
	},
	watch: {
		$route() {
			clearInterval(this.int);
			this.int = 0;
			this.masonaryCreation = 0;
			if (this.int == 0) {
				this.int = setInterval(this.makeMasonry, 1500);
			}
			window.scrollTo(0, 0);
		},
	},
	methods: {
		makeMasonry() {
			// console.log("mas");
			if (this.masonaryCreation > 12) {
				clearInterval(this.int);
			}
			this.masonaryCreation++;
			if (document.querySelector(".grid-masonary")) {
				this.grid = new Masonry(".grid-masonary", {
					itemSelector: ".grid-item",
					gutter: 10,
				});
			} else {
				clearInterval(this.int);
			}
		},
	},
	mounted() {
		let mainTheme = new MTheme("mainTheme", {
			main: "#fff",
			accent: "#ee1b5e",
			onAccent: "#fff",
			text: "#000",
		});
		MTheme.setRadius(40);
		mainTheme.apply();
	},
};
</script>

<style lang="scss">
.center-loader {
	margin: 10rem auto;
}
* {
	box-sizing: border-box;
	scroll-behavior: smooth;
	-webkit-tap-highlight-color: transparent;
}
body {
	margin: 0;
	--accent: #ee1b5e;
}
#app {
	font-family: "Tajawal", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	font-size: 1.1em;
}

form {
	text-align: right;
	* {
		display: block;
	}
	label {
		font-size: 1em;
		margin: 1em 0 4px;
		font-weight: bold;
		color: #777;
		&:first-of-type {
			margin-top: 0;
		}
	}
	input,
	textarea,
	select {
		padding: 10px;
		border-radius: 4px;
		width: 100%;
		background: #ebf4f8;
		border: 1px solid #d5dee1;
		transition: outline 0.2s ease;
		outline: none;
		font-family: inherit;
		resize: none;
		&:focus {
			outline: 2px solid #1587b2;
		}
		&:is(textarea) {
			height: 100px;
		}
	}
}

button {
	z-index: 4;
}

button {
	cursor: pointer;
	border: none;
	outline: none;
	&.MBUTTON.bordered {
		color: $color_main;
	}
	&.close {
		position: fixed;
		top: 20px;
		right: 40px;
		border-radius: 50%;
		background-color: changeOpacity("accent", -0.2);
		color: $color_onAccent;
		aspect-ratio: 1/1;
		i {
			margin: 4px;
		}
	}
	&.close.sections {
		position: absolute;
	}
	&.slide-button {
		border-radius: 0 !important;
		margin: 0 20px;
		width: 140px;
		margin-top: 10px;
		padding: 10px 40px 10px 10px;
		font-weight: bold;
		box-shadow: 0 0 8px 2px var(--accent) inset;
		position: relative;
		overflow: hidden;
		background: transparent;
		font-size: 0.9em !important;
		&::after {
			content: "\f105";
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			top: 0;
			right: 0;
			width: 30px;
			height: 100%;
			background-color: var(--accent);
			margin-left: 10px;
			opacity: 0.6;
			font-family: "Font Awesome 5 Free";
		}
		&:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background-color: var(--accent);
			transform: translateX(-100%);
			transition: transform 0.2s ease-out;
			z-index: -1;
		}
		&:hover::before {
			transform: translateX(0);
		}
	}
}
a {
	color: inherit;
	text-decoration: none;
	transition: color 0.2s ease, background-color 0.2s ease;
}

section.gallery {
	padding: 30px 0;
	margin: 0 auto;
	width: 88vw;
	div.grid-item {
		margin-bottom: 20px;
		figure {
			width: 100%;
			padding: 0;
			margin: 0;
			position: relative;
			display: flex;
			box-shadow: 0 2px 6px 1px changeOpacity("text", -0.8);
			figcaption {
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				inset: 0;
				width: 100%;
				height: 100%;
				margin: 0;
				background: changeOpacity("text", -0.3);
				font-size: 1.4em;
				color: $color_main;
				font-weight: bold;
				cursor: pointer;
				opacity: 0;
				transition: opacity 0.2s ease-out;
			}
			&:hover figcaption {
				opacity: 1;
			}
			button:not(.close) {
				font-size: 0.8em;
				position: absolute;
				bottom: 10px;
				left: 50%;
				transform: translateX(-50%);
				white-space: nowrap;
				box-shadow: 0 2px 4px 1px changeOpacity("text", -0.6);
				&:hover {
					transform: translateX(-50%) scale(1.1);
				}
			}
			& > img {
				width: 100%;
			}
		}
		.all-images {
			z-index: 7;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: changeOpacity("text", -0.2);
			padding: 40px 12vw;
			img,
			video {
				width: 100%;
				max-width: 700px;
			}
			overflow: auto;
		}
	}
	// display: flex;
	// flex-flow: row wrap;
	// justify-content: center;
	// gap: 30px;
}

// Animations
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.4s ease;
}

::-webkit-scrollbar {
	width: 6px;
}

@media (max-width: 600px) {
	::-webkit-scrollbar {
		width: 0px;
	}
}

/* Track */
::-webkit-scrollbar-track {
	background: darker("main", 10%);
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: $color_accent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb {
	border-radius: $ui_radius;
}
@media (max-width: 600px) {
	.grid-item {
		width: 100%;
	}
}
@media (min-width: 601px) {
	.grid-item {
		width: calc(50% - 5px);
	}
}
@media (min-width: 800px) {
	.grid-item {
		width: calc(33% - 5px);
	}
}
@media (min-width: 1200px) {
	.grid-item {
		width: calc(24.8% - 5px);
	}
}
</style>
