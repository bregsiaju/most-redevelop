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
				<div v-show="!isCollapse" class="flex v-center">
					<ul class="list-nostyle flex">
						<li
							v-for="menu in menus"
							:key="menu.id"
							class="main-menu relative"
							@mouseover="toggleDropdown(menu.id, 'over')"
							@mouseleave="toggleDropdown(menu.id, 'leave')"
						>
							<nuxt-link :to="menu.url"
								>{{ menu.title }} <i class="bzi-angle-down"></i
							></nuxt-link>
							<div v-show="dropdownItem[menu.id]" class="dropdown">
								<ul class="list-nostyle">
									<li v-for="(item, i) in menu.submenu" :key="i">
										<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
									</li>
								</ul>
							</div>
						</li>
						<li class="main-menu">
							<nuxt-link to="/forum">Forum</nuxt-link>
						</li>
					</ul>
					<div class="search relative">
						<i
							class="icon-search toggle"
							tabindex="0"
							@focus="handleSearchFocus"
						></i>
						<div v-if="searchOn" class="form-search">
							<form>
								<div class="form-icon-wrapper">
									<i class="icon-search form-icon--left"></i>
									<input
										type="text"
										placeholder="Cari"
										name="search"
										class="form-input"
										@focus="handleSearchFocus"
										@focusout="handleSearchFocusOut"
									/>
								</div>
							</form>
						</div>
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
						<i
							class="icon-search toggle"
							tabindex="0"
							@focus="handleSearchFocus"
						></i>
						<div v-if="searchOn" class="form-search">
							<form>
								<div class="form-icon-wrapper">
									<i class="icon-search form-icon--left"></i>
									<input
										type="text"
										placeholder="Cari"
										name="search"
										class="form-input"
										@focus="handleSearchFocus"
										@focusout="handleSearchFocusOut"
									/>
								</div>
							</form>
						</div>
					</div>
					<div class="menu" @click="$store.commit('sidebar/toggle')">
						<i
							:class="$store.state.sidebar.isOpen ? 'bzi-close' : 'bzi-bars'"
						></i>
					</div>
				</div>
			</div>
		</div>
		<div v-if="$store.state.sidebar.isOpen && isCollapse">
			<headerSidebar />
		</div>
	</header>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {
			isSticky: false,
			searchOn: false,
			isCollapse: false,
			showSidebar: false,
			dropdownItem: {}
		}
	},
	computed: {
		...mapState(['menus'])
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		window.addEventListener('resize', this.handleResize)
		this.handleResize()
		// initialize to hidden submenu
		this.menus.forEach(menu => {
			this.$set(this.dropdownItem, menu.id, false)
		})
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
			return window.innerWidth < 1200
				? (this.isCollapse = true)
				: (this.isCollapse = false)
		},
		toggleDropdown(id, action) {
			Object.keys(this.dropdownItem).forEach(key => {
				this.dropdownItem[key] = false
			})
			if (action === 'over') {
				this.dropdownItem[id] = true
			} else {
				this.dropdownItem[id] = false
			}
		},
		handleSearchFocus() {
			this.searchOn = true
		},
		handleSearchFocusOut() {
			this.searchOn = false
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

		li.main-menu {
			padding: 12px 16px;
			text-transform: uppercase;
			font-family: 'Open Sans';
			color: #5f5f5f;
			font-weight: 600;
			border-radius: 3px 3px 0 0;

			a {
				display: block;

				&:hover {
					color: white;
				}
			}

			i {
				margin-left: 8px;
			}

			&:hover {
				background-color: $primary-blue;
				color: white;
			}
		}

		.icon-search.toggle {
			padding: 9px 24px 9px 12px;
		}
	}

	.site-logo {
		margin-left: -20px;
	}
}

.search {
	&:hover {
		cursor: pointer;
	}

	.form-search {
		position: absolute;
		top: -4px;
		right: 12px;

		.form-icon-wrapper {
			/deep/ .form-input {
				width: 420px;
				background-color: #f2f2f2;

				@media #{$sm} {
					width: 250px;
				}
			}
		}
	}
}

.dropdown {
	position: absolute;
	top: 100%;
	left: 0;
	background-color: $primary-blue;
	color: white;
	text-transform: none;
	font-weight: 400;
	white-space: nowrap;
	border-radius: 0 3px 3px 3px;
	min-width: 200px;
	overflow: hidden;

	a {
		padding: 12px 14px;

		&:hover,
		&.nuxt-link-active {
			color: white;
			background-color: #2759a4;
		}
	}

	li:not(:last-of-type) {
		border-bottom: 1px solid rgba(176, 186, 232, 0.5);
	}
}

@media (max-width: 1023px) {
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
