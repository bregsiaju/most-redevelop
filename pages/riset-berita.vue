<template>
	<main class="site-main">
		<section id="promo" class="relative">
			<div class="container">
				<h1 class="shadow">Promo</h1>
				<div class="bzg">
					<div class="bzg_c" data-col="m5, l5">
						<div>
							<img src="/assets/img/news/cup.jpg" alt="promo banner" />
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
		<section id="berita"></section>
	</main>
</template>

<script>
export default {}
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

.container {
	.bzg {
		.bzg_c:first-child {
			border-right: 1px solid #e2e2e2;
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
</style>
