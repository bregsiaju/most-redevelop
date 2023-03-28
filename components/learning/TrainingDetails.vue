<template>
	<div class="training-detail">
		<!-- bg blur -->
		<div class="bg-blur"></div>
		<!-- grid content -->
		<div class="bzg">
			<div class="bzg_c" data-col="l6">
				<!-- breadcrumb -->
				<ul class="breadcrumb f-14">
					<slot name="nav-breadcrumb">
						<li><nuxt-link to="/belajar">Belajar</nuxt-link></li>
						<li>
							<nuxt-link to="/kelas-investasi">Training Offline</nuxt-link>
						</li>
						<li>Pengenalan Pasar Modal di Indonesia</li>
					</slot>
				</ul>
				<!-- title -->
				<h1 class="title">Pengenalan Pasar Modal di Indonesia</h1>
				<p class="f--semi">Pembicara : Raka Raditya</p>
				<!-- table info -->
				<div class="bzg ml-0 bg-white table-info">
					<div class="bzg_c" data-col="m4">
						<i class="bzi-date"></i>
						<span>28 Agustus 2020 13:00 - 15:00 WIB</span>
					</div>
					<div class="bzg_c" data-col="m4">
						<i class="icon-location"></i>
						<span>Ruang SME PT.Bank Mandiri Surapati, Bandung</span>
					</div>
					<div class="bzg_c" data-col="m4">
						<i class="bzi-people"></i>
						<span>Kuota tersisa 40</span>
					</div>
				</div>
				<!-- training description -->
				<div class="training-desc">
					<p>
						Kelas ini ditujukan untuk meningkatkan literasi nasabah tentang
						pasar modal sekaligus memperkenalkan cara berinvestasi, manfaat, dan
						risiko dari berbagai instrumen investasi yang ada di pasar modal.
					</p>
				</div>
			</div>
			<div class="bzg_c" data-col="l4" data-offset="l2">
				<!-- registration card -->
				<div class="registration-card">
					<div class="card-image relative">
						<img
							:src="`/assets/img/learning/newspaper.jpg`"
							alt="class banner"
						/>
						<span class="left-top">H - 20</span>
						<div class="right-bottom">
							<span>BASIC 2</span>
							<span>NASABAH</span>
						</div>
					</div>
					<div class="card-form bg-white">
						<h5>Daftar sekarang</h5>
						<form action="register">
							<select class="form-input">
								<option value="id">ID Nasabah</option>
								<option value="email">Email</option>
							</select>
							<input
								class="form-input"
								type="text"
								placeholder="Isi ID Nasabah Anda"
							/>
							<div class="mb-10">
								<recaptcha />
							</div>
							<button class="btn--primary btn--block" type="submit">
								KIRIM PENDAFTARAN
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TrainingDetails'
}
</script>

<style lang="scss" scoped>
.training-detail {
	color: $dark-grey;
	padding: 28px 0;
}

.bg-blur {
	background: url('~static/assets/img/learning/newspaper.jpg') no-repeat center;
	filter: brightness(130%) blur(5px);
	position: absolute;
	width: 100vw;
	top: 0px;
	right: 0px;
	height: 300px;
	z-index: -1;
	overflow: hidden;
}

.title {
	font-size: 45px;
	margin-bottom: 10px;
	line-height: 1.3;
}

.bzg {
	&.table-info {
		border-radius: 3px;
		box-shadow: 0px 6px 30px #00000015;
		margin-bottom: 18px;

		.bzg_c {
			padding: 20px;
			display: flex;
			align-items: center;
			gap: 12px;

			span {
				color: #606060;
				font-weight: 600;
			}

			i {
				color: #ea7200;
				font-size: 20px;
			}
		}

		.bzg_c:not(:last-child) {
			border-right: 1px solid #f2f2f2;
		}
	}
}

.registration-card {
	box-shadow: 0px 6px 30px #0000000d;
	max-width: 350px;

	.card-image {
		.left-top {
			position: absolute;
			top: 0;
			left: 0;
			background-color: #72be44;
			color: white;
			padding: 8px 12px;
		}

		.right-bottom {
			position: absolute;
			bottom: 10px;
			right: 10px;
			color: white;

			span {
				padding: 6px 12px;
				background-color: #3b3b3b;
				border-radius: 3px;
			}
		}
	}

	.card-form {
		padding: 15px 24px;

		.form-input {
			width: 100%;
			margin-bottom: 11px;
			border: none;
			border-bottom: 1px solid #d2d2d2 !important;
			border-radius: 0px;
		}
	}
}
</style>
