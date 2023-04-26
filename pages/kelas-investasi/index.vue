<template>
	<main class="site-main">
		<!-- ads registrasion -->
		<div
			v-show="!notifHidden"
			class="top-notif bg-primary-blue pv-20 text-white flex relative"
		>
			<div class="container">
				<span
					>Mulai investasi untuk masa depan pasti bersama Mandiri
					Sekuritas</span
				>
				<nuxt-link to="/login" class="text-primary"><u>sekarang</u></nuxt-link>
			</div>
			<i class="bzi-close" @click="notifHidden = true"></i>
		</div>

		<div class="container">
			<Sticky>
				<template #sticky-content>
					<div class="pt-28">
						<ul class="breadcrumb">
							<li><nuxt-link to="/belajar">Belajar</nuxt-link></li>
							<li>Training Offline</li>
						</ul>
						<p class="title">Training <strong>Offline</strong></p>
						<div class="filters">
							<li>Filters</li>
							<div class="bzg">
								<div class="bzg_c" data-col="s4">
									<span>Bulan</span>
									<i class="bzi-plus"></i>
								</div>
								<div class="bzg_c" data-col="s4">
									<span>Kota</span>
									<i class="bzi-plus"></i>
								</div>
								<div class="bzg_c" data-col="s4">
									<span>Level</span>
									<i class="bzi-plus"></i>
								</div>
							</div>
							<!-- test view when any content is not found -->
							<button
								class="btn--ghost-primary-blue mt-28"
								@click="filterNotFound = !filterNotFound"
							>
								{{ filterNotFound ? 'Filter On' : 'Filter Off' }}
							</button>
						</div>
					</div>
				</template>
				<template #main-content>
					<div v-if="!filterNotFound" class="bzg card-wrapper ml-0 pt-28">
						<div
							v-for="(event, i) in events"
							:key="i"
							class="bzg_c"
							data-col="m6"
						>
							<learningCard :content="event" :card-type="`event`" />
						</div>
					</div>

					<!-- if content not found  -->
					<div v-if="filterNotFound" class="not-found">
						<div class="container container--small text-center">
							<img src="~assets/img/not-found.png" alt="icon not found" />
							<p class="f-24 f--semi mb-20">
								Tidak Ditemukan Kelas Investasi Baru.
							</p>
							<p class="f-18">
								Kelas investasi berikutnya akan segera hadir. Silahkan cek
								kembali di periode berikutnya
							</p>
						</div>
					</div>
				</template>
			</Sticky>
		</div>
		<!-- recomendations -->
		<div v-if="filterNotFound" class="recomendations container">
			<h1 class="title f-36">Anda mungkin juga menyukai ini.</h1>
			<div class="bzg">
				<div
					v-for="(recomendation, i) in recomendations"
					:key="i"
					class="bzg_c"
					data-col="l4"
				>
					<learningCard :content="recomendation" :card-type="`article`" />
				</div>
			</div>
		</div>
		<!-- end recomendations -->

		<!-- call to join component -->
		<homepageJoin />
	</main>
</template>

<script>
export default {
	data() {
		return {
			notifHidden: false,
			filterNotFound: false,
			events: [
				{
					date: '28 Okt 2020',
					img: 'training-1.png',
					title: 'Pengenalan Pasar Modal di Indonesia',
					location: 'Ruang SME PT.Bank,Mandiri Surapati, Bandung',
					quota: 'Tidak ada kuota tersisa',
					url: '/pengenalan-pasar-modal-di-indonesia'
				},
				{
					date: '28 Okt 2020',
					img: 'training-offline.png',
					title: 'Pengenalan Pasar Modal di Indonesia',
					location: 'Ruang SME PT.Bank,Mandiri Surapati, Bandung',
					quota: 'Tidak ada kuota tersisa'
				},
				{
					date: '28 Okt 2020',
					img: 'training-online.png',
					title: 'Pengenalan Pasar Modal di Indonesia',
					location: 'Ruang SME PT.Bank,Mandiri Surapati, Bandung',
					quota: 'Tidak ada kuota tersisa'
				},
				{
					date: '28 Okt 2020',
					img: 'training-1.png',
					title: 'Pengenalan Pasar Modal di Indonesia',
					location: 'Ruang SME PT.Bank,Mandiri Surapati, Bandung',
					quota: 'Tidak ada kuota tersisa'
				},
				{
					date: '28 Okt 2020',
					img: 'training-1.png',
					title: 'Pengenalan Pasar Modal di Indonesia',
					location: 'Ruang SME PT.Bank,Mandiri Surapati, Bandung',
					quota: 'Tidak ada kuota tersisa'
				},
				{
					date: '28 Okt 2020',
					img: 'training-online.png',
					title: 'Pengenalan Pasar Modal di Indonesia',
					location: 'Ruang SME PT.Bank,Mandiri Surapati, Bandung',
					quota: 'Tidak ada kuota tersisa'
				},
				{
					date: '28 Okt 2020',
					img: 'training-1.png',
					title: 'Pengenalan Pasar Modal di Indonesia',
					location: 'Ruang SME PT.Bank,Mandiri Surapati, Bandung',
					quota: 'Tidak ada kuota tersisa'
				},
				{
					date: '28 Okt 2020',
					img: 'training-offline.png',
					title: 'Pengenalan Pasar Modal di Indonesia',
					location: 'Ruang SME PT.Bank,Mandiri Surapati, Bandung',
					quota: 'Tidak ada kuota tersisa'
				}
			],
			recomendations: [
				{
					category: 'Saham',
					img: 'video-thumbnail.png',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials'
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
	},
	head() {
		return {
			...this.$SEOMeta({
				metaTitle: 'Kelas Investasi'
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
	line-height: 1;
	color: $dark-grey;
	margin-bottom: 30px;
}

.filters {
	padding-bottom: 100px;

	@media #{$md} {
		padding-bottom: 32px;
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
	}
}

.card-wrapper {
	background-image: linear-gradient(90deg, #f2f2f2, 35%, #fff 35%);

	.bzg_c {
		padding-left: 44px;

		& > .card {
			margin-bottom: 100px;
		}

		@media #{$sm} {
			padding-left: 0px;

			& > .card {
				margin-bottom: 56px;
			}
		}
	}

	@media #{$medium} {
		.bzg_c:nth-child(odd) {
			transform: translateY(75px);
		}
	}
}

.not-found {
	background-color: #f2f2f2;

	@media #{$large} {
		width: 100%;
		padding: 72px 0;
	}
}

.recomendations {
	padding: 55px 0 20px;
}
</style>
