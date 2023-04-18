<template>
	<main class="site-main">
		<FeatureBanner />
		<section id="most-mobile">
			<div class="container">
				<FeatureBenefit :content="mobile" />
			</div>
		</section>
		<section id="most-desktop">
			<div class="container">
				<FeatureBenefit :content="desktop" />
			</div>
		</section>
		<section id="most-web">
			<div class="container">
				<FeatureBenefit :content="web" />
			</div>
		</section>
		<section id="fitur">
			<div class="container">
				<div class="heading">
					<h1 class="title text-reg">
						Lihat <b>perbandingan fitur</b> platform MOST di sini.
					</h1>
					<p class="text-grey">
						Pilih platform MOST yang paling sesuai dengan kebutuhan transaksi
						Anda.
					</p>
				</div>
			</div>
		</section>
		<LastSection :data="cto" />
	</main>
</template>

<script>
import FeatureBanner from '~/components/feature/FeatureBanner.vue'
import FeatureBenefit from '~/components/feature/FeatureBenefit.vue'
import LastSection from '~/components/LastSection.vue'

export default {
	components: {
		FeatureBanner,
		FeatureBenefit,
		LastSection
	},
	data() {
		return {
			mobile: {
				name: 'Mobile',
				image: 'most-mobile.png',
				headline: `Kenyamanan transaksi <b>dalam genggaman.</b>`,
				benefit: [
					{
						icon: 'icon-hp.png',
						text: 'Tersedia untuk Android dan iOS, kompatibel dengan berbagai macam gadget yang tersedia.'
					},
					{
						icon: 'icon-pricetag.png',
						text: 'Lebih hemat data dibandingkan dengan platform lainnya.'
					},
					{
						icon: 'icon-pricetag.png',
						text: 'Lebih hemat data dibandingkan dengan platform lainnya.'
					}
				]
			},
			desktop: {
				name: 'Desktop App',
				image: 'platform-laptop.png',
				headline: `Aplikasi desktop yang dapat Anda unduh di <b>PC/Laptop.</b>`,
				benefit: [
					{
						icon: 'icon-person.png',
						text: 'Cocok untuk para heavy trader yang ingin berinvestasi dengan aman dan nyaman.'
					},
					{
						icon: 'icon-pencil.png',
						text: 'Fitur customized view di dashboard yang bisa Anda sesuaikan dengan kebutuhan.'
					},
					{
						icon: 'icon-pencil.png',
						text: 'Lebih hemat data dibandingkan dengan platform lainnya.'
					}
				]
			},
			web: {
				name: 'Web',
				image: 'most-web.png',
				headline: `Akses MOST <b>di mana pun, kapan pun.</b>`,
				benefit: [
					{
						icon: 'icon-location.png',
						text: 'Dapat diakses di mana saja tanpa harus diunduh, baik itu via PC, Laptop, Smartphone, hingga Tablet.'
					},
					{
						icon: 'icon-pencil-white.png',
						text: 'Fitur customized view di dashboard yang bisa Anda sesuaikan dengan kebutuhan.'
					},
					{
						icon: 'icon-pencil-white.png',
						text: 'Lebih hemat data dibandingkan dengan platform lainnya.'
					}
				]
			},
			features: [
				{
					name: 'Trade Stock',
					web: true,
					app: true,
					mobile: true,
					remarks: 'None'
				}
			],
			cto: {
				title: 'Ini saatnya Anda mendapatkan platform trading terbaik!',
				desc: 'Cari tahu cara mengunduh platform MOST yang paling sesuai dengan kebutuhan Anda.',
				url: '/unduh',
				button: 'SELENGKAPNYA'
			}
		}
	}
}
</script>

<style lang="scss" scoped>
section#most-desktop {
	background-color: #f2f2f2;
}

section#fitur {
	background-color: #f2f2f2;

	.title {
		line-height: 1.2;
		margin-bottom: 16px;
	}

	.heading {
		p {
			font-size: 1.5em;
		}
	}

	@media #{$large} {
		.heading {
			width: 40%;
		}
	}
}

section {
	padding: 50px 0;

	/deep/ .bg-full {
		background-color: #fff;
	}
}
</style>
