<template>
	<section class="services" @mouseover="slide($event)">
		<div id="slider-controls">
			<button @click="previous()">
				<i class="fas fa-angle-right"></i>
			</button>
			<button @click="next()">
				<i class="fas fa-angle-left"></i>
			</button>
		</div>
		<div
			id="sections"
			:style="`--current-step: 0; --step-amount: ${stepAmount}px`"
		>
			<s-section
				v-for="(section, index) in sections"
				:key="`${section}-${section.name}`"
				:section="section"
				:data-index="index + 1"
				:style="`--far-from-start: ${index * 340 + 160}px`"
				:index="index"
				@expand="expand(index)"
			/>
		</div>
		<div class="back-logo" @click="hideSideArticle()" v-if="showSide">
			<i class="fa fa-angle-double-right"></i>
		</div>
		<div ref="extended" class="side-article" v-if="showSide">
			<header class="section-header-e">
				<figure>
					<img
						:src="sections[sectionIndex].poster"
						:alt="sections[sectionIndex].name"
						class="poster"
					/>
				</figure>
				<h3>{{ sections[sectionIndex].name }}</h3>
				<p class="extended-p">
					{{ sections[sectionIndex].description }}
				</p>
			</header>
			<article
				class="section-body"
				v-if="
					sections[sectionIndex].paragraphs &&
					sections[sectionIndex].paragraphs.length > 0
				"
			>
				<button class="close sections" @click="hideSideArticle()">
					<i class="fas fa-times"></i>
				</button>
				<div
					v-for="(paragraph, index) in sections[sectionIndex].paragraphs"
					:key="`${sections[sectionIndex].name}-paragraph-${index}`"
					v-html="paragraph"
				></div>
			</article>
			<article
				v-else
				class="section-body"
				style="text-align: center; font-size: 1.5rem; padding: 60px 20px 50px"
			>
				<button class="close sections" @click="hideSideArticle()">
					<i class="fas fa-times"></i></button
				>سيتم تزويدكم بالتفاصيل باقرب وقت
			</article>
		</div>
	</section>
</template>

<script>
import SSection from "./SSection.vue";
export default {
	name: "slider",
	components: { SSection },
	data() {
		return {
			sections: this.$store.state.sections,
			currentStep: 0,
			stepAmount: 0,
			STEP_NUMBERS: 0,
			sectionIndex: 0,
			showSide: false,
		};
	},
	watch: {
		currentStep(newStep) {
			document
				.getElementById("sections")
				.style.setProperty("--current-step", newStep);
		},
	},
	methods: {
		// toggleSide() {
		// 	if (this.showSide) {
		// 		document.querySelector("body").style.overflow = "hidden";
		// 		this.$refs["extended"].classList.add("extended");
		// 	} else {
		//     document.querySelector("body").style.overflow = "auto";
		// 		this.$refs["extended"].classList.remove("extended");
		// 		setTimeout(() => {
		//       this.showSide = false;
		// 		}, 500);
		// 	}
		// },
		showSideArticle() {
			document.querySelector("body").style.overflow = "hidden";
			setTimeout(() => {
				this.$refs["extended"].classList.add("extended");
			}, 10);
		},
		hideSideArticle() {
			document.querySelector("body").style.overflow = "auto";
			this.$refs["extended"].classList.remove("extended");
			setTimeout(() => {
				this.showSide = false;
			}, 500);
		},
		expand(i) {
			this.sectionIndex = i;
			this.showSide = true;
			this.showSideArticle();
		},
		slide(e) {
			if (e.clientX < 20) {
				this.next();
			}
		},
		setSteps() {
			const SECTION_WIDTH = 340;
			const ALL_SECTIONS_WIDTH = SECTION_WIDTH * this.sections.length;
			const SLIDER_CONTROL_WIDTH = 160;
			const SHOW_AREA = window.innerWidth - SLIDER_CONTROL_WIDTH;
			const MAX_HIDDEN_AREA = ALL_SECTIONS_WIDTH - SHOW_AREA;
			this.STEP_NUMBERS = Math.floor(MAX_HIDDEN_AREA / SECTION_WIDTH);
			this.stepAmount = MAX_HIDDEN_AREA / this.STEP_NUMBERS;
		},
		next() {
			if (window.innerWidth < 1024) return;
			this.setSteps();
			if (this.currentStep < this.STEP_NUMBERS) {
				this.currentStep++;
			}
		},
		previous() {
			if (this.currentStep > 0) {
				this.currentStep--;
			}
		},
	},
	mounted() {
		this.setSteps();
		window.addEventListener("resize", this.setSteps);
	},
};
</script>

<style lang="scss" scoped>
section.services {
	background-color: #27153d;
	width: 100%;
	overflow: hidden;
	margin: 20px 0;
	padding: 0;
	display: flex;
	flex-flow: row nowrap;
	position: relative;
	div#sections {
		display: inline-flex;
		flex-flow: row nowrap;
		right: 0;
		transition: all 0.2s ease-out;
	}
	div#slider-controls {
		z-index: 4;
		display: flex;
		flex-shrink: 0;
		width: 160px;
		flex-flow: row nowrap;
		align-items: center;
		padding: 0;
		padding-right: 20px;
		background: linear-gradient(
			220.1deg,
			rgba(32, 23, 72, 1) 0%,
			rgba(75, 43, 132, 1) 100%
		);
		&::after {
			display: none;
		}
		button {
			width: 30px;
			height: 30px;
			background: none;
			padding: 10px;
			margin: 10px;
			border: 2px solid white;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			transition: all 0.1s ease;
			&:last-of-type {
				transform: scale(1.2);
				border-color: var(--accent);
			}
			&:hover {
				transform: scale(1.2);
				border-color: var(--accent);
			}
		}
	}
}
.side-article {
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 6;
	transform: translateX(100%);
	transition: 500ms;
	max-width: none;
	//   height: 100%;
	background-color: #27153d;
	z-index: 4;
	display: block !important;
	border: 1px solid $color_text;
	overflow: auto;
	color: white;
	// visibility: hidden;
}
.back-logo {
	display: block !important;
	transform: scaleX(0.6);
	position: fixed;
	left: 0;
	padding: 10px;
	padding-left: 5px;
	top: 50%;
	font-size: 2rem;
	* {
		color: rgb(135, 135, 135);
	}
	z-index: 5;
}
header.section-header-e {
	background-color: #27153d;
	// visibility: hidden;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: 40px 10px;
	height: auto;
	transition: height 0.2s ease;
	position: relative;
	button.close {
		display: none;
	}
	&::after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			60deg,
			transparent 0%,
			rgba(255, 255, 255, 0.3) 100%
		);
		opacity: 0;
		transition: opacity 0.2s ease;
		z-index: 2;
	}
	&::before {
		content: attr(data-index);
		position: absolute;
		top: 20px;
		right: 10px;
		z-index: 1;
	}
	figure {
		margin: 0;
		padding: 0;
		position: relative;
		img {
			width: 100%;
			max-width: 400px;
			margin: 20px 0;
			z-index: 3;
			transition: opacity 0.4s ease-out;
			&.poster {
				opacity: 0;
			}
			&.icon {
				width: 80px;
				position: absolute;
				margin: auto auto;
				top: 50%;
				right: 50%;
				transform: translate(50%, -50%);
			}
		}
	}

	h3 {
		height: 50px;
	}
	p {
		width: 90%;
		max-width: 1000px;
		font-size: 0.8em;
		color: var(--accent);
		line-height: 1.6em;
		margin: 0 auto;
		height: 100px;
		overflow: hidden;
		&.extended-p {
			display: none;
		}
		&.short-p {
			display: block;
		}
	}
}
// Extended Section
.extended {
	transform: translateX(0);
	header.section-header-e {
		&::before {
			display: none;
		}
		p {
			height: auto;
			white-space: normal;
			&.extended-p {
				display: block;
			}
			&.short-p {
				display: none;
			}
		}
	}
	article.section-body {
		display: block;
	}
	// transform: translateX(var(--far-from-start));

	&::before {
		opacity: 0;
	}
	button.close {
		display: block;
	}
	button.slide-button {
		display: none;
	}
	img {
		&.poster {
			opacity: 1 !important;
		}
		&.icon {
			opacity: 0 !important;
		}
	}
}
@media (max-width: 1020px) {
	section.services {
		div#sections {
			flex-flow: row wrap;
			section {
				justify-content: center;
				border-bottom: 2px solid rgba(255, 255, 255, 0.05);
				flex-grow: 1;
				&.extended {
					transform: translate(0);
					height: 100vh;
				}
			}
		}
		& > div:not(#sections) {
			display: none;
		}
	}
}

//   Section Body
article.section-body {
	width: 100%;
	text-align: right;
	background: $color_main;
	color: $color_text;
	// display: none;
	position: relative !important;
	> div {
		padding: 20px;
	}
	> p {
		max-width: 1000px;
	}
}
</style>
