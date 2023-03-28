<template>
	<div v-if="success" class="text-center">
		<img src="~assets/img/success.png" alt="icon status" />
		<p class="f-32 f--semi text-primary-blue">Pendaftaran Sukses</p>
		<p>
			Selamat, Anda telah terdaftar ikut Kelas Investasi. Cek Email Anda untuk
			informasi lebih lengkap
		</p>
		<nuxt-link to="/kelas-investasi">
			<button class="btn--primary btn--block">
				LIHAT DAFTAR KELAS LAINNYA
			</button>
		</nuxt-link>
	</div>
	<div v-else class="text-center">
		<img src="~assets/img/failed.png" alt="icon status" />
		<p class="f-32 f--semi text-red mb-20">Pendaftaran Gagal</p>
		<p>
			Maaf, Anda belum terdaftar ikut Kelas Investasi. Cek kembali ID Nasabah
			Anda atau silahkan registrasi sebagai Nasabah untuk mendaftarkan diri
			kembali
		</p>
		<div class="bzg mt-20">
			<div class="bzg_c" data-col="s6">
				<button class="btn--ghost-primary btn--block" @click="success = true">
					COBA LAGI
				</button>
			</div>
			<div class="bzg_c" data-col="s6">
				<nuxt-link to="/login">
					<button class="btn--primary btn--block">MULAI INVESTASI</button>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RegistrationStatus',
	data() {
		return {
			success: false
		}
	}
}
</script>

<style lang="scss" scoped></style>
