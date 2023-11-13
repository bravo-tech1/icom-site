<template>
	<div class="my-card">
		<a :href="'/blog/' + article.id">
			<div class="image">
				<img :src="article.image" :alt="article.title" />
				<div class="summary">
					{{ article.summary }}
				</div>
			</div>
		</a>
		<div class="text">
			<div class="title">{{ article.title }}</div>
			<!-- <router-link :to="{ name: 'view-article', params: { id: article.id } }"> -->
			<m-button class="slide-button my-btn" :href="'/blog/' + article.id"
				>اقرأ أكثر</m-button
			>
			<!-- </router-link> -->
		</div>
	</div>
</template>

<script>
export default {
	props: ["article"],
};
</script>

<style scoped lang="scss">
.my-card {
	width: 100%;
	.image {
		height: 400px;
		width: 100%;
		position: relative;
		overflow: hidden;
		margin-bottom: 0.5rem;
		border-radius: 10px;
		overflow: hidden;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
		.summary {
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			overflow: hidden;
			transition: 200ms;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.3rem;
			opacity: 0;
			background: #27153d;
			color: white;
			padding: 0 20px;
			&::before {
				background-image: linear-gradient(
					60deg,
					transparent 0%,
					rgba(255, 255, 255, 0.3) 100%
				);
				content: "";
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				left: 0;
			}
		}
		&:hover {
			.summary {
				opacity: 1;
			}
		}
	}
	.text {
		.title {
			font-size: 1.5rem;
			font-weight: bold;
			margin-bottom: 0.5rem;
		}
		.my-btn {
			color: var(--accent);
			box-shadow: 0 0 5px var(--accent) inset;
			&::after {
				color: white;
			}
			&:hover {
				color: white;
			}
		}
	}
}
.slide-button {
	font-weight: bold;
	font-size: 0.8em;
	font-family: inherit;
}
</style>