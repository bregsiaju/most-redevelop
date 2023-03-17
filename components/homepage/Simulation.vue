<template>
	<div class="container pt-56">
		<div class="bzg">
			<div class="bzg_c input-data" data-col="m6">
				<h2>Profil Anda</h2>
				<div class="age">
					<h4>Usia Anda</h4>
					<input-slider />
				</div>
			</div>
			<div class="bzg_c" data-col="m6">
				<h2>Hasil</h2>
				<h4>Rekomendasi dan Perkiraan Investasi</h4>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Simulation'
}
</script>

<style lang="scss" scoped>
.bzg_c.input-data {
	padding-right: 56px;
}

h2 {
	color: #000;
	font-size: 30px;
	position: relative;
	width: fit-content;
	font-weight: 600;
	margin-bottom: 40px;

	&:after {
		content: '';
		position: absolute;
		height: 35%;
		width: 100%;
		background-color: $primary;
		opacity: 70%;
		bottom: 0;
		left: 0;
		z-index: -1;
	}
}

h4 {
	color: #000;
	font-weight: 600;
	font-size: 20px;
	margin-bottom: 25px;
}
</style>
