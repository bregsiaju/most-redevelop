<template>
	<main class="site-main">
		<!-- notif -->
		<div
			v-show="!notifHidden"
			class="top-notif bg-primary-blue pv-20 text-white flex relative"
		>
			<div class="container">
				<span>Cari arti istilah yang belum Anda pahami di</span>
				<nuxt-link to="/istilah-investasi/A" class="text-primary"
					>Kamus Investasi</nuxt-link
				>
			</div>
			<i class="bzi-close" @click="notifHidden = true"></i>
		</div>

		<!-- banner top -->
		<section class="banner-top">
			<div class="container">
				<div class="bzg v-center relative">
					<div class="bzg_c title mb-56" data-col="m6">
						<h1 class="mb-20">
							Pahami segala hal tentang <strong>investasi.</strong>
						</h1>
						<span>Pilih materi-materi berikut ini.</span>
					</div>
					<div class="bzg_c" data-col="m6">
						<div class="card">
							<img
								:src="`assets/img/learning/start-invest.png`"
								alt="meeting"
								class="card-image"
							/>
							<div class="card-content">
								<h2>Mulai Investasi</h2>
								<p>
									Pahami terlebih dahulu definisi, jenis, hingga keuntungan dan
									risiko dari investasi.
								</p>
								<button class="btn--primary">LIHAT SELENGKAPNYA</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<div class="section-numbered-wrapper text-dark-grey">
			<learningNumberedSection
				v-for="material in materials"
				:key="material.id"
				:content="material"
			/>
		</div>

		<!-- carousel join -->
		<homepageJoin />
	</main>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			notifHidden: false
		}
	},
	computed: {
		...mapState(['materials'])
	}
}
</script>

<style lang="scss" scoped>
.top-notif {
	font-size: 18px;

	@media #{$medium} {
		font-size: 22px;
	}

	.bzi-close {
		position: absolute;
		right: 2%;

		&:hover {
			cursor: pointer;
		}
	}
}

.title {
	margin-top: 24px;

	h1 {
		// font-size: 40px;
		line-height: 1.3;
		color: $dark-grey;
	}

	span {
		color: $grey;
		font-size: 1.5em;
		border-bottom: 3px solid $primary-blue;
		padding-bottom: 12px;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0px;
		left: 33%;
		width: 150px;
		height: 35%;
		background-color: rgba(242, 242, 242, 0.5);
		z-index: -1;
	}
	@media #{$medium} {
		margin-top: 0;

		p {
			font-size: 45px;
		}
	}
}

.card {
	overflow: hidden;
	border-bottom: 3px solid $primary-blue;

	.card-image {
		margin-top: 0;

		@media #{$medium} {
			margin-top: -70px;
		}
	}

	.card-content {
		padding: 42px;

		@media #{$md} {
			padding: 42px 0;
		}

		h2 {
			font-size: 30px;
			color: $dark-grey;
			font-weight: 600;
		}

		p {
			color: $grey;
			font-size: 24px;
			margin-bottom: 14px;
		}
	}
}

.section-numbered-wrapper {
	margin-top: 120px;
}
</style>
