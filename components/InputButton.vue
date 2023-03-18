<template>
	<div class="button-wrapper">
		<div class="bzg">
			<div class="bzg_c" data-col="m3">
				<input
					id="button-radio"
					v-model="selectedOption"
					type="radio"
					name="my-radio"
					value="option1"
				/>
				<label
					for="button-radio"
					class="btn--outline"
					:class="{ 'button-selected': selectedOption === 'option1' }"
					>Sangat Konservative</label
				>
			</div>
			<div class="bzg_c" data-col="m3">
				<input
					id="button-radio-2"
					v-model="selectedOption"
					type="radio"
					name="my-radio"
					value="option2"
				/>
				<label
					for="button-radio-2"
					class="btn--outline"
					:class="{ 'button-selected': selectedOption === 'option2' }"
					>Konservative</label
				>
			</div>
			<div class="bzg_c" data-col="m3">
				<input
					id="button-radio-3"
					v-model="selectedOption"
					type="radio"
					name="my-radio"
					value="option3"
				/>
				<label
					for="button-radio-3"
					class="btn--outline"
					:class="{ 'button-selected': selectedOption === 'option3' }"
					>Moderat</label
				>
			</div>
			<div class="bzg_c" data-col="m3">
				<input
					id="button-radio-4"
					v-model="selectedOption"
					type="radio"
					name="my-radio"
					value="option4"
				/>
				<label
					for="button-radio-4"
					class="btn--outline"
					:class="{ 'button-selected': selectedOption === 'option4' }"
					>Agresif</label
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InputButton',
	props: {
		model: {
			type: String,
			default: 'option1'
		}
	},
	data() {
		return {
			selectedOption: this.model
		}
	},
	computed: {
		buttonClass() {
			return {
				'button-selected': this.selectedOption === 'option1'
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.btn--outline {
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	padding: 15px 0;
	border-color: #bcbcbc;

	&:hover,
	&:focus {
		background-color: rgba(119, 173, 220, 0.1);
		border-color: #003d79;
		color: #000;
		text-shadow: none;
	}
}

.bzg {
	margin-left: 0;
}

.bzg_c {
	padding-left: 0;
}

.bzg_c:not(:first-of-type) {
	padding-left: 15px;
}

input[type='radio'] {
	display: none;

	&:checked + label {
		background-color: rgba(119, 173, 220, 0.1);
		border: 1px solid #003d79;
		color: #000;
		text-shadow: none;
	}
}
</style>
