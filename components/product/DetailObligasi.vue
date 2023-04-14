<template>
	<div class="article-details">
		<!-- breadcrumbs -->
		<ul class="breadcrumb">
			<slot name="nav-breadcrumb">
				<li><nuxt-link to="/saham">Produk</nuxt-link></li>
				<li><nuxt-link to="/obligasi">Obligasi</nuxt-link></li>
				<li>Obligasi SBN SERI ORI017</li>
			</slot>
		</ul>
		<!-- end breadcrumbs -->

		<!-- title -->
		<h1 class="title">Obligasi SBN SERI ORI017</h1>

		<!-- date & share -->
		<div class="type-date">
			<span>Pemerintah &#8212; Pemerintah RI</span>
			<span>Masa Penawaran Awal 16 - 20 Des 2020</span>
		</div>
		<!-- end date & share -->

		<!-- article content -->
		<article>
			<!-- media -->
			<div class="responsive-media r-16-9">
				<img
					src="/assets/img/products/obligasi-pemerintah.png"
					alt="obligasi"
					class="--contain"
				/>
			</div>
			<!-- end media -->

			<!-- content -->
			<div class="content mt-36">
				<div class="bzg heading bzg--no-gutter">
					<div class="bzg_c" data-col="m3, l4">
						<h4>Informasi</h4>
					</div>
					<div class="bzg_c pl-8" data-col="m9, l8">
						<h4>Deskripsi</h4>
					</div>
				</div>
				<ul class="list-nostyle list-stripped">
					<li v-for="(item, i) in content" :key="i">
						<div class="bzg">
							<div class="bzg_c" data-col="m3, l4">
								<p class="f--semi">{{ item.informasi }}</p>
							</div>
							<div class="bzg_c" data-col="m9, l8">
								<ul
									v-if="typeof item.deskripsi === 'object'"
									class="list-nostyle list-desc"
								>
									<li v-for="(sub, x) in item.deskripsi" :key="'sub' + x">
										{{ sub }}
									</li>
								</ul>
								<p v-else>{{ item.deskripsi }}</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<!-- end content -->
		</article>
		<!-- end acticle content -->
	</div>
</template>

<script>
export default {
	name: 'DetailObligasi',
	data() {
		return {
			content: [
				{
					informasi: 'Nama Instrument',
					deskripsi: 'Obligasi SBN SERI ORI017'
				},
				{
					informasi: 'Rating',
					deskripsi:
						'idAAA (Triple A, Stable Outlook) dari PT Pemeringkat Efek Indonesia (Pefindo)'
				},
				{
					informasi: 'Tenor & Indikasi Kupon',
					deskripsi: [
						'Seri A (3 Tahun): 7,10% - 8,30%',
						'Seri B (5 Tahun): 7,40% - 8,60%'
					]
				},
				{
					informasi: 'Nominal Target Penerbitan',
					deskripsi: 'Rp1.000.000.000.000,-'
				},
				{
					informasi: 'Bidang Usaha',
					deskripsi: 'Bidang Keuangan'
				},
				{
					informasi: 'Pembayaran Kupon',
					deskripsi: 'Triwulanan'
				},
				{
					informasi: 'Jaminan',
					deskripsi:
						'Obligasi ini tidak dijamin dengan suatu jaminan khusus, namun dijamin dengan seluruh harta kekayaan Perseroan baik barang bergerak maupun barang tidak bergerak, baik yang telah ada maupun yang akan ada dikemudian hari sesuai dengan ketentuan dalam pasal 1131 dan pasal 1132 Kitab Undang-Undang Hukum Perdata Indonesia. Hak Pemegang Obligasi adalah paripassu tanpa preferen dengan hak-hak kreditur Perseroan lain sesuai dengan peraturan perundang-undangan yang berlaku.'
				},
				{
					informasi: 'Rencana Penggunaan Dana',
					deskripsi:
						'Dana yang diperoleh dari Penawaran Umum Obligasi setelah dikurangi dengan biaya-biaya Emisi, seluruhnya akan digunakan untuk kegiatan pembiayaan infrastruktur.'
				},
				{
					informasi: 'Masa Penawaran Awal',
					deskripsi: ['Tanggal Mulai 6 Apr 2020', 'Tanggal Akhir 20 Apr 2020']
				},
				{
					informasi: 'Tanggal Pembayaran Oleh Nasabah',
					deskripsi: '30 Apr 2020'
				},
				{
					informasi: 'Minimum Pemesanan',
					deskripsi: 'Rp. 50,000,000,- dan kelipatan Rp. 50,000,000,-'
				},
				{
					informasi: 'Batas Waktu Pembukaan Rekening',
					deskripsi: '20 Apr 2020'
				},
				{
					informasi: 'Biaya Pemesanan',
					deskripsi: '1,0% dari nominal pesanan'
				},
				{
					informasi: 'Pajak',
					deskripsi: '15%'
				},
				{
					informasi: 'Indikasi Tanggal Distribusi',
					deskripsi: '30 Apr 2020'
				},
				{
					informasi: 'Indikasi Tanggal Pencatatan',
					deskripsi: '30 Apr 2020'
				},
				{
					informasi: 'Pemeringkat',
					deskripsi: 'PT Pemeringkat Efek Indonesia (Pefindo)'
				},
				{
					informasi: 'Pencatatan',
					deskripsi: 'Bursa Efek Indonesia'
				},
				{
					informasi: 'Agen Pembayaran',
					deskripsi: 'PT Kustodian Sentral Efek Indonesia'
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
		margin-bottom: 20px;
		line-height: 1.3;
		color: #3b3b3b;

		@media #{$large} {
			width: 70%;
		}
	}

	.type-date {
		color: #868686;
		font-size: 18px;
		margin-bottom: 8px;

		span:not(:first-child) {
			border-left: 1px solid $primary-blue;
			padding-left: 15px;
			margin-left: 15px;
		}
	}

	@media #{$sm} {
		.breadcrumb {
			font-size: 14px;
		}

		.type-date {
			font-size: 14px;

			span:not(:first-child) {
				padding-left: 8px;
				margin-left: 8px;
			}
		}
	}
}

.content {
	border-bottom: 1px solid #e2e2e2;
	margin-bottom: 80px;

	.bzg.heading {
		border-bottom: 1px solid #e2e2e2;

		@media #{$sm} {
			display: none;
		}
	}
}

.list-stripped {
	p {
		margin-bottom: 0;
		font-size: 1.2em;
		padding: 16px 0;
	}

	& > li:nth-child(even) {
		background-color: #f5f5f5;
	}

	ul.list-desc {
		padding: 16px 0;

		li {
			font-size: 1.2em;

			&:not(:last-of-type) {
				margin-bottom: 8px;
			}

			&::before {
				font-family: 'bz-icon' !important;
				content: '\f058';
				margin-right: 8px;
				color: $primary;
				background: #fff;
			}
		}
	}

	@media #{$sm} {
		& > li {
			padding: 8px;
		}

		p {
			font-size: 1.2em;
			padding: 0px 8px;
		}

		ul.list-desc {
			padding: 0 8px;

			li {
				font-size: 16.8px;

				&:not(:last-of-type) {
					margin-bottom: 0px;
				}
			}
		}
	}
}
</style>
