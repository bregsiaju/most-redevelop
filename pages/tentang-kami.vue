<template>
	<main class="site-main">
		<!-- header -->
		<section id="header">
			<div class="container">
				<div class="bzg v-center">
					<div class="bzg_c" data-col="m5, l4">
						<div class="responsive-media r-square">
							<img src="/assets/img/mandiri-tower.jpg" alt="mandiri tower" />
						</div>
					</div>
					<div class="bzg_c" data-col="m7, l8">
						<h1 class="title text-reg">Tentang <b>Mandiri Sekuritas</b></h1>
						<p class="f-24 text-grey">
							Kami adalah salah satu Bank Investasi terdepan dan Broker Teraktif
							di pasar modal Indonesia. Sebagai salah satu perusahaan sekuritas
							terbaik di Indonesia, PT Mandiri Sekuritas terdaftar dan diawasi
							oleh Otoritas Jasa Keuangan (OJK).
						</p>
						<button class="btn--primary f-14">LIHAT SELENGKAPNYA</button>
					</div>
				</div>
			</div>
		</section>
		<!-- komitmen -->
		<section id="commitment">
			<div class="container">
				<h1 class="title text-reg text-center">
					Kami <b>berkomitmen</b> menjadi sahabat investasi tepercaya untuk
					wujudkan mimpimu
				</h1>
				<div class="bzg">
					<div class="bzg_c relative" data-col="m4">
						<span>1</span>
						<p class="f-24">
							Perusahaan Sekuritas Indonesia sebagai Pemain Regional Asia
						</p>
					</div>
					<div class="bzg_c relative" data-col="m4">
						<span>2</span>
						<p class="f-24">
							Menyediakan Layanan Solusi Pasar Modal yang Komprehensif
						</p>
					</div>
					<div class="bzg_c relative" data-col="m4">
						<span>3</span>
						<p class="f-24">Memiliki Tim Dealer dan Research Terpercaya</p>
					</div>
				</div>
				<div class="flex h-center">
					<button class="btn--primary">TEMUI TIM KAMI</button>
				</div>
			</div>
		</section>
		<!-- tentang platform -->
		<section id="platform">
			<div class="container">
				<div class="bzg v-center">
					<div class="bzg_c" data-col="m6, l5">
						<h1 class="title text-reg">
							Tentang Platform MOST dari <b>Mandiri Sekuritas</b>
						</h1>
						<p class="f-24">
							Layanan <i>Mandiri Online Securities Trading</i> (MOST) merupakan
							layanan komprehensif dari kami untuk memudahkan Anda melakukan
							transaksi efek di mana pun dan kapan pun. Cukup gunakan gawai
							favorit Anda yang terhubung dengan jaringan internet, maka Anda
							bisa melakukan transaksi dengan aman dan nyaman.
						</p>
						<div class="bzg bzg--no-gutter f-gap-20 pt-24">
							<div class="bzg_c" data-col="s4">
								<nuxt-link to="" class="btn--primary btn--block"
									>PLATFORM KAMI</nuxt-link
								>
							</div>
							<div class="bzg_c" data-col="s4">
								<nuxt-link to="" class="btn--ghost-primary btn--block"
									>BANTUAN</nuxt-link
								>
							</div>
						</div>
					</div>
					<div class="bzg_c" data-col="m6, l7">
						<img src="/assets/img/platform-most.png" class="pull-right" />
					</div>
				</div>
			</div>
		</section>
		<!-- branch office (tab) -->
	</main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
	padding: 40px 0;
}

h1 {
	line-height: 1.3;
}

#header {
	.bzg_c:nth-child(2) {
		padding-left: 80px;
	}
}

#commitment {
	.title {
		width: 70%;
		margin: 45px auto;
	}

	.bzg_c {
		padding: 81px 0 81px 54px;
	}

	span {
		position: absolute;
		font-size: 200px;
		font-weight: bold;
		left: 0px;
		top: 0px;
		z-index: -1;
		color: #f3f5f6;
		line-height: 1;
	}
}

#platform {
	overflow: hidden;

	p {
		line-height: 1.3;
	}

	.pull-right {
		transform: translateX(110px);
	}
}
</style>
