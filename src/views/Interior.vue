<template>
	<div class="page">
		<landing :section="section" />
		<section class="gallery grid-masonary">
			<div
				class="grid-item"
				v-for="project in section.projects"
				:key="project.name"
			>
				<figure clas="preveiw">
					<img :src="project.media[0]" />
					<figcaption @click="gallery_shown = project.name">
						{{ project.name }}
					</figcaption>
					<transition name="fade-back">
						<div
							class="all-images"
							v-if="gallery_shown == project.name"
							@click.self="gallery_shown = ''"
						>
							<template v-for="(media, index) in project.media">
								<img
									v-if="/jpg|jpeg|png|webp|gif/.test(media)"
									:src="media"
									:alt="`${project.name}(${index})`"
									:key="`${project.name}(${index})`"
								/>
								<video
									v-else-if="/mp4|webm|mkv/.test(media)"
									:key="`${project.name}(${index})`"
									controls
								>
									<source :src="media" />
								</video>
							</template>
							<button @click="gallery_shown = ''" class="close">
								<i class="fas fa-times"></i>
							</button>
						</div>
					</transition>
				</figure>
			</div>
			<h3 v-if="section.projects.length == 0">No Projects here yet</h3>
		</section>
		<f-footer />
	</div>
</template>
<script>
import landing from "../components/landing.vue";
import FFooter from "../components/FFooter.vue";

export default {
	name: "Branding",
	components: { landing, FFooter },
	data() {
		return {
			gallery_shown: "",
			section: this.$store.state.sections.find(
				(section) => section.ename == "Interior Design"
			),
		};
	},
};
</script>
