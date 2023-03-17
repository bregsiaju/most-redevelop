<template>
	<div class="relative">
		<div class="tooltip">
			<i class="icon-user"></i>
			<span>{{ sliderValue }} Tahun</span>
		</div>
		<input
			ref="slider"
			v-model="sliderValue"
			min="0"
			max="100"
			type="range"
			class="slider"
		/>
		{{ sliderRef }}
	</div>
</template>

<script>
export default {
	name: 'InputSlider',
	data() {
		return {
			sliderValue: 10
		}
	}
	// mounted: {
	// 	componentPosition() {
	// 		const range = this.$refs.slider.max - this.$refs.slider.min
	// 		const offset = this.sliderValue - this.$refs.slider.min
	// 		const percentage = (offset / range) * 100
	// 		return `left: ${percentage}%;`
	// 	}
	// }
}
</script>

<style lang="scss" scoped>
.tooltip {
	border: 1px solid #ccc;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	gap: 10px;
	width: fit-content;
	padding: 3px 10px;
	position: absolute;
	top: 0px;
	background: white;
}

input {
	width: 100%;
	margin-top: 45px;
}

.slider {
	-webkit-appearance: none;
	appearance: none;
	width: 100%;
	height: 10px;
	border-radius: 5px;
	background: #bcbbbb;
	outline: none;
	opacity: 1;
	-webkit-transition: 0.2s;
	transition: opacity 0.2s;
}

.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: $primary-blue;
	border: 4px solid #fff;
	box-shadow: 0px 3px 6px #00000029;
	cursor: pointer;
	position: relative;
}

.slider::-moz-range-thumb {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: $primary-blue;
	border: 4px solid #fff;
	box-shadow: 0px 3px 6px #00000029;
	cursor: pointer;
	position: relative;
}
</style>
