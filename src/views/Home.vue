<template>
	<canvas
		id="webgl"
		style="position: absolute; left: 0px; max-height: 900px !important"
		class="webgl"
	></canvas>
	<div class="home page">
		<landing :section="{}">
			<ul class="social-links">
				<li>
					<a href="https://wa.me/+963991070885"
						><i class="fa fab fa-whatsapp"></i
					></a>
				</li>
				<li>
					<a href="https://www.facebook.com/IcomDigitalAgency/"
						><i class="fa fab fa-facebook"></i
					></a>
				</li>
				<li>
					<a href="https://www.instagram.com/icom.digital/"
						><i class="fa fab fa-instagram"></i
					></a>
				</li>
			</ul>

			<div class="titles">
				<h2>هل تريد النهوض بعلامتك التجارية نحو التميز !</h2>
				<h3>icom ستساعدك لتحقيق اهدافك</h3>
				<div class="buttons">
					<m-button href="#contact">اتصل بنا</m-button>
					<m-button type="bordered" href="#services">تصفح خدماتنا</m-button>
				</div>
			</div>
			<div>
				<canvas
					id="webgl"
					style="
						max-width: 103% !important;
						width: inherit !important;
						max-height: 900px !important;
						height: inherit !important;
						position: static;
					"
					class="webgl"
				></canvas>
			</div>
			<!-- <monitor :screens="screens" /> -->
		</landing>
		<article class="about" id="about">
			<h3>عن الشركة</h3>
			<p>
				شركة ICOM تقدم خدمات احترافية في مختلف قطاعات السوق الرقمي، لنرتقي
				بمستوى الخدمات الإلكترونية المقدمة إلى قطاع الأعمال عبر باقات من الخدمات
				المتنوعة، محاولين تحقيق أفضل معدل وصول لمنتجاتهم وخدماتهم عبر توسيع
				قاعدة مستخدميهم، وكذلك رفع معدلات أرباحهم، ليكونوْا روادًا في مجالهم
			</p>
		</article>
		<article class="about">
			<h3>رؤيتنا</h3>
			<p>
				الاعتراف بمساهمتنا في تعزيز التواصل المرئي والقيمة التي نقدمها للأعمال
				والمجتمع.
			</p>
		</article>
		<article class="about">
			<h3>رسالتنا</h3>
			<p>
				تمكين الشركات من النمو باستخدام خدماتنا التسويقية الإعلانية الفعالة،
				لجعلهم يشعرون بالرضا من خلال العثور على الراحة والمتعة والقيمة في
				أفكارنا الإبداعية.
			</p>
		</article>
		<article class="about">
			<h3>قيمتنا</h3>
			<p>
				السوق الإلكتروني هذا سوق ليس بثابت، لذلك فنحن رشيقون نتحرك مع احتياجاتك،
				نحن نؤمن بشدة بان الثقة عنصر حيوي في جميع العلاقات التي نبنيها وأن كوننا
				جديرين بالثقة يؤدي إلى التعاون الذي ينتج عنه النجاح. قيمتنا ناتجة من رضا
				عملائنا، وسماع مطالبهم لتحقيق ما يحلمون به
			</p>
		</article>
		<article id="services">
			<h3>خدماتنا</h3>
		</article>
		<slider id="services" />
		<section class="articles">
			<h3>المقالات</h3>
			<loader v-if="articlesLoading" class="center-loader"></loader>
			<div class="articles__container" v-else>
				<div
					class="articles__item"
					v-for="(article, i) in articles.slice(
						Math.max(articles.length - 4, 0),
						articles.length
					)"
					:key="i"
				>
					<article-card-home :article="article"></article-card-home>
				</div>
			</div>
		</section>
		<article class="contact" id="contact">
			<h3>اتصل بنا</h3>
			<div class="container">
				<section>
					<div class="red-rectangle">
						<squares class="squares" />
						<squares class="squares" />
						<h4>كن على تواصل معنا</h4>
						<p>
							لمناقشة مشروعك بشكل أفضل قم بتعبئة البيانات المطلوبة. سنقوم بالرد
							عليك في أقرب وقت ممكن!
						</p>
						<ul>
							<li><i class="fas fa-location-dot"></i>Syria</li>
							<li>
								<i class="fas fa-phone"></i
								><a href="tel:963991070885">+963991070885</a>
							</li>
							<li>
								<i class="fas fa-envelope"></i
								><a href="mailto:info@icom-digital.com"
									>info@icom-digital.com</a
								>
							</li>
						</ul>
						<p class="social">
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
					</div>
					<form @submit.prevent>
						<label for="name">الاسم الكريم</label>
						<input
							type="text"
							id="name"
							required="true"
							placeholder="أدخل اسمك الكامل"
							v-model="contactForm.name"
						/>
						<h6 id="nameErrors" style="color: red"></h6>
						<label for="email">البريد الإلكتروني</label>
						<input
							type="email"
							id="email"
							required="true"
							placeholder="أدخل بريدك الالكتروني"
							v-model="contactForm.email"
						/>
						<h6 id="emailErrors" style="color: red"></h6>
						<label for="service">نوع الخدمة المطلوبة</label>
						<select id="service" v-model="contactForm.service">
							<option
								v-for="service in $store.state.sections"
								:value="service.name"
								:key="service.ename"
								required="true"
							>
								{{ service.name }}
							</option>
						</select>
						<h6 id="serviceErrors" style="color: red"></h6>

						<label for="phone">رقم الجوال</label>
						<input
							type="text"
							id="phone"
							placeholder="أدخل رقم الجوال"
							v-model="contactForm.phone"
						/>
						<h6 id="phoneErrors" style="color: red"></h6>

						<label for="message">الرسالة</label>
						<textarea
							id="message"
							required="true"
							placeholder="أدخل نبذة عن مشروعك"
							v-model="contactForm.message"
						></textarea>
						<h6 id="messageErrors" style="color: red"></h6>

						<m-button
							@click="sendMessage()"
							style="width: 100%; margin: 20px 0 0"
							>ارسال</m-button
						>
						<h6 id="success" style="color: green"></h6>
					</form>
				</section>
				<img src="../assets/plane.png" alt="plane" />
			</div>
		</article>
		<f-footer />
	</div>
</template>

<script>
import axios from "axios";
import FFooter from "../components/FFooter.vue";
import landing from "../components/landing.vue";
import slider from "../components/slider.vue";
import squares from "../components/squares.vue";
// import monitor from "../components/monitor.vue";
import ArticleCardHome from "../components/ArticleCardHome.vue";
import Loader from "../components/Loader.vue";
import { mapState } from "vuex";

export default {
	name: "Home",
	components: {
		landing,
		FFooter,
		slider,
		squares,
		ArticleCardHome,
		Loader,
		// monitor,
	},
	data() {
		return {
			articlesLoading: true,
			contactForm: {
				name: "",
				email: "",
				phone: "",
				message: "",
				service: "",
			},
			screens: [
				require("../assets/screens/social.png"),
				require("../assets/screens/interior.png"),
				require("../assets/screens/interior.png"),
				require("../assets/screens/interior.png"),
			],
			deletedScreens: [],
		};
	},
	methods: {
		async sendMessage() {
			var flag = false;
			document.getElementById("nameErrors").innerText = "";
			document.getElementById("emailErrors").innerText = "";
			document.getElementById("serviceErrors").innerText = "";
			document.getElementById("phoneErrors").innerText = "";
			document.getElementById("messageErrors").innerText = "";

			if (this.contactForm.name == "") {
				document.getElementById("nameErrors").innerText = "حقل الاسم مطلوب";
				flag = true;
			}
			var mailformat = /^\S+@\S+\.\S+$/;
			if (!this.contactForm.email.match(mailformat)) {
				document.getElementById("emailErrors").innerText =
					"يرجى إدخال إيميل صحيح ";

				flag = true;
			}
			if (this.contactForm.email == "") {
				document.getElementById("emailErrors").innerText = "حقل الإيميل مطلوب ";
				flag = true;
			}

			if (this.contactForm.service == "") {
				document.getElementById("serviceErrors").innerText =
					"حقل الخدمة مطلوب ";

				flag = true;
			}
			// var regex=/^[0-9]+$/;

			//  if(this.contactForm.phone !="" && this.contactForm.phone.match(regex)){
			if (isNaN(this.contactForm.phone)) {
				document.getElementById("phoneErrors").innerText =
					"يرجى إدخال رقم الجوال بطريقة صحيحة ";

				flag = true;
			}
			if (this.contactForm.message == "") {
				document.getElementById("messageErrors").innerText =
					"حقل الرسالة مطلوب ";

				flag = true;
			}
			if (!flag) {
				let request = await axios.post(
					"https://icom-agency.com/api/add-message",
					this.contactForm
				);

				if (request.status == 200 || request.status == 204) {
					console.log("Success");

					document.getElementById("success").innerText =
						"تم إرسال رسالتك بنجاح";
					setTimeout(() => {
						document.location.href = "/";
					}, 3000);
				}
			}
		},
	},
	computed: {
		...mapState({
			articles: (state) => state.articles.articles,
		}),
	},
	mounted() {
		setInterval(() => {
			if (this.screens.length > 1) {
				let lastScreen = this.screens.pop();
				this.deletedScreens.push(lastScreen);
			} else {
				this.screens = [...this.deletedScreens, this.screens[0]];
				this.deletedScreens = [];
			}
		}, 2000);
		this.$store.dispatch("articles/fetchAll").then(() => {
			this.articlesLoading = false;
		});
	},
};
</script>
<style lang="scss">
h6 {
	margin-top: 0px !important;
	margin-bottom: 0px !important;
}
.page.home article {
	padding: 20px 6vw;
	p {
		max-width: 1000px;
		margin: 0 auto;
	}
	h3 {
		font-size: 2.2em;
		font-weight: 600;
	}
	&.about {
		h3 {
			span {
				display: block;
				&::first-letter {
					color: var(--accent);
				}
			}
		}
	}
	&.contact {
		padding-bottom: 60px;
		.container {
			width: 100%;
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			align-items: center;
			img {
				width: 400px;
				max-width: 100%;
			}
			form {
				width: calc(min(100%, 400px));
			}
			& > section {
				max-width: 820px;
				display: flex;
				flex-flow: row wrap;
				gap: 60px;
				justify-content: center;
				.red-rectangle {
					aspect-ratio: 1/1.25;
					width: calc(min(100%, 400px) - 44px);
					position: relative;
					text-align: right;
					padding: 20px 20px 40px;
					margin: 40px 0;
					background: $color_accent;
					color: $color_onAccent;
					margin-left: -22px;
					p {
						margin: 2em 0;
						&.social {
							position: absolute;
							bottom: 0;
							left: 0;
							width: 100%;
							text-align: center;
							padding: 10px 0;
							margin: 0;
							a {
								margin: 0 10px;
							}
						}
					}
					ul {
						list-style: none;
						padding: 0;
						direction: ltr;
						text-align: left;
						li {
							i {
								padding: 0 20px;
							}
							margin: 8px 0;
						}
					}
					.links {
						margin: 10px;
						a {
							margin: 0 8px;
						}
					}
					h4 {
						font-size: 1.6em;
						line-height: 2em;
						margin: 0;
					}
					.squares {
						z-index: -1;
						position: absolute;
						top: 0;
						right: 0;
						transform: translate(50%, -50%);
						&:first-of-type {
							top: 100%;
						}
					}
				}
			}
		}
	}
}
::placeholder {
	color: rgba(0, 0, 0, 0.3);
}
.titles {
	z-index: 3;
	width: calc(100% - 25px);
	max-width: 400px !important;
}
.articles {
	h3 {
		font-size: 2.2em;
		font-weight: 600;
	}
	&__container {
		display: flex;
		flex-wrap: wrap;
		padding: 0 6vw;
	}
	&__item {
		width: 50%;
		margin-bottom: 2rem;
		padding-left: 7%;
		@media (max-width: 1020px) {
			width: 100%;
		}
	}
}
@media (max-width: 951px) {
	.webgl {
		z-index: 1;
	}
	.page > header {
		position: relative;
	}
	.titles {
		position: absolute;
		bottom: 30%;
		right: 50px;
		h2 {
			font-size: 1.5rem;
		}
		h3 {
			font-size: 1.1rem;
		}
	}
}
@media (max-width: 689px) {
	.titles {
		bottom: 50px;
		right: 20px;
	}
}
</style>
