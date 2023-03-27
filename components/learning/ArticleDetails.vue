<template>
	<div class="article-details">
		<!-- breadcrumbs -->
		<ul class="breadcrumb">
			<slot name="nav-breadcrumb">
				<li><nuxt-link to="/belajar">Belajar</nuxt-link></li>
				<li><nuxt-link to="/video-edukasi">Video Edukasi</nuxt-link></li>
				<li>MOST Online Account Opening: The First Digital KYC in Indonesia</li>
			</slot>
		</ul>
		<!-- end breadcrumbs -->

		<!-- title -->
		<h1 class="title">
			MOST Online Account Opening: The First Digital KYC in Indonesia
		</h1>

		<!-- date & share -->
		<div class="date-share">
			<span class="date">26 oktober 2018 &#8212; Saham</span>
			<span class="share"
				>Bagikan ke
				<i class="icon-facebook"></i>
				<i class="icon-twitter"></i>
				<i class="icon-instagram"></i>
			</span>
		</div>
		<!-- end date & share -->

		<!-- article content -->
		<article>
			<!-- media -->
			<div class="responsive-media r-16-9">
				<iframe
					src="https://www.youtube.com/embed/W689mWIGNbs"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
			<!-- end media -->

			<!-- text content -->
			<div class="text-content">
				<p>
					Seluruh dunia berharap pandemi Covid-19 akan segera berlalu. Selain
					mendukung pembatasan sosial berskala besar (PSBB), masyarakat juga
					harus bersiap menyesuaikan diri dengan kondisi normal baru (new
					normal) di saat ini sampai setelah pandemi. Lalu, apakah yang disebut
					gaya hidup new normal? Mengutip pernyataan Ketua Tim Pakar Gugus Tugas
					Percepatan Penanganan Covid-19, Wiku Adisasmita, gaya hidup new normal
					adalah perubahan perilaku untuk tetap menjalankan aktivitas normal
					namun dengan ditambah menerapkan protokol kesehatan guna mencegah
					terjadinya penularan Covid-19.
				</p>
				<p>
					Prinsip utama dari gaya hidup new normal adalah menyesuaikan diri
					dengan pola hidup yang baru. Pola hidup baru yang dimaksud adalah
					beraktivitas dengan mengurangi kontak fisik, menjaga jarak fisik
					(physical distancing), menghindari kerumunan, lebih menjaga
					kebersihan, mengunakan masker dan hand sanitizer, serta bekerja,
					beribadah, belajar, dan berinvestasi dari rumah.
				</p>
			</div>
			<!-- end text content -->
		</article>
		<!-- end acticle content -->

		<!-- recomendations -->
		<div class="recomendations">
			<hr />
			<h1 class="title">Anda mungkin juga menyukai ini.</h1>
			<div class="bzg">
				<div
					v-for="(recomendation, i) in recomendations"
					:key="i"
					class="bzg_c"
					data-col="l4"
				>
					<learningCard :content="recomendation" :card-type="`video`" />
				</div>
			</div>
		</div>
		<!-- end recomendations -->
	</div>
</template>

<script>
export default {
	name: 'ArticleDetails',
	data() {
		return {
			recomendations: [
				{
					category: 'Saham',
					img: 'video-thumbnail.png',
					title: 'Filosofi Investasi by Mandiri Sekuritas'
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
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.article-details {
	padding-top: 35px;

	.title {
		font-size: 45px;
		margin-bottom: 20px;
		line-height: 1.3;
		color: #3b3b3b;

		@media #{$large} {
			width: 70%;
		}
	}

	.date-share {
		color: #868686;
		font-size: 18px;
		margin-bottom: 32px;

		span:not(:first-child) {
			border-left: 1px solid $primary-blue;
			padding-left: 15px;
			margin-left: 15px;
		}

		i {
			color: $primary-blue;
			margin-left: 12px;
		}
	}

	.text-content {
		font-size: 24px;
		margin: 44px 0 56px;
		padding: 0 15%;
	}

	.recomendations {
		.title {
			margin: 64px 0;
		}
	}
}
</style>
