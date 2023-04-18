<template>
	<div class="feature">
		<MainBanner :image="`bg-fitur.png`">
			<template #texting>
				<div class="title">
					<strong>Platform lengkap</strong> untuk<br />kebutuhan transaksi Anda
				</div>
				<div class="desc">
					MOST hadir dalam untuk memberikan solusi<br />terbaik bagi proses
					transaksi Anda.
				</div>
				<div class="cta flex f-gap-20 v-center flex--wrap">
					<nuxt-link to="">
						<button class="btn--primary">UNDUH SEKARANG</button>
					</nuxt-link>
				</div>
			</template>
		</MainBanner>
	</div>
</template>

<script>
import MainBanner from '~/components/homepage/MainBanner.vue'

export default {
	components: {
		MainBanner
	}
}
</script>

<style lang="scss" scoped>
.feature {
	/deep/ .main-banner {
		background-position: center top !important;
		padding: 24px 0;
		height: auto;
		background-size: auto;

		.banner-content {
			padding: 8% 0;
		}

		@media #{$large} {
			background-size: cover;
		}
	}
}
</style>
