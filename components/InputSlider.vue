<template>
	<div class="relative">
		<div class="tooltip" :style="componentPosition">
			<i class="icon-user"></i>
			<span>{{ sliderValue }} Tahun</span>
		</div>
		<input
			ref="slider"
			v-model="sliderValue"
			:min="sliderMin"
			:max="sliderMax"
			type="range"
			class="slider"
			:style="{ '--value': sliderValue, '--max': sliderMax }"
		/>
	</div>
</template>

<script>
export default {
	name: 'InputSlider',
	data() {
		return {
			sliderValue: 10,
			sliderMax: 100,
			sliderMin: 0
		}
	},
	computed: {
		componentPosition() {
			const range = this.sliderMax - this.sliderMin
			const offset = this.sliderValue - this.sliderMin
			const position = (offset / range) * 100 - 8
			return `left: ${position}%;`
		}
	}
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
	white-space: nowrap;
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
	background: transparent;
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

.slider::-webkit-slider-runnable-track {
	background: repeating-linear-gradient(
			90deg,
			transparent,
			transparent 1px,
			#fff 0,
			#fff 5px
		),
		linear-gradient(
			to right,
			$primary 0%,
			$primary calc((100% * var(--value)) / var(--max)),
			#bcbbbb calc((100% * var(--value)) / var(--max)),
			#bcbbbb 100%
		);
}

.slider::-moz-range-track {
	background: repeating-linear-gradient(
			90deg,
			transparent,
			transparent 1px,
			#fff 0,
			#fff 5px
		),
		linear-gradient(
			to right,
			$primary 0%,
			$primary calc((100% * var(--value)) / var(--max)),
			#bcbbbb calc((100% * var(--value)) / var(--max)),
			#bcbbbb 100%
		);
}
</style>
