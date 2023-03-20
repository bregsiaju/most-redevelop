<template>
	<div class="product-item relative">
		<img
			v-for="tab in tabs"
			v-show="activeTab === tab.id"
			:key="tab.id"
			:src="`assets/img/homepage/${tab.content.image}`"
			class="bg-left"
		/>
		<div class="bzg">
			<div class="bzg_c left" data-col="m6">
				<div
					v-for="tab in tabs"
					v-show="activeTab === tab.id"
					:key="tab.id"
					class="text-content"
				>
					<p class="mb-24" v-html="tab.content.heading"></p>
					<p class="mb-24" v-text="tab.content.description"></p>
					<div>
						<nuxt-link to="">
							<button class="btn--primary mr-20">SELENGKAPNYA</button>
						</nuxt-link>
						<nuxt-link to="">
							<button class="btn--ghost-yellow">DAFTAR SEKARANG</button>
						</nuxt-link>
					</div>
				</div>
				<ul class="tabs__bar--justify">
					<li
						v-for="tab in tabs"
						:key="tab.id"
						class="tabs__nav"
						:class="{ 'is-active': activeTab === tab.id }"
						@click="activeTab = tab.id"
					>
						{{ tab.title }}
					</li>
				</ul>
			</div>
			<div
				v-for="tab in tabs"
				v-show="activeTab === tab.id"
				:key="tab.id"
				class="bzg_c right"
				data-col="m6"
			>
				<h2>{{ tab.content.topTitle }}</h2>
				<li>Filters</li>
				<div class="bzg dropdown">
					<p class="bzg_c flex v-center f-space-between" data-col="m6">
						<span>Most Active</span>
						<span>+</span>
					</p>
					<p class="bzg_c flex v-center f-space-between" data-col="m6">
						<span>Pada Tanggal Ini</span>
						<span>+</span>
					</p>
				</div>
				<div class="bzg update">
					<p class="bzg_c pl-0" data-col="m6">
						IHSG Rp. 4,967.004
						<span class="font-red ml-4"
							>-20.00 (10%) <i class="bzi-caret-down ml-4"></i
						></span>
					</p>
					<p class="bzg_c pl-0" data-col="m6">
						Last update : 10 : 30 : 00 WIB | 14 Jun 2020
					</p>
				</div>
				<div class="bzg stock">
					<div v-for="item in 5" :key="item" class="bzg_c" data-col="m4">
						<div class="stock-card">
							<p class="text-semibold text-dark-grey mb-4">BBRI</p>
							<div class="bzg bzg--no-gutter">
								<div class="bzg_c" data-col="s5">
									<span>Close</span>
									<br />
									<span class="text-semibold text-dark-grey">Rp. 9,700</span>
								</div>
								<div class="bzg_c" data-col="s2">
									<span>&nbsp;</span>
									<br />
									<i class="icon-transfer"></i>
								</div>
								<div class="bzg_c" data-col="s5">
									<span>Prev</span>
									<br />
									<span>Rp. 9,300</span>
								</div>
							</div>
							<hr class="mb-4 mt-8" />
							<div class="bzg bzg--no-gutter">
								<div class="bzg_c" data-col="s6">
									<span>Change</span>
									<br />
									<span class="font-green">10.00 (0,3 %)</span>
								</div>
								<div class="bzg_c" data-col="s5" data-offset="s1">
									<span>Volume</span>
									<br />
									<span class="text-volume">3,656,300</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<p class="mt-20 text-grey f-14">
					<span class="text-red">*</span>Informasi yang tertera tidak real time
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductItem',
	props: {
		tabs: {
			type: Array,
			required: true
		},
		selectedTab: {
			type: Number,
			default: 1
		}
	},
	data() {
		return {
			activeTab: this.selectedTab
		}
	}
}
</script>

<style lang="scss" scoped>
.product-item {
	& > .bzg {
		& > .bzg_c {
			padding-top: 54px;
			padding-bottom: 54px;

			&.left {
				padding-left: 68px;
				padding-right: 54px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			&.right {
				background-color: #f2f2f2;
				padding-left: 32px;
				padding-right: 48px;

				h2 {
					font-weight: 600;
					font-size: 30px;
					color: $black;
				}

				.bzg {
					margin-left: 0;

					p {
						margin-bottom: 0;
					}
				}
			}
		}
	}

	.bg-left {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 49.5%;
		height: 100%;
	}
}

.text-content {
	p:first-child {
		color: $black;
		font-size: 30px;
		line-height: 1.3;
		font-weight: 600;
	}
	p:nth-child(2) {
		font-size: 24px;
		color: $grey;
		width: 80%;
		line-height: 1.4;
	}
}

.bzg.dropdown {
	border-radius: 4px;
	overflow: hidden;
	margin: 16px 0;
	.bzg_c {
		background-color: $primary-blue;
		padding: 15px;
		color: #fff;

		&:first-child {
			border-right: 1px solid #f2f2f2;
		}
	}
}

.bzg.update {
	color: #606060;
	.bzg_c:last-child {
		font-size: 14px;
	}
}

.stock {
	margin-left: -25px !important;
	& > .bzg_c {
		margin-top: 20px !important;
	}
}

.stock-card {
	background-color: #fff;
	border-radius: 3px;
	padding: 5px 11px;
	font-size: 13px;
	color: #aaa;
	font-family: 'Open Sans';
}

.text-volume {
	color: #696969;
}
</style>
