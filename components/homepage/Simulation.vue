<template>
	<div class="container">
		<div class="bzg">
			<div class="bzg_c input-data pt-32" data-col="m6">
				<h2>Profil Anda</h2>
				<div class="input-wrapper">
					<h4>Usia Anda</h4>
					<input-slider :value="24" />
				</div>
				<div class="input-wrapper">
					<h4>Lama Investasi</h4>
					<input-slider :icon="`icon-clock`" />
				</div>
				<div class="input-wrapper">
					<h4>Profil Risiko <i class="icon-question f-14 ml-8"></i></h4>
					<input-button :name="`risk`" :options="riskOption" />
				</div>
				<div class="input-wrapper">
					<h4>Modal Awal Investasi</h4>
					<input-button :name="`capital`" :options="capitalOption" />
				</div>
				<div class="input-wrapper">
					<h4>Investasi Tiap Bulan</h4>
					<input-button :name="`invest`" :options="investOption" />
				</div>
			</div>
			<div class="bzg_c pl-0" data-col="m6">
				<div class="result-wrapper">
					<div class="flex f-space-between v-center mb-40">
						<h2 class="mb-0">Hasil</h2>
						<div>
							<span><i class="icon-user"></i> Usia: <strong>30</strong></span>
							<span
								><i class="icon-clock"></i> Lama Investasi:
								<strong>10</strong></span
							>
						</div>
					</div>
					<h4>Rekomendasi dan Perkiraan Investasi</h4>
					<homepageChart />
					<div class="compare">
						<div class="bzg bzg--no-gutter">
							<div class="bzg_c text-bold text-primary-blue" data-col="m6">
								<p>Reksa Dana Pendapatan Tetap</p>
								<p>Rp. 246.735.612</p>
							</div>
							<div class="bzg_c text-center" data-col="m1">
								<p class="text-grey">VS</p>
								<p>&nbsp;</p>
							</div>
							<div class="bzg_c text-grey" data-col="m5">
								<p>Deposito</p>
								<p>Rp. 228.907.362</p>
							</div>
						</div>
					</div>
					<button class="btn--primary mt-32">Lihat Produk</button>
				</div>
				<div class="notes mt-32">
					<p>
						<span class="text-red">*</span>PT Mandiri Sekuritas tidak
						bertanggung jawab atas tingkat keakuratan hasil simulasi. Segala
						risiko akibat penggunaan hasil simulasi adalah sepenuhnya tanggung
						jawab (calon) investor.
					</p>
					<p>
						<span class="text-red">*</span>Tingkat indikasi hasil investasi
						dibuat berdasarkan rata-rata kinerja produk investasi di masa lalu
						dan bukan jaminan hasil investasi yang akan Anda peroleh.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Simulation',
	data() {
		return {
			riskOption: [
				{ label: 'Sangat Konservative', value: 'Sangat Konservative' },
				{ label: 'Konservative', value: 'Konservative' },
				{ label: 'Moderat', value: 'Moderat' },
				{ label: 'Agresif', value: 'Agresif' }
			],
			riskSelected: 'Sangat Konservative',
			capitalOption: [
				{ label: 'Rp1.000.000', value: 1000000 },
				{ label: 'Rp5.000.000', value: 5000000 },
				{ label: 'Rp10.000.000', value: 10000000 },
				{ label: 'Rp', value: 'other' }
			],
			capitalSelected: null,

			investOption: [
				{ label: 'Rp500.000', value: 500000 },
				{ label: 'Rp1.000.000', value: 1000000 },
				{ label: 'Rp2.000.000', value: 2000000 },
				{ label: 'Rp', value: 'other' }
			],
			investSelected: null
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	padding-top: 45px;
}

.bzg_c.input-data {
	padding-right: 56px;
}

h2 {
	color: #000;
	font-size: 30px;
	position: relative;
	width: fit-content;
	font-weight: 600;
	margin-bottom: 40px;

	&:after {
		content: '';
		position: absolute;
		height: 35%;
		width: 100%;
		background-color: $primary;
		opacity: 70%;
		bottom: 0;
		left: 0;
		z-index: -1;
	}
}

h4 {
	color: #000;
	font-weight: 600;
	font-size: 20px;
	margin-bottom: 25px;
}

.input-wrapper {
	margin-bottom: 25px;
}

.result-wrapper {
	box-shadow: 0px 7px 30px #0000000b;
	padding: 32px;
}

.compare {
	margin-top: 28px;
	padding: 20px 24px;
	background-color: #f7f7f7;
	border-radius: 3px;

	.bzg_c > p:first-child {
		font-size: 18px;
	}

	.bzg_c > p:last-of-type {
		margin-bottom: 0;
		font-size: 20px;
	}
}

.notes {
	color: #bcbcbc;
	text-align: justify;
	font-size: 14px;
	padding-right: 24px;

	p {
		margin-bottom: 0;
	}
}
</style>
