<template>
	<footer class="site-footer">
		<div class="container">
			<div class="flex v-center flex--wrap">
				<div class="subitem flex f-gap-8">
					<i class="icon-phone"></i>
					<p class="mb-0 f-14">Care Centre <b>14032</b></p>
				</div>
				<div class="subitem flex f-gap-8">
					<i class="bzi-mail"></i>
					<p class="mb-0">
						Care_Center@mandirisek.co.id / Corsec@Mandirisek.co.id
					</p>
				</div>
				<div class="subitem flex">
					<p class="mb-0">
						PT Mandiri Sekuritas Terdaftar dan diawasi oleh Otoritas Jasa
						Keuangan (OJK)
					</p>
				</div>
				<div class="subitem flex f-gap-8">
					<img src="~/assets/img/mandiri-sekuritas-white.png" />
					<img src="~/assets/img/ojk-white.svg" />
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="scss" scoped>
.site-footer {
	color: #fff;
	background-color: $primary-blue;
	border-top: 1px solid #fff;
	.container {
		padding: 12px 0;

		.subitem {
			padding: 8px;
		}
	}
}
</style>
