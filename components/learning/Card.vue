<template>
	<div class="card relative">
		<slot name="card-image">
			<nuxt-link to="">
				<img
					:src="`assets/img/learning/${content.img}`"
					alt="training"
					class="card-img"
				/>
				<span v-if="cardType === 'video'" class="duration">
					{{ content.duration ? content.duration : '15:00' }}
				</span>
				<span v-if="cardType === 'article'" class="duration">
					{{ content.duration ? content.duration : '10' }} min read
				</span>
				<div v-if="cardType === 'video'" class="play-button">
					<i class="bzi-play"></i>
				</div>
			</nuxt-link>
		</slot>
		<div v-if="cardType === 'basic'" class="card--text bg-white">
			<h4 class="f-24 mb-16">{{ content.label }}</h4>
			<p class="f-18 text-grey mb-0">{{ content.info }}</p>
		</div>
		<div v-else class="card--text bg-white">
			<p class="f-18 text-grey mb-13">{{ content.category }}</p>
			<h4 class="f-24 mb-0">{{ content.title }}</h4>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card',
	props: {
		content: {
			type: Object,
			required: true
		},
		cardType: {
			type: String,
			default: 'basic'
		}
	}
}
</script>

<style lang="scss" scoped>
.card {
	margin-bottom: 70px;
	border-bottom: 3px solid $primary-blue;

	.card--text {
		padding: 30px 20px;
	}
}

.mb-13 {
	margin-bottom: 13.5px;
}

.play-button {
	position: absolute;
	background-color: $primary;
	padding: 12px 18px;
	border-radius: 0 50% 50%;
	right: 20px;
	bottom: 126px;
	color: white;
	box-shadow: 0px 3px 5px #00000029;
}

.duration {
	position: absolute;
	right: 0px;
	top: 0px;
	color: white;
	padding: 10px 15px;
	background: #3b3b3b;
	border-radius: 0px 3px 0px 3px;
}
</style>
