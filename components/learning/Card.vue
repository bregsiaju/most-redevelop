<template>
	<div class="card relative">
		<nuxt-link to="" class="card-img">
			<img :src="`assets/img/learning/${content.img}`" alt="training" />
			<span v-if="cardType === 'video'" class="duration">
				{{ content.duration ? content.duration : '15:00' }}
			</span>
			<span v-if="cardType === 'article'" class="duration">
				{{ content.duration ? content.duration : '10' }} min read
			</span>
			<div v-if="cardType === 'event'" class="level">
				<span>Basic 2</span>
				<span>Nasabah</span>
			</div>
			<div v-if="cardType === 'video'" class="play-button">
				<i class="bzi-play"></i>
			</div>
		</nuxt-link>
		<div v-if="cardType === 'basic'" class="card--text bg-white">
			<h4 class="f-24 mb-16">{{ content.label }}</h4>
			<p class="f-18 text-grey mb-0">{{ content.info }}</p>
		</div>
		<div v-if="cardType === 'event'" class="card--text -event bg-white">
			<p class="f-18 text-grey mb-8">{{ content.date }}</p>
			<h4 class="f-24 mb-16">{{ content.title }}</h4>
			<p class="flex f-gap-12">
				<i class="icon-location pt-4"></i>
				<span class="f-14">{{ content.location }}</span>
			</p>
			<p class="flex f-gap-12">
				<i class="bzi-people"></i>
				<span class="f-14">{{ content.quota }}</span>
			</p>
		</div>
		<div v-else class="card--text bg-white">
			<p class="f-18 text-grey mb-13">{{ content.category }}</p>
			<nuxt-link to="">
				<h4 class="f-24 mb-0">{{ content.title }}</h4>
			</nuxt-link>
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

	.card-img {
		height: 247px;
		display: flex;
		background: black;
		overflow: hidden;
		align-items: center;

		img {
			width: 100%;
		}
	}

	.card--text {
		padding: 30px 20px;

		&.-event {
			i {
				color: $primary-blue;
			}
		}
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

.level {
	position: absolute;
	right: 0px;
	top: 210px;
	color: white;

	span {
		background: #3b3b3b;
		border-radius: 3px;
		padding: 6px 12px;
		margin-right: 10px;
		text-transform: uppercase;
	}
}
</style>
