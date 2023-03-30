<template>
	<main class="site-main">
		<section id="promo" class="relative">
			<div class="container">
				<h1 class="shadow">Promo</h1>
				<div class="bzg">
					<div class="bzg_c" data-col="m5, l5">
						<div>
							<img src="/assets/img/learning/cup.jpg" alt="promo banner" />
						</div>
					</div>
					<div class="bzg_c" data-col="m7, l6">
						<div class="navigation">
							<i class="icon-long-arrow-left mr-8"></i>
							<i class="icon-long-arrow-right"></i>
						</div>
						<span class="text-grey">24 Juni - 30 Juni 2020</span>
						<p class="title">
							Introducing a space where members of the MOST SBN
						</p>
						<p class="f-24 text-grey">
							Khusus buat Anda investor di Mandiri Sekuritas, ada cashback
							berupa top up ke RDN kamu sebesar Rp 50.000
						</p>
						<button class="btn--primary f-14">LIHAT PROMOSI</button>
					</div>
				</div>
			</div>
		</section>
		<section id="riset">
			<div class="container">
				<div class="bzg">
					<div class="bzg_c pr-32" data-col="m5">
						<p class="title">Rekomendasi Saham Hari Ini</p>
						<span class="f-14 text-grey">
							Last update : 10 : 30 : 00 WIB | 14 Jun 2020
						</span>
						<div class="none-stockpick mt-20 text-center f-14">
							<p class="f--semi">Tidak Ada Rekomendasi Saham Hari ini</p>
							<p>
								Rekomendasi berikutnya akan segera hadir.<br />
								Silahkan cek kembali di periode berikutnya
							</p>
						</div>
					</div>
					<div class="bzg_c" data-col="m7, l6">
						<p class="title">Riset Harian</p>
						<span class="f-14 text-grey">
							Lihat hasil-hasil analisa harian seputar saham di sini demi
							investasi yang tepat.
						</span>
						<ul class="list-nostyle riset-result">
							<li class="flex f-gap-20 v-center">
								<span class="f-16">16 Juli 2020</span>
								<a href="">Matriks Valuasi Saham 16 Juni 2020</a>
							</li>
							<li class="flex f-gap-20 v-center">
								<span class="f-16">16 Juli 2020</span>
								<a href="">Investor Digest 08 Juli 2020</a>
							</li>
							<li class="flex f-gap-20 v-center">
								<span class="f-16">16 Juli 2020</span>
								<a href="">Trading idea untuk 9 Juni 2020</a>
							</li>
							<li class="flex f-gap-20 v-center">
								<span class="f-16">16 Juli 2020</span>
								<a href="">Matriks Valuasi Saham Syariah 06 Juli 2020</a>
							</li>
						</ul>
						<button class="btn--primary">SELENGKAPNYA</button>
					</div>
				</div>
			</div>
		</section>
		<section id="berita">
			<div class="container relative">
				<div class="bzg">
					<div class="bzg_c text-white" data-col="l5">
						<h1>BERITA</h1>
						<nuxt-link to="/berita" class="flex v-center mb-64 f-gap-20">
							<p class="title mb-0 text-reg">Lihat berita terkini di sini</p>
							<i class="icon-long-arrow-right"></i>
						</nuxt-link>
						<p class="f-24 mb-30 pr-36">
							Simak berita seputar keuangan dan investasi, juga berita emiten,
							promo, hingga sayembara!
						</p>
						<div class="navigation">
							<i class="icon-long-arrow-left mr-8"></i>
							<i class="icon-long-arrow-right"></i>
						</div>
					</div>
					<div class="bzg_c pull-right" data-col="l6" data-offset="l1">
						<VueSlickCarousel v-bind="settings">
							<learningCard
								v-for="(news, i) in newsCarousel"
								:key="i"
								:content="news"
								:card-type="`article`"
							/>
						</VueSlickCarousel>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	data() {
		return {
			newsCarousel: [
				{
					category: 'Berita Emiten - 11 Jan 2020',
					img: 'cup.jpg',
					title:
						'Penawaran Umum Obligasi Berkelanjutan II Sarana Multi Infrastruktur Tahap IV'
				},
				{
					category: 'Berita Emiten - 11 Jan 2020',
					img: 'newspaper.jpg',
					title:
						'Penawaran Umum Obligasi Berkelanjutan II Sarana Multi Infrastruktur Tahap IV'
				}
			],
			settings: {
				variableWidth: true
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.navigation {
	font-size: 32px;

	i {
		&:hover {
			color: $primary !important;
			cursor: pointer;
		}
	}
}

.title {
	font-size: 30px;
	font-weight: 600;
	line-height: 1.3;
	margin-bottom: 18px;
}

#promo {
	.container {
		background: linear-gradient(90deg, #f2f2f2, 100%, #fff 100%);
		background-repeat: no-repeat;
		background-size: 85%;
	}

	.bzg_c {
		padding-top: 106px;
		padding-bottom: 106px;
	}

	.shadow {
		position: absolute;
		right: 0px;
		top: 0px;
		font-size: 150px;
		color: #e1e1e1;
		opacity: 30%;
	}
}

@media #{$medium} {
	#promo,
	#riset {
		.container {
			.bzg {
				.bzg_c:first-child {
					border-right: 1px solid #e2e2e2;
				}
			}
		}
	}
}

.none-stockpick {
	padding: 30px;
	box-shadow: 0px 9px 30px #43434312;
	border-radius: 3px;
}

#riset {
	.bzg_c {
		padding-top: 30px;
		padding-bottom: 71px;
	}

	@media #{$large} {
		.bzg_c:last-child {
			padding-right: 80px;
		}
	}
}

.riset-result {
	margin-top: 36px;

	li {
		padding-bottom: 24px;
		border-bottom: 1px solid #e2e2e2;
		margin-bottom: 32px;
	}

	a {
		font-size: 20px;
	}
}

#berita {
	background: linear-gradient(90deg, $primary-blue, 100%, #fff 100%);
	background-repeat: no-repeat;
	background-size: 96.1%;

	@media #{$large} {
		background-size: 83%;
	}

	h1 {
		font-size: 85px;
		line-height: 1;
		margin-bottom: 20px;

		@media #{$large} {
			font-size: 125px;
		}
	}

	.bzg {
		padding: 98px 0;
	}

	.card {
		width: 330px !important;
		margin-right: 35px;
		margin-bottom: 0px;
	}

	.pull-right {
		@media #{$large} {
			transform: translateX(40px);
			padding-left: 0px;
		}
	}

	.navigation {
		visibility: hidden;
	}
}
</style>

<style scoped>
#berita >>> .slick-prev {
	top: 372px;
	left: -662px;
}

#berita >>> .slick-next {
	top: 372px;
	left: -615px;
}

#berita >>> .slick-prev:before,
#berita >>> .slick-next:before {
	color: white !important;
}

#berita >>> .slick-prev:hover::before,
#berita >>> .slick-next:hover::before {
	color: #faa61a !important;
}

@media (max-width: 768px) {
	#berita >>> .slick-prev {
		top: -29px;
		left: 0px;
	}

	#berita >>> .slick-next {
		top: -29px;
		left: 46px;
	}
}
</style>
