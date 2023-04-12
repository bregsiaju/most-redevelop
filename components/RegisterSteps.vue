<template>
	<div class="bzg">
		<div v-for="(step, i) in data" :key="i" class="bzg_c mb-24" data-col="m4">
			<div class="card-tutorial">
				<p class="f-24 f--semi">{{ step.text1 }}</p>
				<div class="responsive-media r-square">
					<img
						:src="`/assets/img/help/${step.image}`"
						width="85px"
						class="--contain"
					/>
				</div>
				<p class="mt-24 mb-0" v-html="step.text2"></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RegisterSteps',
	props: {
		data: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.bzg {
	margin-left: -30px;

	.bzg_c {
		padding-left: 30px;
	}
}

.card-tutorial {
	background-color: #fff;
	box-shadow: 0px 6px 30px #00000015;
	border-radius: 8px;
	padding: 36px 30px;
	text-align: center;
	height: 100%;

	/deep/ a {
		color: $primary-blue;
		text-decoration: underline;
	}

	.responsive-media {
		max-width: 80px;
		height: 80px;
		margin: 0 auto;

		&.r-square {
			padding-bottom: 30%;
		}
	}
}
</style>
