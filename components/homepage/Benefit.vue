<template>
	<div class="container">
		<div class="bzg">
			<div class="bzg_c" data-col="m6">
				<div>
					<i class="icon-arrow-left"></i>
					<i class="icon-arrow-right"></i>
				</div>
				<div class="flex f-gap-28 v-start">
					<img :src="`assets/img/homepage/icon-shield.png`" width="46px" />
					<div>
						<p>Investasi Aman & Terpercaya</p>
						<p>
							MOST menjamin agar Anda dapat melakukan investasi dengan aman &
							nyaman.
						</p>
						<nuxt-link to="">
							<button class="btn--primary">LIHAT SELENGKAPNYA</button>
						</nuxt-link>
					</div>
				</div>
			</div>
			<div class="bzg_c" data-col="m6"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Benefit'
}
</script>

<style lang="scss" scoped></style>
