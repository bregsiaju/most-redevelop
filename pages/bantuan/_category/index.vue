<template>
	<main class="site-main">
		<div class="container">
			<StickyHelpers>
				<template #sticky-content>
					<ul class="list-nostyle">
						<li v-for="category in listCategory" :key="category.url">
							<nuxt-link :to="`/bantuan${category.url}`">
								{{ category?.title }}
							</nuxt-link>
						</li>
					</ul>
				</template>
				<template #main-content>
					<ul class="breadcrumb f-16">
						<li><nuxt-link to="/bantuan">Bantuan</nuxt-link></li>
						<li>{{ activePage }}</li>
					</ul>
					<h2>{{ activePage }}</h2>
					<div class="question-list">
						<ul class="list-nostyle">
							<li v-for="list in listCategory[2].questions" :key="list.id">
								<nuxt-link :to="`${$route.path}/${list.id}`">
									{{ list.title }}
								</nuxt-link>
							</li>
						</ul>
					</div>
				</template>
			</StickyHelpers>
		</div>
	</main>
</template>

<script>
import { mapState } from 'vuex'
import StickyHelpers from '~/components/StickyHelpers.vue'

export default {
	components: {
		StickyHelpers
	},
	computed: {
		...mapState(['listCategory']),
		activePage() {
			const activePage = this.$route.params.category
			const title = activePage.replace('-dan-', '-&-').replace(/-/g, ' ')
			return this.$toTitleCase(title)
		}
	}
}
</script>

<style lang="scss" scoped>
.sticky {
	a {
		border-left: 2px solid #d2d2d2;
		display: block;
		padding: 8px 16px;
		font-size: 20px;

		&:hover,
		&.nuxt-link-active {
			color: $primary;
			border-left-color: $primary;
		}
	}
}

.question-list {
	margin-top: 22px;

	li {
		a {
			display: block;
			font-size: 18px;
			margin-bottom: 18px;
		}
	}
}
</style>
