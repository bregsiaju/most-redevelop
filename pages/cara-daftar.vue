<template>
	<main class="site-main">
		<section class="header">
			<div class="container">
				<div class="bzg v-center">
					<div class="bzg_c" data-col="m6, l5">
						<h1 class="title text-reg">
							Buka Rekening <br />di <strong>MOST</strong> Sekarang!
						</h1>
						<p class="f-24">
							MOST menawarkan berbagai cara mudah untuk membantu Anda bergabung
							bersama kami.
						</p>
						<button class="btn--primary">BANTUAN</button>
					</div>
					<div class="bzg_c" data-col="m6, l5" data-offset="l2">
						<div class="responsive-media r-square">
							<img src="/assets/img/help/cara-daftar.png" alt="laptop" />
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-grey">
			<div class="container">
				<p class="f-24">Buka Rekening <b>Online</b></p>
				<h1 class="title">
					Bergabung via online yang<br />pastinya <u>bebas ribet!</u>
				</h1>
				<div class="bzg">
					<div class="bzg_c" data-col="m4">
						<div class="card-tutorial">
							<p class="f-24 f--semi">Foto e-KTP dan swafoto bersama e-KTP</p>
							<img src="/assets/img/help/icon-photo.png" width="85px" />
							<p class="mt-24">
								Pastikan foto e-KTP serta swafoto yang Anda kirimkan jelas dan
								tidak terpotong
							</p>
						</div>
					</div>
					<div class="bzg_c" data-col="m4">
						<div class="card-tutorial">s</div>
					</div>
					<div class="bzg_c" data-col="m4">
						<div class="card-tutorial">s</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
	padding: 60px 0;

	&.header {
		padding: 0;
	}
}

.title {
	font-size: 40px;
	line-height: 1.4;
	margin-bottom: 32px;
}

.bg-grey {
	background-color: #f2f2f2;
}

.bzg {
	margin-left: -30px;

	.bzg_c {
		padding-left: 30px;
	}
}

.card-tutorial {
	background-color: #fff;
	box-shadow: 0px 6px 30px #00000015;
	border-radius: 8px;
	padding: 36px 28px;
	text-align: center;
}
</style>
