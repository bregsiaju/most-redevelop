<template>
	<div class="bzg v-start ml-0">
		<div class="bzg_c pt-28 sticky sticky-nav" data-col="l2">
			<slot name="sticky-nav">
				<ul class="breadcrumb f-12">
					<li><nuxt-link to="/belajar">Belajar</nuxt-link></li>
					<li>Belajar Investasi</li>
				</ul>
				<p class="f-24">Belajar <strong>Investasi</strong></p>
				<ul class="list-nostyle nav-category">
					<li v-for="(item, i) in nav" :key="i">
						<nuxt-link :to="`/belajar-investasi${item.url}`">
							{{ item.text }}
						</nuxt-link>
					</li>
				</ul>
				<button class="btn--ghost-primary mb-20">
					<nuxt-link to="">CARA DAFTAR</nuxt-link>
				</button>
				<button class="btn--primary mb-20">
					<nuxt-link to="">MULAI INVESTASI</nuxt-link>
				</button>
			</slot>
		</div>
		<div class="bzg_c sticky" data-col="l4">
			<slot name="sticky-link">
				<div class="sticky-link-item">
					<div class="items-head">
						<h4 class="f-24 font-white text-center bg-grey pv-40 mb-0">
							Mulai Investasi
						</h4>
					</div>
					<ul class="list-nostyle items-nav">
						<li class="active">
							<nuxt-link to="">
								<p class="info">Mulai Investasi | 15 min read</p>
								<p class="f-24 f--semi mb-0">
									Investing 101: Investing Basics For Beginners
								</p>
							</nuxt-link>
						</li>
						<li>
							<nuxt-link to="">
								<p class="info">Mulai Investasi | 15 min read</p>
								<p class="f-24 f--semi mb-0">
									Things to consider before investing
								</p>
							</nuxt-link>
						</li>
						<li>
							<nuxt-link to="">
								<p class="info">Mulai Investasi | 15 min read</p>
								<p class="f-24 f--semi mb-0">
									Things to consider before investing
								</p>
							</nuxt-link>
						</li>
					</ul>
				</div>
			</slot>
		</div>
		<div class="bzg_c content-section pt-28" data-col="l6">
			<div class="pr-64 pl-36">
				<slot name="main-content">
					<p class="info">Mulai Investasi | 15 min read</p>
					<p class="title">Investing 101: Investing Basics For Beginners</p>
					<div class="contents">
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Reiciendis, beatae aperiam vitae illum soluta dolorem ad nobis
							sint hic suscipit delectus, quam assumenda, officiis maiores!
							Distinctio assumenda soluta, veniam et alias ad totam reiciendis
							laborum facere, commodi eius molestias pariatur maxime ipsam
							voluptate modi quas impedit! Vitae aspernatur sed, magni accusamus
							quia, enim ducimus nostrum maiores omnis ut, quas vero unde! Optio
							nesciunt corporis error, officiis totam, doloribus perspiciatis,
							provident veniam eaque at rem dignissimos cumque ipsa. Expedita, a
							perferendis itaque, in omnis voluptatem eos soluta id laudantium
							rem consectetur fugiat illo, optio voluptates perspiciatis
							impedit. Ab assumenda iure atque?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
							quos qui explicabo facere modi recusandae quae totam, illum
							doloremque laudantium ratione, vel ex maiores quis nihil ipsa, a
							quo. Porro?
						</p>
						<p>
							<img
								:src="`/assets/img/learning/graph.png`"
								alt="article photo"
							/>
						</p>
						<p>
							That is the super concise investing definition that comes courtesy
							of Merriam-Webster. Regardless of where you invest your money,
							you’re essentially giving your money to a company, government, or
							other entity in the hope they provide you with more money in the
							future. People generally invest money with a specific goal in
							mind, for example, retirement, their children’s education, a house
							— the list goes on. That is the super concise investing definition
							that comes courtesy of Merriam-Webster. Regardless of where you
							invest your money, you’re essentially giving your money to a
							company, government, or other entity in the hope they provide you
							with more money in the future. People generally invest money with
							a specific goal in mind, for example, retirement, their children’s
							education, a house — the list goes on.
						</p>
						<p>
							That is the super concise investing definition that comes courtesy
							of Merriam-Webster. Regardless of where you invest your money,
							you’re
						</p>
					</div>
				</slot>
			</div>
			<div class="next-topic bg-primary-blue">
				<div class="flex f-space-between mb-20">
					<span class="text-yellow">Next Content</span>
					<span>Mulai Investasi | 15 min read</span>
				</div>
				<nuxt-link to="" class="title">
					Things to consider before investing
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nav: [
				{
					text: 'Mulai Investasi',
					url: '/mulai-investasi'
				},
				{
					text: 'Saham',
					url: '/saham'
				},
				{
					text: 'Reksa Dana',
					url: '/reksa-dana'
				},
				{
					text: 'Syariah',
					url: '/syariah'
				},
				{
					text: 'Obligasi',
					url: '/obligasi'
				},
				{
					text: 'Fasilitas Margin',
					url: '/fasilitas-margin'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.sticky {
	@media #{$large} {
		position: sticky;
		top: 74px;
	}
}

.nav-category {
	padding-bottom: 14px;

	li {
		font-size: 20px;
		color: #bcbbbb;
		position: relative;
		width: fit-content;
		margin-bottom: 16px;

		a.nuxt-link-active {
			color: $dark-grey;
			font-weight: 600;

			&:after {
				content: '';
				position: absolute;
				height: 35%;
				width: 100%;
				background-color: $primary;
				opacity: 70%;
				bottom: 4px;
				left: 0;
				z-index: -1;
			}
		}
	}
}
.sticky-link-item {
	height: calc(100vh - 119px);
	border: 1px solid #e2e2e2;
	border-top: none;

	.items-nav {
		overflow: auto;
		height: calc(100% - 107px);
		background-color: #f2f2f2;

		li {
			padding: 22px 38px 36px;

			&.active {
				background-color: white;
			}
		}

		li:not(:last-child) {
			border-bottom: 1px solid #e2e2e2;
		}
	}
}

p.info {
	color: #a9a8a8;
	margin-bottom: 8px;
}

.content-section {
	.title {
		font-size: 45px;
		line-height: 1.3;
		font: $dark-grey;
		margin-bottom: 25px;
		font-weight: 600;
	}

	.contents {
		p {
			font-size: 24px;
			color: $grey;
		}
	}

	.next-topic {
		margin-left: -25px;
		padding: 28px 50px 70px;
		color: white;
	}
}
</style>
