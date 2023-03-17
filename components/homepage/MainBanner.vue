<template>
	<div
		class="main-banner"
		:style="{ backgroundImage: `url('assets/img/homepage/${image}')` }"
	>
		<div class="container">
			<div class="banner-content">
				<div class="title">
					<strong>MOST:</strong> Aplikasi investasi terpercaya<br />untuk hidup
					lebih mapan.
				</div>
				<div class="desc">
					Jual beli saham, reksa dana, dan obligasi dalam<br />satu platform
					terintegrasi.
				</div>
				<div class="cta flex f-gap-20 v-center">
					<nuxt-link to="">
						<button class="btn--primary">DAFTAR SEKARANG</button>
					</nuxt-link>
					<nuxt-link to="">
						<i class="icon-arrow-down"></i>
						UNDUH SEKARANG
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MainBanner',
	props: {
		image: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.main-banner {
	height: calc(100vh - 119px);
	background-size: cover;
	background-position: center bottom;
	width: 100%;

	.banner-content {
		padding-top: 8%;
		width: 60%;

		.title {
			font-size: 45px;
			margin-bottom: 25px;
			line-height: 1.3;
		}

		.desc {
			font-size: 22px;
			margin-bottom: 28px;
			color: #767676;
		}
	}

	.cta a:nth-of-type(2) {
		color: #767576;

		&:hover {
			color: $link_hover;

			i {
				background-color: $primary;
				color: white;
				border-color: $primary !important;
			}
		}

		i.icon-arrow-down {
			border-radius: 50%;
			border: 2px solid rgba(112, 112, 112, 0.3);
			padding: 8px;
			margin-right: 8px;
		}
	}
}
</style>
