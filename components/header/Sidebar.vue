<template>
	<div class="sidebar">
		<Accordion>
			<AccordionItem v-for="menu in menus" :key="menu.id">
				<template slot="accordion-trigger">
					<nuxt-link :to="menu.url">{{ menu.title }}</nuxt-link>
				</template>
				<template slot="accordion-content">
					<div
						v-for="(list, i) in menu.submenu"
						:key="i"
						class="full-list-wrapper"
					>
						<ul class="list-nostyle">
							<li class="submenu">
								<nuxt-link :to="list.url" @click="closeSidebar">
									<p class="mb-0 pl-16">{{ list.title }}</p>
								</nuxt-link>
							</li>
						</ul>
					</div>
				</template>
			</AccordionItem>
		</Accordion>
		<ul class="list-nostyle">
			<li><nuxt-link to="">Forum</nuxt-link></li>
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
import { mapState } from 'vuex'

export default {
	name: 'Sidebar',
	computed: {
		...mapState(['menus'])
	},
	methods: {
		closeSidebar() {
			this.$store.commit('sidebar/toggleClose')
		}
	}
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
	overflow-y: scroll;

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

		&.submenu {
			text-transform: none;
			font-weight: 400;
			border-bottom: 1px solid rgba(176, 186, 232, 0.5);
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
