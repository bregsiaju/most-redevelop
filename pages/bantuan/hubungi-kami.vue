<template>
	<main class="site-main">
		<section class="bg-split-grey relative">
			<img src="~assets/img/bg-pie-blue.png" alt="bg" />
			<div class="container">
				<div class="bzg">
					<div class="bzg_c" data-col="m6">
						<ul class="breadcrumb">
							<li><nuxt-link to="/bantuan">Bantuan</nuxt-link></li>
							<li>Hubungi Kami</li>
						</ul>
						<p class="title">
							Anda membutuhkan bantuan? <strong>Hubungi kami.</strong>
						</p>
						<div class="contact-us">
							<h5 class="text-primary-blue">Mandiri Sekuritas</h5>
							<p>
								Menara Mandiri 1 Lt. 24 - 25 Jl. Jend. Sudirman Kav. 54 - 55,
								Jakarta 12190
							</p>
							<div class="flex f-gap-16 v-center">
								<i class="icon-phone"></i>
								<span>Care Centre <b>14032</b></span>
							</div>
							<div class="flex f-gap-16 v-center">
								<i class="bzi-mail"></i>
								<span>
									<a href="mailto:Care_Center@mandirisek.co.id"
										>Care_Center@mandirisek.co.id</a
									>
									/
									<a href="mailto:Corsec@Mandirisek.co.id"
										>Corsec@Mandirisek.co.id</a
									>
								</span>
							</div>
						</div>
					</div>
					<div class="bzg_c" data-col="m6">
						<p class="f-32">Tulis pesan Anda di sini.</p>
						<form>
							<div class="input-wrapper">
								<label for="name">Nama<span class="text-red">*</span></label>
								<input
									id="name"
									type="text"
									class="form-input form-input--block"
									required
									autocomplete="off"
								/>
							</div>
							<div class="input-wrapper">
								<label for="email"
									>Alamat email<span class="text-red">*</span></label
								>
								<input
									id="email"
									type="email"
									class="form-input form-input--block"
									required
									autocomplete="off"
								/>
							</div>
							<div class="input-wrapper">
								<label for="message"
									>Pesan<span class="text-red">*</span></label
								>
								<textarea
									id="message"
									class="form-input--block"
									required
								></textarea>
							</div>
							<div class="flex f-space-between v-start flex--wrap">
								<div class="chapta">
									<recaptcha />
								</div>
								<button class="btn--primary" type="submit">KIRIM</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	head() {
		return {
			...this.$SEOMeta({
				metaTitle: 'Hubungi Kami'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
@media #{$medium} {
	.bg-split-grey {
		background: linear-gradient(90deg, #fff 50%, #f2f2f2 0);
	}
}

section {
	padding-bottom: 75px;

	img {
		width: 12%;
		transform: rotate(-90deg);
		position: absolute;
		bottom: 0px;
		left: 0px;

		@media #{$md} {
			display: none;
		}
	}
}

.bzg {
	.bzg_c {
		padding-top: 60px;

		@media #{$md} {
			padding-top: 32px;
		}
	}

	@media #{$large} {
		.bzg_c:first-child {
			padding-right: 80px;
		}

		.bzg_c:nth-child(2) {
			padding-left: 50px;
		}
	}
}

.title {
	font-size: 36px;
	line-height: 1.2;
}

.contact-us {
	background: white;
	box-shadow: 0px 6px 30px #29292914;
	border-radius: 3px;
	padding: 25px 30px;
}

.input-wrapper {
	margin-bottom: 30px;

	input,
	textarea {
		border-top: none;
		border-right: none;
		border-left: none;
		font-size: 16px;
		width: 100%;
		padding-bottom: 10px;
		border-color: #aaa;
		border-radius: 0px;
		background: transparent;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: $primary-blue;
	}
}

.chapta {
	transform: scale(0.7);
	transform-origin: top left;
	max-height: 50px;
	width: 50%;
}
</style>
