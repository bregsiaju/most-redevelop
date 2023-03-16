<template>
	<div class="benefit">
		<VueSlickCarousel v-bind="settings">
			<div v-for="benefit in benefits" :key="benefit.id" class="slick-item">
				<homepageBenefit :content="benefit" />
			</div>
		</VueSlickCarousel>
	</div>
</template>

<script>
export default {
	name: 'CarouselBenefit',
	data() {
		return {
			benefits: [
				{
					id: 1,
					icon: 'icon-shield.png',
					heading: 'Investasi Aman & Terpercaya',
					desc: 'MOST menjamin agar Anda dapat melakukan investasi dengan aman & nyaman.',
					image: 'benefit-1.png'
				},
				{
					id: 2,
					icon: 'icon-hp.png',
					heading: 'Cukup Satu Akun untuk Akses Lengkap',
					desc: 'Dapatkan keuntungan maksimal berinvestasi di pasar modal hanya dengan satu akun MOST.',
					image: 'benefit-2.png'
				},
				{
					id: 3,
					icon: 'icon-lamp.png',
					heading: 'Sarana Belajar Investasi, Gratis!',
					desc: 'Temukan caramu lebih mahir meraih profit bersama para MOST Advisors dan analis handal, lewat banyak pilihan media.',
					image: 'benefit-3.png'
				}
			],
			settings: {
				arrows: true
			}
		}
	}
}
</script>

<style scoped>
.benefit >>> .slick-prev {
	top: 130px;
	left: 40px;
}

.benefit >>> .slick-next {
	top: 130px;
	left: 88px;
}
</style>
