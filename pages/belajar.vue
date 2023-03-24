<template>
	<main class="site-main">
		<!-- notif -->
		<div
			v-show="!notifHidden"
			class="top-notif bg-primary-blue pv-20 text-white flex relative"
		>
			<div class="container">
				<span>Cari arti istilah yang belum Anda pahami di</span>
				<nuxt-link to="/istilah-investasi" class="text-primary"
					>Kamus Investasi</nuxt-link
				>
			</div>
			<i class="bzi-close" @click="notifHidden = true"></i>
		</div>

		<!-- banner top -->

		<!-- training investasi -->

		<!-- video edukasi -->

		<!-- tips & trick -->

		<!-- carousel join -->
		<homepageJoin />
	</main>
</template>

<script>
export default {
	data() {
		return {
			notifHidden: false
		}
	}
}
</script>

<style lang="scss" scoped>
.top-notif {
	font-size: 22px;

	.bzi-close {
		position: absolute;
		right: 2%;

		&:hover {
			cursor: pointer;
		}
	}
}
</style>
