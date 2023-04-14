<template>
	<div class="main-wrapper relative">
		<h1 class="shadow">Layanan</h1>
		<div class="container">
			<h1 class="text-reg title">Penawaran <b>Obligasi</b></h1>
			<div class="bzg">
				<div class="bzg_c" data-col="l4">
					<div class="filters">
						<li>Filters</li>
						<div class="bzg">
							<div class="bzg_c" data-col="s6">
								<span>All</span>
								<i class="bzi-plus"></i>
							</div>
							<div class="bzg_c" data-col="s6">
								<span>Semua Tipe</span>
								<i class="bzi-plus"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bzg">
				<div v-for="item in 9" :key="item" class="bzg_c content" data-col="l4">
					<div class="card-content-wrapper">
						<span class="text-green">16 - 20 Des 2020</span>
						<h5 class="mb-10">
							Obligasi Berkelanjutan II Bank Mandiri Tahap I
						</h5>
						<div class="card-footer relative">
							<div class="bzg">
								<div class="bzg_c" data-col="s3">
									<span class="text-grey">Tipe</span>
								</div>
								<div class="bzg_c" data-col="s7">
									<span>Korporat</span>
								</div>
							</div>
							<div class="bzg">
								<div class="bzg_c" data-col="s3">
									<span class="text-grey">Penerbit</span>
								</div>
								<div class="bzg_c" data-col="s7">
									<span>Bank Mandiri</span>
								</div>
							</div>
							<nuxt-link to="">
								<ArrowCircle />
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
			<p>
				<i
					><span class="text-red">*</span>Jadwal indikatif dan dapat berubah
					sewaktu-waktu, kontak
					<a
						href="mailto:nonequityproduct@mandirisek.co.id"
						class="text-primary-blue text-underline"
					>
						nonequityproduct@mandirisek.co.id
					</a>
					untuk konfirmasi pemesanan dan informasi lebih lanjut.</i
				>
			</p>
			<p class="kamus mb-40">
				Buka
				<nuxt-link to="/istilah-investasi/A">Kamus Investasi</nuxt-link> untuk
				memahami istilah-istilah yang masih asing bagi Anda.
			</p>

			<!-- pagination -->
			<ul class="pagination">
				<li>
					<i class="bzi-angle-left"></i>
				</li>
				<li v-for="i in 4" :key="i" :class="i === 1 ? 'active' : ''">
					{{ i }}
				</li>
				<li>
					<i class="bzi-angle-right"></i>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import ArrowCircle from '../icons/ArrowCircle.vue'

export default {
	name: 'Service',
	components: { ArrowCircle },
	props: {
		content: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.main-wrapper {
	margin: 80px 0 64px;
}

.shadow {
	position: absolute;
	top: -86px;
	right: 0px;
	opacity: 0.3;
	font-size: 150px;
	color: #e1e1e1;
	line-height: 1;
	z-index: -1;

	@media #{$md} {
		top: -45px;
		font-size: 100px;
	}

	@media #{$sm} {
		font-size: 70px;
	}
}

h1 {
	line-height: 1.3;
}

.filters {
	margin-bottom: 44px;

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

.bzg_c.content {
	margin-bottom: 40px;
}

.card-content-wrapper {
	background: white;
	padding: 15px 20px;
	box-shadow: 0px 6px 30px #00000015;
	border-radius: 8px;
	height: 100%;

	h5 {
		border-bottom: 1px solid #bcbbbb;
		padding-bottom: 16px;
	}
}

.card-footer {
	a {
		position: absolute;
		right: 0px;
		top: 20%;
	}
}

.kamus {
	font-size: 20px;

	a {
		color: $primary;
		text-decoration: underline;

		&:hover {
			color: $link_hover;
		}
	}

	@media #{$sm} {
		font-size: 16px;
	}
}

@media #{$large} {
	.content-wrapper {
		width: 65%;

		p {
			font-size: 24px;
		}
	}
}
</style>
