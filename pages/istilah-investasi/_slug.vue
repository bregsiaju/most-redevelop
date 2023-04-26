<template>
	<main class="site-main">
		<div class="container pt-36 pb-40">
			<ul class="breadcrumb">
				<li><nuxt-link to="/belajar">Belajar</nuxt-link></li>
				<li>Istilah Investasi</li>
			</ul>
			<p class="title">
				Temukan <strong>arti istilah</strong> yang asing bagi Anda di sini
			</p>

			<!-- form search -->
			<form>
				<div class="form-input-search">
					<i class="icon-search"></i>
					<input type="text" placeholder="Cari istilah" />
				</div>
			</form>
			<!-- end form search -->

			<!-- keypad -->
			<div class="keypad flex bg-white">
				<nuxt-link
					v-for="char in alphabet"
					:key="char"
					:to="`/istilah-investasi/${char}`"
					class="flex v-center h-center"
					>{{ char }}</nuxt-link
				>
			</div>
			<!-- end keypad -->

			<!-- text shadow -->
			<div class="title-shadow-wrapper relative">
				<strong class="text-shadow">{{ activePage }}</strong>
				<p>
					<strong>{{ activePage }}</strong> (11 istilah)
				</p>
			</div>
			<!-- end text shadow -->

			<!-- content glosarium -->
			<div class="bzg">
				<div
					v-for="(list, i) in perColumn"
					:key="i"
					class="bzg_c"
					data-col="m6, l4"
				>
					<Accordion v-for="(item, x) in list" :key="x">
						<AccordionItem>
							<template slot="accordion-trigger">
								<p class="mb-0 f--semi">{{ item.trigger }}</p>
							</template>
							<template slot="accordion-content">
								<p class="mb-0">{{ item.content }}</p>
							</template>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { divideArray } from '~/plugins/arrayDivision.js'

export default {
	data() {
		return {
			glosarium: [
				{
					trigger: 'Afiliasi',
					content:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, temporibus?'
				},
				{
					trigger: 'Agio Saham',
					content:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, assumenda!'
				},
				{
					trigger: 'Aktiva Berwujud Bersih (Net Tangible Assets)',
					content:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum minima impedit.'
				},
				{
					trigger: 'Aktiva Pajak Tangguhan',
					content:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem possimus cupiditate, quod commodi amet deserunt? Aspernatur adipisci optio nemo. Nostrum.'
				},
				{
					trigger: 'Afiliasi',
					content:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, temporibus?'
				},
				{
					trigger: 'Agio Saham',
					content:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, assumenda!'
				},
				{
					trigger: 'Aktiva Berwujud Bersih (Net Tangible Assets)',
					content:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel earum minima impedit.'
				},
				{
					trigger: 'Aktiva Pajak Tangguhan',
					content:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem possimus cupiditate, quod commodi amet deserunt? Aspernatur adipisci optio nemo. Nostrum.'
				}
			],
			perColumn: []
		}
	},
	computed: {
		alphabet() {
			const result = []
			for (let i = 65; i <= 90; i++) {
				result.push(String.fromCharCode(i))
			}
			return result
		},
		activePage() {
			return this.$route.params.slug
		}
	},
	mounted() {
		this.perColumn = divideArray(this.glosarium)
	}
}
</script>

<style lang="scss" scoped>
.title {
	font-size: 44px;
	line-height: 1.3;

	@media #{$large} {
		width: 50%;
	}

	@media #{$sm} {
		font-size: 24px;
	}
}

.form-input-search {
	@media #{$large} {
		width: 40%;
	}

	i {
		padding-bottom: 10px;
	}

	input {
		border-top: none;
		border-right: none;
		border-left: none;
		font-size: 20px;
		width: 100%;
		padding-bottom: 10px;
	}

	input[type='text']:focus {
		outline: none;
		border-color: $primary-blue;
	}
}

.keypad {
	margin-top: 50px;
	padding: 20px;
	flex-wrap: wrap;
	gap: 20px;
	box-shadow: 0px 6px 30px #00000014;
	border-radius: 3px;

	a {
		border-radius: 15px;
		line-height: 1;
		font-size: 20px;
		color: #3b3b3b;
		flex-basis: 76px;
		border: 2px solid #e2e2e2;
		height: 54px;

		&:hover,
		&.nuxt-link-active {
			border-color: $primary-blue;
			background: #f1f7fc;
		}
	}

	@media #{$sm} {
		margin-top: 32px;

		a {
			flex-basis: 48px;
		}
	}
}

.title-shadow-wrapper {
	padding-top: 125px;
	padding-bottom: 20px;
	.text-shadow {
		font-size: 230px;
		position: absolute;
		top: 0px;
		left: -70px;
		color: #e2e2e2;
		z-index: -1;
		line-height: 1;
		opacity: 40%;
	}

	p {
		color: #868686;

		strong {
			font-size: 45px;
			color: $primary-blue;
		}
	}
}

.bzg {
	margin-left: -28px;

	.bzg_c {
		padding-left: 28px;
	}
}

.accordion {
	border-radius: 10px;
	box-shadow: 0px 6px 30px #00000015;
	padding: 25px;
	margin-bottom: 40px;
	font-size: 18px;
	min-height: 107.6px;
	display: flex;
	align-items: center;

	/deep/ .accordion__item {
		width: 100%;
	}
}
</style>
