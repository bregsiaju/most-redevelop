<template>
	<div class="call-to-join">
		<div class="container">
			<div class="container title">
				<p>Bergabung Bersama <strong>MOST</strong> Sekarang</p>
			</div>
			<homepageCarouselCTA />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Join'
}
</script>

<style lang="scss" scoped>
.call-to-join {
	padding-top: 120px;
	padding-bottom: 90px;
	background: url('~static/assets/img/homepage/bg-cta.png');
	background-repeat: no-repeat;

	.title {
		display: flex;
		justify-content: flex-end;
		font-size: 45px;
		margin-bottom: 25px;
		line-height: 1;
		color: #3b3b3b;

		p {
			line-height: 1.4;

			@media #{$large} {
				max-width: 510px;
			}
		}
	}
}

@media (max-width: 770px) {
	.call-to-join {
		background-size: 30%;
		background-position: left bottom;

		.title p {
			margin-bottom: 0;
			font-size: 30px;
		}
	}
}

@media (max-width: 576px) {
	.call-to-join {
		padding-top: 40px;
	}
}
</style>
