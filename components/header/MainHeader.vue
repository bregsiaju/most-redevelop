<template>
	<header class="site-header" :class="{ sticky: isSticky }">
		<div class="mini-header bg-white">
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
		<div class="main-header bg-white">
			<div class="container flex f-space-between v-center">
				<Logo />
				<div class="flex v-center" :class="{ 'nav-collapse': isCollapse }">
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
					<div class="search relative">
						<i class="icon-search" @click="searchOn = true"></i>
					</div>
					<nuxt-link to="/login">
						<button class="btn--primary">MULAI INVESTASI</button>
					</nuxt-link>
					<img
						src="~assets/img/logo-mandiri-sekuritas.png"
						width="79px"
						class="ml-20"
						alt="Logo Mandiri"
					/>
				</div>
				<div v-if="isCollapse" class="menu-responsive flex v-center">
					<div class="search relative">
						<i class="icon-search" @click="searchOn = true"></i>
					</div>
					<div class="menu" @click="showSidebar = !showSidebar">
						<i :class="showSidebar ? 'bzi-close' : 'bzi-bars'"></i>
					</div>
				</div>
			</div>
		</div>
		<div v-if="showSidebar">
			<headerSidebar />
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isSticky: false,
			searchOn: false,
			isCollapse: false,
			showSidebar: false
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		window.addEventListener('resize', this.handleResize)
		this.handleResize()
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
		window.removeEventListener('resize', this.handleResize)
	},
	methods: {
		handleScroll() {
			this.isSticky = window.pageYOffset > this.$el.offsetTop
		},
		handleResize() {
			return window.innerWidth <= 770
				? (this.isCollapse = true)
				: (this.isCollapse = false)
		}
	}
}
</script>

<style lang="scss" scoped>
.site-header {
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 3;
	transition: all 0.5s ease;

	&.sticky {
		transform: none;
		box-shadow: 0 0px 7px rgba(0, 0, 0, 0.1);

		@media #{$large} {
			transform: translateY(-46px);
		}
	}
}
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
	position: relative;

	.container {
		padding: 8px 0;

		ul > li {
			padding: 12px 16px;
			text-transform: uppercase;
			font-family: 'Open Sans';
			color: #5f5f5f;
			font-weight: 600;

			i {
				margin-left: 8px;
			}
		}

		.icon-search {
			padding: 9px 24px 9px 12px;
		}
	}

	.site-logo {
		margin-left: -20px;
	}
}

@media (max-width: 780px) {
	.nav-collapse,
	.mini-header {
		display: none;
	}
}

.menu-responsive {
	i {
		font-size: 20px;

		&:hover {
			cursor: pointer;
		}
	}
}
</style>
