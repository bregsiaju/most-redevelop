<template>
	<main class="site-main">
		<div class="container">
			<Sticky>
				<template #sticky-content>
					<ul class="breadcrumb">
						<li><nuxt-link to="/belajar">Belajar</nuxt-link></li>
						<li>Berita</li>
					</ul>
					<p class="title">Berita</p>
					<div class="filters">
						<li>Filters</li>
						<div class="bzg">
							<div class="bzg_c" data-col="s6">
								<span>Kategori</span>
								<i class="bzi-plus"></i>
							</div>
							<div class="bzg_c" data-col="s6">
								<span>Tagging</span>
								<i class="bzi-plus"></i>
							</div>
						</div>
					</div>
				</template>
				<template #main-content>
					<div class="bzg card-wrapper ml-0">
						<div
							v-for="(article, i) in articles"
							:key="i"
							class="bzg_c"
							data-col="m6"
						>
							<learningCard :content="article" :card-type="`article`" />
						</div>
					</div>
				</template>
			</Sticky>
		</div>

		<homepageJoin />
	</main>
</template>

<script>
export default {
	data() {
		return {
			notifHidden: false,
			articles: [
				{
					img: 'training-online.png',
					category: 'Berita Emiten - 20 Jan 2020',
					title:
						'Pendapatan Turun 51 Persen, Laba Jasa Marga (JSMR) Ambles 90 Persen'
				},
				{
					img: 'training-offline.png',
					category: 'Berita Emiten - 20 Jan 2020',
					title: 'Harga Saham Emiten Pelayaran Naik Kencang',
					duration: 3
				},
				{
					img: 'training-offline.png',
					category: 'Berita Emiten - 11 Jan 2020',
					title:
						'Penawaran Reksa Dana Terproteksi (RDT) INSIGHT TERPROTEKSI 59',
					duration: 3
				},
				{
					img: 'training-online.png',
					category: 'Berita Emiten - 11 Jan 2020',
					title: 'Simak Saham yang Bisa Dilirik dan yang Perlu Diwaspadai'
				},
				{
					img: 'training-offline.png',
					category: 'Berita Emiten - 11 Jan 2020',
					title:
						'Net Buy Rp49 Miliar, IHSG Naik 0,75 Persen. 5 Saham Ini Yang Diborong Asing'
				},
				{
					img: 'training-online.png',
					category: 'Berita Emiten - 11 Jan 2020',
					title:
						'Pendapatan Naik, Rugi Salim Ivomas (SIMP) Susut Jadi Rp300 Miliar',
					duration: 3
				},
				{
					img: 'training-offline.png',
					category: 'Berita Emiten - 11 Jan 2020',
					title:
						'Dua Program Bagi Pelaku Usaha untuk Ciptakan Rasa Aman di Tengah Pandemi Covid-19'
				},
				{
					img: 'training-offline.png',
					category: 'Berita Emiten - 11 Jan 2020',
					title:
						'New Normal, Bank Mandiri Tawarkan Investasi Aset Property Murah'
				}
			]
		}
	},
	head() {
		return {
			...this.$SEOMeta({
				metaTitle: 'Kumpulan Berita'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.top-notif {
	font-size: 18px;

	@media #{$medium} {
		font-size: 22px;
	}

	.bzi-close {
		position: absolute;
		right: 2%;

		&:hover {
			cursor: pointer;
		}
	}
}

.title {
	font-size: 45px;
	line-height: 1.3;
	color: $dark-grey;
	margin-bottom: 30px;
}

.filters {
	padding-bottom: 100px;

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
	}
}

.card-wrapper {
	.bzg_c {
		padding-left: 44px;

		& > .card {
			margin-bottom: 100px;
		}
	}

	@media #{$medium} {
		.bzg_c:nth-child(odd) {
			transform: translateY(75px);
		}

		.bzg_c > .card {
			margin-bottom: 186px;
		}
	}
}
</style>
