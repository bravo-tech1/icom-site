<template>
	<div class="page">
		<header class="header">
			<n-navbar></n-navbar>
			<div class="header-title">المقالات</div>
		</header>
		<loader v-if="loading" class="center-loader"></loader>
		<div class="main" v-else>
			<div class="my-row">
				<div class="my-col" v-for="article in articles" :key="article.id">
					<article-card :article="article"></article-card>
				</div>
			</div>
		</div>
		<f-footer></f-footer>
	</div>
</template>

<script>
import ArticleCard from "../../components/ArticleCard.vue";
import NNavbar from "../../components/NNavbar.vue";
import FFooter from "../../components/FFooter.vue";
import Loader from "../../components/Loader.vue";
import { mapState } from "vuex";
export default {
	components: {
		ArticleCard,
		FFooter,
		NNavbar,
		Loader,
	},
	data() {
		return {
			loading: true,
		};
	},
	computed: {
		...mapState({
			articles: (state) => state.articles.articles,
		}),
	},
	mounted() {
		this.$store
			.dispatch("articles/fetchAll")
			.then(() => (this.loading = false));
	},
};
</script>

<style scoped lang="scss">
.header {
	background: linear-gradient(
		220.1deg,
		rgba(32, 23, 72, 1) 0%,
		rgba(75, 43, 132, 1) 100%
	);
	height: 300px !important;
	&-title {
		font-size: 4rem;
		@media (max-width: 992px) {
			font-size: 3rem;
		}
		font-weight: bold;
		text-align: center;
		margin: auto;
		border-bottom: 3px solid white;
		padding: 0 20px;
	}
}
.main {
	margin: auto;
	padding: 50px 0;
	max-width: 1320px;
	.my-col {
		width: 25%;
	}
	@media (max-width: 1400px) {
		max-width: 1140px;
		.my-col {
			width: 33.333%;
		}
	}
	@media (max-width: 992px) {
		max-width: 960px;
	}
	@media (max-width: 768px) {
		max-width: 720px;
		.my-col {
			width: 50%;
		}
	}
	@media (max-width: 576px) {
		max-width: 540px;
		.my-col {
			width: 100%;
		}
	}
	@media (max-width: 0) {
		max-width: 100%;
	}
	.my-row {
		display: flex;
		flex-wrap: wrap;
		.my-col {
			padding: 0 20px 50px;
		}
	}
}
</style>