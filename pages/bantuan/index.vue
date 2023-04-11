<template>
	<main class="site-main">
		<section class="form-search pt-40">
			<div class="container">
				<p class="title">
					Hai!<br />Anda sedang butuh <strong>bantuan?</strong>
				</p>
				<form>
					<div class="form-input-search">
						<i class="icon-search"></i>
						<input type="text" placeholder="Cari pertanyaan" />
					</div>
				</form>
			</div>
		</section>

		<!-- general question -->
		<section class="gen-question">
			<div class="container">
				<p class="title"><strong>Pertanyaan Umum</strong></p>
				<div class="bzg">
					<div
						v-for="(item, i) in genQuestions"
						:key="i"
						class="bzg_c"
						data-col="m6, l4"
					>
						<nuxt-link to="" class="flex v-center f-space-between f--semi f-18">
							<p class="mb-0">{{ item }}</p>
							<i class="bzi-angle-right"></i>
						</nuxt-link>
					</div>
				</div>
			</div>
		</section>
		<!-- end general question -->

		<!-- category -->
		<section class="category">
			<div class="container">
				<p class="title">Kategori</p>
				<div class="bzg category--item">
					<div
						v-for="(category, i) in categories"
						:key="i"
						class="bzg_c"
						data-col="m6, l4"
					>
						<img :src="`/assets/img/help/${category.icon}`" alt="icon" />
						<h3>{{ category.name }}</h3>
						<div class="link-wrapper">
							<ul class="list-nostyle">
								<li v-for="(list, x) in category.questions" :key="x">
									<nuxt-link to="">{{ list }}</nuxt-link>
								</li>
							</ul>
						</div>
						<nuxt-link
							:to="$route.path + category.url"
							class="text-primary f-14"
							>LIHAT SELENGKAPNYA</nuxt-link
						>
					</div>
				</div>
			</div>
		</section>
		<!-- end category -->

		<!-- contact us -->
		<section class="contact-us relative">
			<div class="bg-full"></div>
			<div class="container">
				<h1 class="title">Hubungi Kami</h1>
				<p class="text-grey">
					Informasikan kepada kami kendala yang Anda alami.
				</p>
				<button class="btn--primary">KONTAK KAMI</button>
			</div>
			<img src="~assets/img/bg-line-circle-dot.png" alt="bg" />
		</section>
		<!-- end contact us -->
	</main>
</template>

<script>
export default {
	data() {
		return {
			genQuestions: [
				'Download Bermacam Form',
				'Definisi Fasilitas AKSes KSEI?',
				'Cara akses fasilitas AKSes KSEI',
				'Berapa penalti yang akan dibebankan apabila terlambat bayar?',
				'Apakah Short Selling dapat dilakukan di Mandiri Sekuritas?',
				'Bagaimana cara mengikuti IPO yang dijaminkan oleh Mandiri Sekuritas?'
			],
			categories: [
				{
					icon: 'icon-chart.png',
					name: 'Mulai Investasi',
					url: '/mulai-investasi',
					questions: [
						'Modus Kejahatan di Transaksi Efek',
						'Pasar modal yang cocok untuk saya',
						'Tahapan untuk memulai investasi'
					]
				},
				{
					icon: 'icon-account.png',
					name: 'Akun & Rekening Efek',
					url: '/akun-dan-rekening-efek',
					questions: [
						'Cara mengganti password',
						'Cara mengganti PIN',
						'Jika calon Nasabah tidak memiliki NPWP'
					]
				},
				{
					icon: 'icon-document.png',
					name: 'Dokumen & Pajak',
					url: '/dokumen-dan-pajak',
					questions: [
						'Penarikan Dana',
						'Klaim waris atau efek',
						'Transaksi Margin'
					]
				},
				{
					icon: 'icon-stock.png',
					name: 'Saham',
					url: '/saham',
					questions: [
						'Cara klaim waris atas efek',
						'IPO Saham',
						'Pemindahan saham dari sekuritas lain'
					]
				},
				{
					icon: 'icon-reksadana.png',
					name: 'Reksa Dana',
					url: '/reksa-dana',
					questions: [
						'Apa saja risiko investasi pada Reksa Dana?',
						'Keuntungan investasi Reksa Dana',
						'Jenis Reksa Dana di Mandiri Sekuritas'
					]
				},
				{
					icon: 'icon-obligasi.png',
					name: 'Obligasi',
					url: '/obligasi',
					questions: [
						'Pengertian Obligasi',
						'Jadwal Obligasi',
						'Bedanya Obligasi SBN'
					]
				},
				{
					icon: 'icon-syariah.png',
					name: 'Syariah',
					url: '/syariah',
					questions: [
						'Pengertian Saham Syariah',
						'Produk Syariah',
						'Mekanisme Transaksi Syariah'
					]
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.title {
	font-size: 40px;
	line-height: 1.2;
}

.form-input-search {
	@media #{$large} {
		width: 40%;
	}

	i {
		padding-bottom: 10px;
	}

	input {
		border-top: none;
		border-right: none;
		border-left: none;
		font-size: 20px;
		width: 100%;
		padding-bottom: 10px;
		border-color: #aaa;
	}

	input[type='text']:focus {
		outline: none;
		border-color: $primary-blue;
	}
}

.gen-question {
	margin: 72px 0;
	padding: 44px 0;
	background-color: #f8f8f8;

	.bzg {
		margin-left: -28px;

		.bzg_c {
			padding-left: 28px;
			margin-bottom: 34px;
			min-height: 94px;

			a {
				padding: 18px 25px;
				background-color: white;
				border-radius: 10px;
				box-shadow: 0px 6px 30px #00000015;
				height: 100%;
			}
		}
	}
}

.category--item {
	img {
		height: 75px;
		margin-bottom: 28px;
	}

	h3 {
		margin-bottom: 20px;
	}

	.link-wrapper {
		li {
			font-size: 18px;
			margin-bottom: 18px;
		}
	}

	.bzg_c {
		margin-bottom: 80px;
	}
}

.contact-us {
	// background-color: #f2f2f2;
	padding: 40px 0;

	.bg-full {
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #f2f2f2;
		z-index: -2;
		top: 0;
	}

	p {
		font-size: 28px;
	}

	img {
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		z-index: -1;
	}
}
</style>
