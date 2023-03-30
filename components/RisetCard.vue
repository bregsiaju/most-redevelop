<template>
	<div class="card relative">
		<div class="card--content">
			<div>
				<p class="f-18 text-primary-blue mb-12">{{ content.date }}</p>
				<p class="f-18 text-dark-grey">{{ content.topic }}</p>
				<p class="card--title">{{ content.title }}</p>
			</div>
			<span class="f-18"
				>Dilihat <strong>{{ content.totalViews }}</strong></span
			>
		</div>
		<div class="button-detail" @click="cardHovered = !cardHovered">
			<i class="bzi-plus"></i>
		</div>
		<div
			v-show="cardHovered"
			class="detail--content"
			@click="cardHovered = !cardHovered"
		>
			<p class="f-20 text-semi">Emiten Pilihan</p>
			<button class="btn--ghost-light-grey btn--block mb-16">BACA</button>
			<button class="btn--primary btn--block">UNDUH</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RisetCard',
	props: {
		content: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			cardHovered: false
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
	background: #f2f2f2;
	padding: 16px 27px 7px 16px;
	height: 100%;

	.card--content {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card--title {
		font-size: 30px;
		font-weight: 600;
		line-height: 1.3;
	}

	.button-detail {
		position: absolute;
		bottom: 0px;
		right: 0px;
		background-color: #e2e2e2;
		color: $primary-blue;
		padding: 14px 11px 7px 20px;
		border-radius: 80% 0 0 0;

		&:hover {
			cursor: pointer;
		}
	}

	.detail--content {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		padding: 25px 36px;

		p {
			border-bottom: 1px solid white;
			width: fit-content;
		}
	}
}
</style>
