<template>
	<main class="site-main">
		<div class="container">
			<Sticky>
				<template #sticky-content>
					<ul class="breadcrumb mt-20">
						<li><nuxt-link to="/belajar">Belajar</nuxt-link></li>
						<li>Tips & Trik</li>
					</ul>
					<p class="title"><strong>Tips & Trik</strong><br />Investasi</p>
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
					category: 'Saham',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials'
				},
				{
					img: 'training-offline.png',
					category: 'Saham',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials',
					duration: 15
				},
				{
					img: 'training-offline.png',
					category: 'Saham',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials',
					duration: 7
				},
				{
					img: 'training-online.png',
					category: 'Saham',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials'
				},
				{
					img: 'training-offline.png',
					category: 'Saham',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials'
				},
				{
					img: 'training-online.png',
					category: 'Saham',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials',
					duration: 15
				},
				{
					img: 'training-offline.png',
					category: 'Saham',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials'
				},
				{
					img: 'training-offline.png',
					category: 'Saham',
					title: '5 Jenis Investasi Paling Tepat Untuk Millennials'
				}
			]
		}
	},
	head() {
		return {
			...this.$SEOMeta({
				metaTitle: 'Artikel & Tips Investasi'
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
</style>
