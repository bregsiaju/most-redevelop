<template>
	<main class="site-main">
		<div class="container pt-28">
			<ul class="breadcrumb">
				<li><nuxt-link to="/riset-berita">Terbaru</nuxt-link></li>
				<li>Riset & Stockpick</li>
			</ul>
			<!-- <p class="title">Rekomendasi <strong>Saham</strong> Hari Ini</p> -->
			<p class="title"><strong>Riset</strong> Harian</p>
			<p class="text-grey f-24">
				Lihat hasil-hasil analisa harian seputar saham di sini.
			</p>
			<div class="filters">
				<li>Filters</li>
				<div class="bzg">
					<div class="bzg_c" data-col="s4">
						<span>
							<input
								type="text"
								class="form-input form-input--block"
								placeholder="Dari Tanggal"
							/>
						</span>
						<i class="bzi-plus"></i>
					</div>
					<div class="bzg_c" data-col="s4">
						<span>
							<input
								type="text"
								class="form-input form-input--block"
								placeholder="Sampai Tanggal"
							/>
						</span>
						<i class="bzi-plus"></i>
					</div>
					<div class="bzg_c" data-col="s4">
						<span>Jenis Riset</span>
						<i class="bzi-plus"></i>
					</div>
				</div>
			</div>

			<!-- riset's result -->
			<div class="bzg result">
				<div
					v-for="(result, i) in results"
					:key="i"
					class="bzg_c"
					data-col="m6, l4"
				>
					<cardsRisetCard :content="result" />
				</div>
			</div>
			<!-- end result -->

			<div class="btn-reload">LAINNYA</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			results: [
				{
					date: '08 Agu 2020',
					topic: 'Technical Analysis',
					title: 'Technical Analysis untuk 8 Juli 2020',
					totalViews: 102
				},
				{
					date: '08 Jul 2020',
					topic: 'Matrix Evaluation',
					title: 'Matriks Valuasi Saham 06 Juli 2020',
					totalViews: 110
				},
				{
					date: '08 Jun 2020',
					topic: 'Investor Digest',
					title: 'Investor Digest 30 Mei 2020',
					totalViews: 200
				},
				{
					date: '08 Jul 2020',
					topic: 'Matrix Evaluation',
					title: 'Matriks Valuasi Saham 06 Juli 2020',
					totalViews: 110
				},
				{
					date: '08 Agu 2020',
					topic: 'Technical Analysis',
					title: 'Technical Analysis untuk 8 Juli 2020',
					totalViews: 102
				},
				{
					date: '08 Jun 2020',
					topic: 'Investor Digest',
					title: 'Investor Digest 30 Mei 2020',
					totalViews: 200
				},
				{
					date: '08 Jun 2020',
					topic: 'Investor Digest',
					title: 'Investor Digest 30 Mei 2020',
					totalViews: 200
				},
				{
					date: '08 Agu 2020',
					topic: 'Technical Analysis',
					title: 'Technical Analysis untuk 8 Juli 2020',
					totalViews: 102
				},
				{
					date: '08 Jul 2020',
					topic: 'Matrix Evaluation',
					title: 'Matriks Valuasi Saham 06 Juli 2020',
					totalViews: 110
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
	margin-bottom: 25px;
}

.filters {
	padding-bottom: 50px;

	@media #{$large} {
		width: 40%;
	}

	.bzg {
		border-radius: 3px;
		background-color: $primary-blue;
		margin-left: 0;
		color: white;
		font-size: 16px;
		margin-top: 16px;

		.bzg_c {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 15px;

			.bzi-plus:before {
				font-size: 10px;
			}
		}

		.bzg_c:not(:last-child) {
			border-right: 1px solid #d2d2d2;
		}

		.form-input {
			background: transparent;
			border: none;
			color: white;
			padding: 0;

			&::placeholder {
				color: white;
				opacity: 1;
			}
		}
	}
}

.bzg.result {
	margin-left: -30px;

	.bzg_c {
		padding-left: 30px;
		margin-bottom: 30px;
	}
}

.btn-reload {
	margin: 70px auto;
	width: 100px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: $primary-blue;
	border-radius: 50%;
	border: 1px solid $primary-blue;

	&:hover {
		cursor: pointer;
		box-shadow: inset 0 0 0 3px #e6e6e6;
	}
}
</style>
