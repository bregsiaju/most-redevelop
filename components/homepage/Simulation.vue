<template>
	<div class="container pt-56">
		<div class="bzg">
			<div class="bzg_c input-data" data-col="m6">
				<h2>Profil Anda</h2>
				<div class="input-wrapper">
					<h4>Usia Anda</h4>
					<input-slider :value="24" />
				</div>
				<div class="input-wrapper">
					<h4>Lama Investasi</h4>
					<input-slider :icon="`icon-clock`" />
				</div>
				<div class="input-wrapper">
					<h4>Profil Risiko <i class="icon-question f-14 ml-8"></i></h4>
					<input-button :model="`risk`" />
				</div>
				<div class="input-wrapper">
					<h4>Modal Awal Investasi</h4>
					<input-button :model="`capital`" />
				</div>
				<div class="input-wrapper">
					<h4>Investasi Tiap Bulan</h4>
					<input-button :model="`investment`" />
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

.input-wrapper {
	margin-bottom: 25px;
}
</style>
