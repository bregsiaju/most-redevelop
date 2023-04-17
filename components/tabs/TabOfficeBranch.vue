<template>
	<div>
		<ul class="tabs__bar--justify">
			<li
				v-for="tab in tabs"
				:key="tab.id"
				class="tabs__nav"
				:class="{ 'is-active': activeTab === tab.id }"
				@click="activeTab = tab.id"
			>
				{{ tab.title }}
			</li>
		</ul>
		<!-- content -->
		<div v-for="tab in tabs" v-show="activeTab === tab.id" :key="tab.id">
			<div class="bzg">
				<div
					v-for="(item, i) in tab.branch"
					:key="i"
					class="bzg_c"
					data-col="m6"
				>
					<CardBranchOffice :content="item" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CardBranchOffice from '../cards/CardBranchOffice.vue'

export default {
	name: 'TabContentBottom',
	components: {
		CardBranchOffice
	},
	data() {
		return {
			activeTab: 1,
			tabs: [
				{
					id: 1,
					title: 'Lokasi Cabang',
					branch: [
						{
							name: 'Galeri Investasi Bursa Efek Indonesia - Universitas Pakuan Bogor',
							address:
								'Fakultas Ekonomi Universitas Pakuan, Jl. Pakuan, Tegallega, Bogor Tengah, Bogor, Jawa Barat 16129',
							telp: '+62 251 8314918'
						},
						{
							name: 'Galeri Investasi Bursa Efek Indonesia - Universitas Negeri Sebelas Maret Solo',
							address:
								'Universitas Sebelas Maret Surakarta, Fakultas Ekonomi dan Bisnis, Jalan Ir. Sutami 36 A Surakarta, 57126',
							telp: '(+62)271-646994'
						}
					]
				},
				{
					id: 2,
					title: 'RRB Bank Mandiri',
					branch: [
						{
							name: 'Galeri Investasi Bursa Efek Indonesia – Indonesia Banking School',
							address:
								'Jalan Kemang Raya No.35, RT.7/RW.1, Bangka, Mampang Prapatan, Jakarta Selatan, 12730',
							telp: '-'
						},
						{
							name: 'Galeri Investasi Bursa Efek Indonesia - Universitas Pakuan Bogor',
							address:
								'Fakultas Ekonomi Universitas Pakuan, Jl. Pakuan, Tegallega, Bogor Tengah, Bogor, Jawa Barat 16129',
							telp: '+62 251 8314918'
						},
						{
							name: 'Galeri Investasi Bursa Efek Indonesia - Universitas Negeri Sebelas Maret Solo',
							address:
								'Universitas Sebelas Maret Surakarta, Fakultas Ekonomi dan Bisnis, Jalan Ir. Sutami 36 A Surakarta, 57126',
							telp: '(+62)271-646994'
						}
					]
				},
				{
					id: 3,
					title: 'Galeri Edukasi',
					branch: [
						{
							name: 'Galeri Investasi Bursa Efek Indonesia - Universitas MH. Thamrin',
							address:
								'Kampus AKA, Jl. Bangka Raya 2, Kebayoran Baru Jakarta Selatan',
							telp: '(62-21) Fax. (62-21)'
						},
						{
							name: 'Galeri Investasi Bursa Efek Indonesia - Universitas Pakuan Bogor',
							address:
								'Fakultas Ekonomi Universitas Pakuan, Jl. Pakuan, Tegallega, Bogor Tengah, Bogor, Jawa Barat 16129',
							telp: '+62 251 8314918'
						}
					]
				},
				{
					id: 4,
					title: 'Galeri Investasi',
					branch: [
						{
							name: 'Galeri Investasi Bursa Efek Indonesia – Indonesia Banking School',
							address:
								'Jalan Kemang Raya No.35, RT.7/RW.1, Bangka, Mampang Prapatan, Jakarta Selatan, 12730',
							telp: '-'
						},
						{
							name: 'Galeri Investasi Bursa Efek Indonesia - Universitas MH. Thamrin',
							address:
								'Kampus AKA, Jl. Bangka Raya 2, Kebayoran Baru Jakarta Selatan',
							telp: '(62-21) Fax. (62-21)'
						},
						{
							name: 'Galeri Investasi Bursa Efek Indonesia - Universitas Pakuan Bogor',
							address:
								'Fakultas Ekonomi Universitas Pakuan, Jl. Pakuan, Tegallega, Bogor Tengah, Bogor, Jawa Barat 16129',
							telp: '+62 251 8314918'
						},
						{
							name: 'Galeri Investasi Bursa Efek Indonesia - Universitas Negeri Sebelas Maret Solo',
							address:
								'Universitas Sebelas Maret Surakarta, Fakultas Ekonomi dan Bisnis, Jalan Ir. Sutami 36 A Surakarta, 57126',
							telp: '(+62)271-646994'
						}
					]
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.tabs__bar--justify {
	margin-bottom: 56px;

	.tabs__nav {
		background-color: #f2f2f2;
		font-size: 1.7em;
		padding: 24px;

		&.is-active {
			background-color: #fff;
		}

		&:not(.is-active):hover {
			border-top: 3px solid;
			color: $primary-blue;
			background-color: #f7f7f7;
		}

		@media #{$md} {
			font-size: 1.25em;
			justify-content: flex-start;
		}
	}

	@media #{$sm} {
		justify-content: flex-start;
		margin-bottom: 26px;

		.tabs__nav {
			padding: 16px;
		}
	}
}

.bzg {
	margin-left: -40px;
	.bzg_c {
		padding-left: 40px;
		margin-bottom: 40px;

		@media #{$sm} {
			margin-bottom: 24px;
		}
	}
}
</style>
