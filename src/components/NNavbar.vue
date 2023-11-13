<template>
	<nav>
		<a href="/"> <img src="../assets/logo.svg" alt="Icom's Logo" /></a>

		<transition name="fade-top">
			<ul class="nav_links" v-if="menu_shown || !mobileScreen">
				<li><m-button type="bordered" href="/">الرئيسية</m-button></li>
				<li>
					<m-button type="bordered" href="/#about">عن الشركة</m-button>
				</li>
				<li>
					<m-button type="bordered" href="/#services">خدماتنا</m-button>
				</li>
				<li>
					<m-drop>
						<template v-slot:label>
							<m-button type="bordered">أعمالنا</m-button>
						</template>
						<ul>
							<li
								v-for="section in $store.state.sections.filter(
									(s) => s.projects.length > 0
								)"
								:key="section.name"
							>
								<router-link :to="section.link">{{ section.name }}</router-link>
							</li>
						</ul>
					</m-drop>
				</li>
				<li>
					<m-button type="bordered" href="/blog">المقالات</m-button>
				</li>
				<li v-if="mobileScreen">
					<m-button
						v-if="mobileScreen"
						href="https://icom-digital.net/"
						class="contact-us"
						>اتصل بنا</m-button
					>
					<p>
						<a href="https://wa.me/+963991070885"
							><i class="fa fab fa-whatsapp"></i
						></a>
						<a href="https://www.facebook.com/IcomDigitalAgency/"
							><i class="fa fab fa-facebook"></i
						></a>
						<a href="https://www.instagram.com/icom.digital/"
							><i class="fa fab fa-instagram"></i
						></a>
					</p>
				</li>
			</ul>
		</transition>
		<m-button
			@click="menu_shown ? (menu_shown = false) : (menu_shown = true)"
			v-if="mobileScreen"
			class="menu-trigger"
		>
			<transition name="fade-back" mode="out-in">
				<i class="fas fa-times fa-2x" v-if="menu_shown"></i>
				<i class="fas fa-bars fa-2x" v-else></i>
			</transition>
		</m-button>
		<m-button
			v-if="!mobileScreen"
			type="bordered"
			class="contact-us"
			href="https://icom-digital.net/"
			>اتصل بنا</m-button
		>
	</nav>
</template>

<script>
import MDrop from "./MDrop.vue";
export default {
	name: "NNavbar",
	data() {
		return {
			mobileScreen: window.innerWidth <= 950,
			menu_shown: false,
		};
	},
	components: { MDrop },
	methods: {
		toggleMenu() {
			document.querySelector("header nav").classList.toggle("menu-shown");
		},
	},
	beforeMount() {
		window.addEventListener("resize", () => {
			this.mobileScreen = window.innerWidth <= 950;
		});
	},
	mounted() {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 0) {
				document.querySelector("nav").classList.add("below-header");
			} else {
				document.querySelector("nav").classList.remove("below-header");
			}
		});
	},
};
</script>

<style lang="scss">
nav {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	width: 100%;
	display: flex;
	flex-flow: row-reverse nowrap;
	align-items: center;
	padding: 4px 6vw;
	justify-content: space-between;
	transition: background-color 0.2s ease;
	&.below-header {
		background: rgba(0, 0, 0, 0.6);
	}

	details {
		summary {
			display: block;
		}
		section {
			position: fixed;
			margin-top: 24px;
			ul {
				font-size: 0.9em;
				border-radius: 10px;
				background: changeOpacity("text", -0.2);
				padding: 14px 20px;
				overflow: hidden;
				transition: visibility 0.4s ease, opacity 0.4s ease;
				li {
					display: block;
					margin: 10px 0;
				}
			}
		}
	}
	button.menu-trigger {
		z-index: 5;
		background: transparent;
		padding: 10px 0;
		&:hover {
			background: transparent;
		}
	}
	img {
		height: 40px;
	}
	ul.nav_links {
		list-style: none;
		padding: 0;
		font-size: 1.1em;
		.MBUTTON {
			border: none;
			color: white;
			&:hover {
				background: changeOpacity("main", -0.9);
				color: $color_accent;
			}
		}
		& > li {
			margin-left: 4em;
			@media (max-width: 1200px) {
				margin-left: 2.5rem;
			}
			display: inline-block;
			a {
				padding: 6px 10px;
				transition: background-color 0.2s ease;
				border-radius: 40px;
				&:hover {
					background-color: rgba(255, 255, 255, 0.1);
					color: $color_onAccent;
				}
			}
		}
	}
}

@media (max-width: 950px) {
	nav {
		button {
			display: block;
			&.MBUTTON.contact-us {
				color: $color_main !important;
				&:hover {
					background: $color_main !important;
					color: $color_accent !important;
				}
			}
		}
		ul.nav_links {
			margin: 0;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			background-color: changeOpacity("accent", -0.05);
			li {
				font-size: 1.2em;
				display: block !important;
				margin: 1em 0 !important;
				button.MBUTTON {
					&:hover {
						background-color: changeOpacity("main", -0.9);
						color: $color_onAccent;
					}
				}
				details {
					section {
						margin: 0 15px;
						position: static;
						width: calc(100% - 30px);
					}
					summary {
						padding-bottom: 10px;
					}
					ul {
						font-size: 0.6em;
						width: 100%;
						margin-left: 0;
						transition: all 0.2s ease;
						background-color: changeOpacity("text", -0.68) !important;
					}
				}
			}
		}
	}
}
</style>
