<template>
	<div class="bzg">
		<div class="bzg_c --gap" data-col="m6">
			<h1 class="text-reg" v-html="data.heading"></h1>
			<p>{{ data.text }}</p>
			<p v-if="data.title !== 'fasilitas margin'">
				Pelajari lebih lanjut soal {{ data.title }}
				<nuxt-link :to="data.url">di sini.</nuxt-link>
			</p>
			<div class="bzg p-0 button-wrapper">
				<div class="bzg_c" data-col="s6, l5">
					<nuxt-link
						v-if="data.title === 'fasilitas margin'"
						:to="data.url"
						class="btn--primary btn--block"
						>TENTANG MARJIN</nuxt-link
					>
					<nuxt-link v-else to="/login" class="btn--primary btn--block"
						>MASUK</nuxt-link
					>
				</div>
				<div class="bzg_c" data-col="s6, l5">
					<nuxt-link to="" class="btn--ghost-primary btn--block">{{
						data.title === 'fasilitas margin'
							? 'CARA DAFTAR'
							: 'DAFTAR SEKARANG'
					}}</nuxt-link>
				</div>
			</div>
		</div>
		<div class="bzg_c --gap" data-col="m6">
			<figure class="mb-0 flex h-center">
				<img :src="`/assets/img/products/${data.image}`" :alt="data.title" />
			</figure>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PageHeader',
	props: {
		data: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.bzg {
	align-items: center;
	padding: 18px 0;
	.bzg_c.--gap {
		padding-top: 18px;
		padding-bottom: 18px;

		&:first-child {
			@media #{$large} {
				padding-right: 80px;
			}
		}
	}

	&.button-wrapper {
		margin-left: -20px;

		.bzg_c {
			padding-left: 20px;
		}
	}
}

h1 {
	margin-bottom: 30px;
	line-height: 1.2;
}

p {
	font-size: 24px;
	margin-bottom: 30px;
	line-height: 1.4;

	a {
		color: $primary;
		font-weight: bold;
		text-decoration: underline;
	}
}

@media #{$sm} {
	p {
		font-size: 20px;
	}

	img {
		width: 80%;
	}
}
</style>
