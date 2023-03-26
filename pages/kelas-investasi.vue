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
					</div>
				</template>
				<template #main-content>
					<div class="bzg card-wrapper ml-0">
						<div
							v-for="(event, i) in events"
							:key="i"
							class="bzg_c"
							data-col="m6"
						>
							<learningCard :content="event" :card-type="`event`" />
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
			events: [
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
