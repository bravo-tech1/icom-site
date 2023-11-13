<template>
	<section class="service-section" ref="section">
		<header
			class="section-header"
			:data-index="index + 1"
			:style="
				!section.paragraphs || section.paragraphs.length == 0
					? 'height: 100%'
					: ''
			"
		>
			<figure>
				<img :src="section.poster" :alt="section.name" class="poster" />
				<img :src="section.icon" :alt="section.name" class="icon" />
			</figure>
			<h3>{{ section.name }}</h3>
			<p class="extended-p">
				{{ section.description }}
			</p>
			<p class="short-p">
				{{ `${section.description.slice(0, 110)}...` }}
			</p>
			<m-button class="slide-button" @click="$emit('expand')">
				اقرأ أكثر
			</m-button>
			<button
				class="close"
				@click="extend($event, false)"
				v-if="!section.paragraphs || section.paragraphs.length == 0"
			>
				<i class="fas fa-times"></i>
			</button>
		</header>
	</section>
</template>

<script>
export default {
	name: "SSection",
	props: {
		section: Object,
		index: Number,
	},
	methods: {
		// extend(e, decision) {
		// 	// if (decision) {
		// 	// 	if (e.currentTarget.nodeName == "BUTTON") {
		// 	// 		e.currentTarget.parentElement.parentElement.classList.add("extended");
		// 	// 	} else {
		// 	// 		e.currentTarget.classList.add("extended");
		// 	// 	}
		// 	// } else {
		// 	// 	if (e.currentTarget.nodeName == "BUTTON") {
		// 	// 		e.currentTarget.parentElement.parentElement.classList.remove(
		// 	// 			"extended"
		// 	// 		);
		// 	// 	} else {
		// 	// 		e.currentTarget.classList.remove("extended");
		// 	// 	}
		// 	// }
		// },
	},
};
</script>

<style lang="scss">
section.service-section {
	background-color: #27153d;
	transform: translateX(calc(var(--step-amount) * var(--current-step)));
	height: 100vh;
	width: 340px;
	max-width: 100%;
	flex-shrink: 0;
	color: white;
	transition: all 0.8s ease;
	border-left: 2px solid rgba(255, 255, 255, 0.05);
	overflow: hidden;
}
//   Section Header
header.section-header {
	background-color: #27153d;
	// visibility: hidden;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	padding: 40px 10px;
	height: 100vh;
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
	&:hover {
		&::after {
			opacity: 1;
		}
		img {
			&.poster {
				opacity: 1;
			}
			&.icon {
				opacity: 0;
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
</style>
