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
						<li>
							<nuxt-link :to="`/bantuan/${pageBefore.url}`">
								{{ pageBefore.title }}
							</nuxt-link>
						</li>
						<li>{{ activePage }}</li>
					</ul>
					<div
						class="content"
						v-html="listCategory[2].questions[2].content"
					></div>
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
		pageBefore() {
			const url = this.$route.params.category
			const title = url?.replace('-dan-', '-&-').replace(/-/g, ' ')
			return {
				url,
				title: this.$toTitleCase(title)
			}
		},
		activePage() {
			return this.$route.params.details
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

		@media #{$md} {
			padding: 4px 16px;
			font-size: 16px;
		}
	}
}

.content {
	/deep/ p {
		font-size: 18px;
	}

	/deep/ li {
		font-size: 18px;
	}
}
</style>
