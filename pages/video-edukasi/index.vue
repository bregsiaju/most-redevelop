<template>
	<main class="site-main">
		<div class="container">
			<Sticky>
				<template #sticky-content>
					<ul class="breadcrumb mt-16">
						<li><nuxt-link to="/belajar">Belajar</nuxt-link></li>
						<li>Video Edukasi</li>
					</ul>
					<p class="title">Video <strong>Edukasi</strong></p>
					<ul class="list-nostyle nav-category">
						<li><nuxt-link to="/video-edukasi#saham">Saham</nuxt-link></li>
						<li>
							<nuxt-link to="/video-edukasi#reksadana">Reksa Dana</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/video-edukasi#obligasi">Obligasi</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/video-edukasi#tentang"
								>Tentang Aplikasi</nuxt-link
							>
						</li>
					</ul>
				</template>
				<template #main-content>
					<div class="bzg card-wrapper ml-0">
						<div
							v-for="(video, i) in videos"
							:key="i"
							class="bzg_c"
							data-col="m6"
						>
							<learningCard :content="video" :card-type="`video`" />
						</div>
					</div>
				</template>
			</Sticky>
		</div>
		<div class="about">
			<div class="bzg">
				<div class="bzg_c" data-col="m6">
					<div class="container">
						<h1 class="title mb-24">Pelajari Lebih Lanjut</h1>
						<p class="desc mb-24">
							Pelajari materi lainnya secara lengkap disini
						</p>
						<button class="btn--primary">SELENGKAPNYA</button>
					</div>
				</div>
				<div class="bzg_c" data-col="m6">
					<div class="container">
						<h1 class="title mb-24">Mulai Investasi di MOST!</h1>
						<p class="desc mb-24">
							Buka rekening di MOST sekarang dan segera berinvestasi di pasar
							modal.
						</p>
						<div class="flex f-gap-20 flex--wrap">
							<button class="btn--primary">SELENGKAPNYA</button>
							<button class="btn--ghost-primary">CARA DAFTAR</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			videos: [
				{
					category: 'Saham',
					img: 'video-thumbnail.png',
					title:
						'MOST Online Account Opening: The First Digital KYC in Indonesia',
					url: '/most-online-accounting-opening'
				},
				{
					category: 'Saham',
					img: 'video-2.png',
					title: 'Filosofi Investasi by Mandiri Sekuritas'
				},
				{
					category: 'Saham',
					img: 'video-1.png',
					title: 'Filosofi Investasi by Mandiri Sekuritas'
				},
				{
					category: 'Saham',
					img: 'video-1.png',
					title: 'Filosofi Investasi by Mandiri Sekuritas'
				},
				{
					category: 'Saham',
					img: 'video-1.png',
					title: 'Filosofi Investasi by Mandiri Sekuritas'
				},
				{
					category: 'Saham',
					img: 'video-2.png',
					title: 'Filosofi Investasi by Mandiri Sekuritas'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.title {
	font-size: 45px;
	line-height: 1;
	color: $dark-grey;
	margin-bottom: 30px;

	@media #{$md} {
		margin-bottom: 16px;
	}

	@media #{$sm} {
		font-size: 30px;
	}
}

.nav-category {
	li {
		font-size: 30px;
		color: #bcbbbb;
		position: relative;
		width: fit-content;
		margin-bottom: 12px;

		@media #{$md} {
			font-size: 24px;
		}

		a.nuxt-link-active {
			color: $dark-grey;
			font-weight: 600;

			&:after {
				content: '';
				position: absolute;
				height: 35%;
				width: 100%;
				background-color: $primary;
				opacity: 70%;
				bottom: 4px;
				left: 0;
				z-index: -1;
			}
		}
	}
}

.bzg_c.content {
	padding-left: 44px;
	background-image: linear-gradient(90deg, #f2f2f2, 35%, #fff 35%);
	background-position: 44px;
}

.card-wrapper {
	.bzg_c {
		padding-left: 44px;

		& > .card {
			margin-bottom: 100px;
		}

		@media #{$sm} {
			padding-left: 0px;

			& > .card {
				margin-bottom: 56px;
			}
		}
	}

	@media #{$medium} {
		.bzg_c:nth-child(odd) {
			transform: translateY(75px);
		}
	}
}
.about {
	margin-top: 148px;

	@media #{$md} {
		margin-top: 56px;
	}

	.bzg_c {
		padding: 36px;

		&:first-child {
			background: #f8f8f8;
		}

		&:last-child {
			background: #f2f2f2;
		}

		.container {
			width: 90%;
		}
	}

	.desc {
		font-size: 25px;

		@media #{$sm} {
			font-size: 20px;
		}
	}
}
</style>
