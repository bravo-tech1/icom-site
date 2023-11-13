<template>
	<div class="my-card">
		<router-link :to="{ name: 'view-article', params: { id: article.id } }">
			<div class="image">
				<img :src="article.image" :alt="article.title" />
			</div>
		</router-link>
		<div class="contant">
			<div class="title">
				{{ article.title }}
			</div>
			<div class="summary">
				{{
					article.summary > 100
						? article.summary.slice(0, 100) + "..."
						: article.summary
				}}
			</div>
			<router-link :to="{ name: 'view-article', params: { id: article.id } }">
				<button class="slide-button my-btn">اقرأ أكثر</button>
			</router-link>
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
	display: flex;
	align-items: center;
	.image {
		height: 150px;
		width: 150px;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
	.contant {
		text-align: right;
		padding-right: 20px;
	}
	.title {
		font-size: 1.3rem;
		font-weight: 600;
		line-height: 1.8rem;
		max-height: 5.4rem;
		overflow: hidden;
	}
	.summary {
		line-height: 1.3rem;
		max-height: 5.2rem;
		overflow: hidden;
	}
	.my-btn {
		margin: 0;
		margin-top: 10px;
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
.slide-button {
	font-weight: bold;
	font-size: 0.8em;
	font-family: inherit;
}
</style>