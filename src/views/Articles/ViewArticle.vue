<template>
	<div class="page">
		<header class="header">
			<n-navbar></n-navbar>
			<div class="header-title">المقالات</div>
		</header>
		<loader class="center-loader" v-if="loading"></loader>
		<div class="main" v-else>
			<div class="text">
				<div class="text-title">
					{{ article.title }}
				</div>
				<div class="text-description" v-html="article.description"></div>
				<div class="text-sources">
					<a
						:href="'https' + link"
						v-for="(link, i) in links"
						:key="i"
						style="display: block"
						:target="link"
						>https{{ link }}</a
					>
				</div>
			</div>
			<div class="image">
				<img :src="article.image" :alt="article.title" />
			</div>
		</div>
		<f-footer></f-footer>
	</div>
</template>

<script>
import FFooter from "../../components/FFooter.vue";
import NNavbar from "../../components/NNavbar.vue";
import Loader from "../../components/Loader.vue";
export default {
	components: { FFooter, NNavbar, Loader },
	data() {
		return {
			article: {},
			loading: true,
		};
	},
	mounted() {
		this.$store
			.dispatch("articles/fetchById", { id: this.$route.params.id })
			.then((res) => {
				this.article = res[0];
				this.loading = false;
			})
			.then(() => {
				document.querySelectorAll(".text-description img").forEach((e, i) => {
					e.alt = this.article.title + " " + i;
				});
			});
	},
	computed: {
		links() {
			return this.article.sources
				?.split(/https|http/)
				?.filter((c) => c.includes("://"));
		},
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
	height: 300px;
	@media (max-width: 768px) {
		height: 250px !important;
	}
	&-title {
		font-size: 4rem;
		font-weight: bold;
		text-align: center;
		margin: auto;
		border-bottom: 3px solid white;
		padding: 0 20px;
		@media (max-width: 576px) {
			font-size: 3rem;
			padding: 0 10px;
		}
	}
}
.main {
	margin: auto;
	max-width: 1400px;
	@media (max-width: 1400px) {
		max-width: 1140px;
	}
	@media (max-width: 992px) {
		max-width: 960px;
	}
	@media (max-width: 768px) {
		max-width: 720px;
	}
	@media (max-width: 576px) {
		max-width: 540px;
	}
	@media (max-width: 0) {
		max-width: 100%;
	}
	padding: 50px;
	display: flex;
	@media (max-width: 992px) {
		padding: 50px 20px;
		flex-direction: column-reverse;
	}
	.image {
		flex: 1;
		height: 500px;
		max-height: 500px;
		margin-bottom: 20px;
		img {
			height: 100%;
			max-width: 100%;
			object-fit: contain;
		}
		@media (max-width: 992px) {
			display: none;
		}
	}
	.text {
		flex: 2;
		text-align: right;
		padding-inline-end: 20px;
		@media (max-width: 992px) {
			padding: 0;
		}
		&-title {
			font-size: 2.5rem;
			@media (max-width: 768px) {
				font-size: 1.8rem;
			}
			font-weight: bold;
			margin-bottom: 0.7rem;
			color: var(--accent);
		}
		&-description {
			font-size: 1.3rem;
		}
		&-sources {
			font-style: italic;
			font-size: 0.9rem;
			color: #555;
			margin-top: 3rem;
		}
	}
}
</style>
<style>
.ql-align-right {
	text-align: right;
}
.ql-align-left {
	text-align: left;
}
.ql-align-center {
	text-align: center;
}
.text-description img {
	display: block;
	margin: auto;
	max-width: 100%;
}
</style>