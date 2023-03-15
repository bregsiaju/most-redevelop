<template>
	<header>
		<div class="mini-header">
			<div class="container flex f-space-between pv-10">
				<nav>
					<ul class="list-nostyle">
						<li>
							<a
								href="tell:14032"
								target="_blank"
								class="flex v-center f-gap-8"
							>
								<i class="icon-phone"></i>
								<span>Care Center <b>14032</b></span>
							</a>
						</li>
						<li>
							<nuxt-link to="/bantuan">Bantuan</nuxt-link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul class="list-nostyle">
						<li>
							<nuxt-link to="/cara-daftar">Cara Daftar</nuxt-link>
						</li>
						<li>
							<span class="lang"
								>Bahasa <i class="bzi-angle-down ml-8"></i
							></span>
						</li>
					</ul>
				</nav>
			</div>
		</div>
		<div class="main-header">
			<div class="container flex f-space-between v-center">
				<Logo />
				<div class="flex v-center">
					<ul class="list-nostyle flex">
						<li>
							<nuxt-link to="">Produk <i class="bzi-angle-down"></i></nuxt-link>
						</li>
						<li>
							<nuxt-link to=""
								>Aplikasi <i class="bzi-angle-down"></i
							></nuxt-link>
						</li>
						<li>
							<nuxt-link to=""
								>Belajar <i class="bzi-angle-down"></i
							></nuxt-link>
						</li>
						<li>
							<nuxt-link to=""
								>Riset & Berita <i class="bzi-angle-down"></i
							></nuxt-link>
						</li>
						<li>
							<nuxt-link to="">Forum <i class="bzi-angle-down"></i></nuxt-link>
						</li>
					</ul>
					<i class="icon-search"></i>
					<button class="btn--primary">MULAI INVESTASI</button>
					<img
						src="~assets/img/logo-mandiri-sekuritas.png"
						width="79px"
						class="ml-20"
						alt="Logo Mandiri"
					/>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.mini-header {
	border-bottom: 1px solid #e6e6e6;
	font-size: 15px;
	color: #5f5f5f;

	ul {
		display: flex;
	}

	nav > ul > li:first-child {
		padding-right: 10.5px;
	}

	nav > ul > li:not(:first-child) {
		border-left: 1px solid #d2d2d2;
		padding-left: 10.5px;
	}

	.lang:hover {
		cursor: pointer;
		color: $link_hover;
	}
}

.main-header {
	border-bottom: 1px solid #e6e6e6;

	.container {
		padding: 15px 0;

		ul > li {
			padding: 12px 16px;

			i {
				margin-left: 8px;
			}
		}

		.icon-search {
			padding: 9px 24px 9px 12px;
		}
	}
}
</style>
