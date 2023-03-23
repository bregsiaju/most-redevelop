<template>
	<main class="site-main">
		<div class="container">
			<p class="title">Disclaimer</p>
			<!-- wrapper v-html / kontennya sama kayak page kebijakan privasi -->
			<div class="note">
				<i
					>Situs web ini dimiliki oleh PT Mandiri Sekuritas. Situs web ini
					dioperasikan atas nama PT Mandiri Sekuritas berikut badan-badan
					korporasi dan afiliasi-afiliasinya (bersama-sama, “kami” atau
					“kita”).</i
				>
			</div>
			<p class="information">
				Informasi berikut ini tidak boleh diperbanyak atau didistribusikan
				kepada pihak lain dengan cara apapun tanpa izin tertulis dari PT.
				Mandiri Sekuritas. PT. Mandiri Sekuritas melarang redistribusi dari
				informasi ini, baik secara elektronik ataupun melalui cara-cara lain,
				dan tidak bertanggung jawab atas tindakan pihak ketiga berkaitan dengan
				hal-hal tersebut. Walaupun informasi ini dihasilkan dari materi dan
				sumber-sumber yang terpercaya dan dapat menggambarkan opini PT. Mandiri
				Sekuritas, namun PT. Mandiri Sekuritas tidak menjamin akurasi dan isi
				informasi tersebut.
			</p>
		</div>
	</main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.site-main {
	padding: 38px 0 100px;
}

.title {
	font-size: 45px;
	margin-bottom: 35px;
	line-height: 1;
	color: #3b3b3b;
	font-weight: 600;
}

.note {
	background-color: rgba(255, 232, 175, 0.4);
	padding: 16px 56px 16px 28px;
	color: #5d5d5d;
	margin-bottom: 33px;
}

.information {
	color: #5d5d5d;
	font-size: 16px;
}
</style>
