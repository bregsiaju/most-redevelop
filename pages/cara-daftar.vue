<template>
	<main class="site-main">
		<section class="header">
			<div class="container">
				<div class="bzg v-center">
					<div class="bzg_c" data-col="m6, l5">
						<h1 class="title text-reg">
							Buka Rekening <br />di <strong>MOST</strong> Sekarang!
						</h1>
						<p class="f-24">
							MOST menawarkan berbagai cara mudah untuk membantu Anda bergabung
							bersama kami.
						</p>
						<button class="btn--primary">BANTUAN</button>
					</div>
					<div class="bzg_c" data-col="m6, l5" data-offset="l2">
						<div class="responsive-media r-square">
							<img src="/assets/img/help/cara-daftar.png" alt="laptop" />
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-grey">
			<div class="container">
				<p class="f-24">Buka Rekening <b>Online</b></p>
				<h1 class="title mb-48">
					Bergabung via online yang<br />pastinya <u>bebas ribet!</u>
					<nuxt-link to="">
						<i class="icon-arrow-right"></i>
					</nuxt-link>
				</h1>
				<RegisterSteps :data="onlineSteps" />
			</div>
		</section>
		<section>
			<div class="container">
				<p class="f-24">Buka Rekening <b>Offline</b></p>
				<h1 class="title mb-48">
					Biarkan kami memandu<br />Anda untuk <u>bergabung.</u>
				</h1>
				<RegisterSteps :data="offlineSteps" />
			</div>
		</section>
		<section class="help pb-0">
			<div class="bzg bzg--no-gutter">
				<div class="bzg_c" data-col="m6">
					<h1 class="f-40">Lokasi Cabang</h1>
					<p class="f-28">
						Lihat informasi terkait lokasi cabang terdekat Anda
					</p>
					<nuxt-link to="/tentang-kami" class="btn--primary"
						>SELENGKAPNYA</nuxt-link
					>
				</div>
				<div class="bzg_c" data-col="m6">
					<h1 class="f-40">Bantuan</h1>
					<p class="f-28">Lihat seluruh informasi yang dapat membantu Anda</p>
					<nuxt-link to="/bantuan" class="btn--primary">SELENGKAPNYA</nuxt-link>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import RegisterSteps from '~/components/RegisterSteps.vue'
export default {
	component: {
		RegisterSteps
	},
	data() {
		return {
			onlineSteps: [
				{
					text1: 'Foto e-KTP dan swafoto bersama e-KTP',
					image: 'icon-photo.png',
					text2:
						'Pastikan foto e-KTP serta swafoto yang Anda kirimkan jelas dan tidak terpotong'
				},
				{
					text1: 'Siapkan NPWP Anda kemudian foto',
					image: 'icon-npwp.png',
					text2: 'Unggah foto NPWP Anda dan pastikan gambar terlihat jelas'
				},
				{
					text1: 'Informasi Rekening Tabungan Pribadi di Bank Mandiri',
					image: 'icon-rekening.png',
					text2:
						'Persiapkan data yang diperlukan mengenai tabungan rekening pribadi Bank Mandiri'
				}
			],
			offlineSteps: [
				{
					text1: 'Unduh Formulir Pembukaan Rekening Efek',
					image: 'icon-form.png',
					text2: `Dapatkan dan isi formulir pembukaan rekening <a href="">di sini.</a>`
				},
				{
					text1: 'Unduh Formulir Mandiri Tabungan Investor',
					image: 'icon-form-investor.png',
					text2: `Dapatkan dan isi formulir pembukaan rekening <a href="">di sini.</a>`
				},
				{
					text1: 'Siapkan Berkas yang Dibutuhkan',
					image: 'icon-photocopy.png',
					text2:
						'Serahkan formulir serta fotokopi KTP/Paspor, NPWP, dan Cover Buku Tabungan ke teller kami.'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
section {
	padding: 60px 0;

	&.header {
		padding: 30px 0;

		@media #{$medium} {
			padding: 0;
		}
	}
}

.title {
	font-size: 30px;
	line-height: 1.4;
	margin-bottom: 32px;

	@media #{$medium} {
		font-size: 40px;
	}
}

.bg-grey {
	background-color: #f2f2f2;
}

i.icon-arrow-right {
	font-size: 16px;
	border-radius: 50%;
	background-color: $primary;
	color: white;
	padding: 8px;
	margin-right: 16px;
}

section.help {
	.bzg {
		.bzg_c:first-child {
			background: #f8f8f8;
		}

		.bzg_c:nth-child(2) {
			background: #f2f2f2;
		}

		.bzg_c {
			padding: 36px 48px;

			@media #{$md} {
				padding: 36px 32px;

				.f-28 {
					font-size: 20px !important;
				}
			}

			@media #{$sm} {
				padding: 36px 20px;
			}
		}
	}
}
</style>
