<template>
	<div class="sidebar">
		<ul class="list-nostyle">
			<li><nuxt-link to="">Produk</nuxt-link><i class="bzi-angle-down"></i></li>
			<li>
				<nuxt-link to="">Aplikasi</nuxt-link><i class="bzi-angle-down"></i>
			</li>
			<li>
				<nuxt-link to="">Belajar</nuxt-link><i class="bzi-angle-down"></i>
			</li>
			<li>
				<nuxt-link to="">Riset & Berita</nuxt-link>
				<i class="bzi-angle-down"></i>
			</li>
			<li><nuxt-link to="">Forum</nuxt-link><i class="bzi-angle-down"></i></li>
		</ul>
		<div class="btn-login">
			<nuxt-link to="/login" class="btn--primary">MULAI INVESTASI</nuxt-link>
		</div>
		<hr />
		<div class="helper">
			<nuxt-link to="/cara-daftar">Cara Daftar</nuxt-link>
			<hr />
			<a href="tell:14032" target="_blank" class="flex v-center f-gap-8 mb-8">
				<i class="icon-phone"></i>
				<span>Care Center <b>14032</b></span>
			</a>
			<nuxt-link to="/bantuan">Bantuan</nuxt-link>
		</div>
		<hr />
	</div>
</template>

<script>
export default {
	name: 'Sidebar'
}
</script>

<style lang="scss" scoped>
.sidebar {
	background: white;
	width: 100%;
	height: 100vh;
	position: absolute;
	z-index: 5;
	overflow: auto;
	padding: 12px 16px;

	ul > li {
		padding: 12px 0;
		text-transform: uppercase;
		font-family: 'Open Sans';
		color: #5f5f5f;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: space-between;

		a {
			flex-grow: 1;
		}

		i {
			padding: 0 8px;

			&:hover {
				cursor: pointer;
			}
		}
	}
}

.btn-login {
	margin-top: 16px;
	padding-bottom: 12px;

	.btn--primary {
		width: 100%;
	}
}

hr {
	margin: 16px 0;
}

.helper {
	color: #5f5f5f;
}
</style>
