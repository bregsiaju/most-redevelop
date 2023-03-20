<template>
	<main class="site-main relative">
		<img class="bg-img" src="~assets/img/bg-pie-blue.png" alt="bg pie blue" />
		<div class="container container--small">
			<h1 class="title">Login</h1>
			<form action="" @submit.prevent="masuk">
				<div class="mb-28">
					<label for="userid">User ID<span class="text-red">*</span></label>
					<div class="form-icon-wrapper">
						<input
							id="userid"
							v-model.trim="$v.formData.userId.$model"
							type="text"
							class="form-input form-input--block"
							:maxlength="$v.formData.userId.$params.maxLength.max"
							:class="{ 'form-input--error': $v.formData.userId.$error }"
							@blur="$v.formData.userId.$touch()"
						/>
					</div>
					<div v-if="$v.formData.userId.$error" class="form-error-msg">
						<div
							v-if="!$v.formData.userId.required || !$v.formData.userId.userId"
						>
							User ID anda tidak valid.
						</div>
						<div v-if="!$v.formData.userId.maxLength">
							Maksimal karakter yang diperbolehkan
							{{ $v.formData.userId.$params.maxLength.max }}
						</div>
					</div>
				</div>
				<div class="mb-40">
					<label for="password"
						>Kata Sandi<span class="text-red">*</span></label
					>
					<div class="form-icon-wrapper">
						<input
							id="password"
							v-model.trim="$v.formData.password.$model"
							:type="newPswEye ? 'password' : 'text'"
							:class="{ 'form-input--error': $v.formData.password.$error }"
							:maxlength="$v.formData.password.$params.maxLength.max"
							class="form-input form-input--block"
							@blur="$v.formData.password.$touch()"
						/>
						<span
							class="form-icon bzi-1_5x"
							:class="newPswEye ? 'bzi-eye' : 'bzi-eye-close'"
							@click="newPswEye = !newPswEye"
						></span>
					</div>
					<div v-if="$v.formData.password.$error" class="form-error-msg">
						<div v-if="!$v.formData.password.required">Masukkan kata sandi</div>
						<div v-if="!$v.formData.password.maxLength">
							Maksimal karakter yang diperbolehkan
							{{ $v.formData.password.$params.maxLength.max }}
						</div>
					</div>
				</div>
				<div class="mb-36">
					<button
						class="btn--primary btn--block"
						type="submit"
						:disabled="$v.$invalid"
					>
						LOGIN
					</button>
				</div>
				<div class="flex v-center">
					<nuxt-link to="/lupa-password">Lupa Kata Sandi?</nuxt-link>
					<span class="register"
						>Belum Punya Akun? <nuxt-link to="">Register</nuxt-link></span
					>
				</div>
			</form>
		</div>
		<img
			class="bg-img-right"
			src="~assets/img/bg-line-circle-dot.png"
			alt="bg circle"
		/>
	</main>
</template>

<script>
import { required, maxLength } from 'vuelidate/lib/validators'
export default {
	data() {
		return {
			newPswEye: true,
			formData: {
				userId: null,
				password: null
			}
		}
	},
	validations: {
		formData: {
			userId: {
				required,
				maxLength: maxLength(256)
			},
			password: {
				required,
				maxLength: maxLength(20)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	@media #{$medium} {
		min-height: 560px;
	}
}
.container {
	padding: 72px 0;
}

.title {
	font-size: 45px;
	margin-bottom: 48px;
	line-height: 1;
	color: #3b3b3b;
}

label {
	font-size: 20px;
}

a {
	color: $primary;
	font-weight: bold;

	&:hover {
		color: $link-hover;
	}
}

.register {
	border-left: 1px solid #bcbbbb;
	padding-left: 15px;
	margin-left: 15px;
}

.form-icon-wrapper .form-input {
	padding-left: 12px;
}

.form-input {
	border: none;
	border-bottom: 1px solid #ccc;
	border-radius: 0;
}

.bg-img {
	position: absolute;
	top: 0;
	left: 0;
	width: 12%;
	z-index: -1;
}

.bg-img-right {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 15%;
	z-index: -1;
}
</style>
