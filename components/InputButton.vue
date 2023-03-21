<template>
	<div class="button-wrapper">
		<div class="bzg">
			<div
				v-for="(option, i) in options"
				:key="i"
				class="bzg_c"
				data-col="s3, m3"
			>
				<input
					v-if="option.value != 'other'"
					:id="option.value + name"
					v-model="selectedOption"
					type="radio"
					:name="name"
					:value="option.value"
				/>
				<label
					v-if="option.value != 'other'"
					:for="option.value + name"
					class="btn--outline"
					:class="{
						'button-selected': selectedOption === option.value
					}"
					>{{ option.label }}</label
				>
				<input
					v-if="option.value == 'other'"
					v-model="otherValue"
					type="number"
					min="0"
					:name="name"
					class="btn--outline"
					placeholder="RpJumlah"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InputButton',
	props: {
		options: {
			type: Array,
			required: true
		},
		name: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			selectedOption: this.options,
			otherValue: ''
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
	height: 100%;
	white-space: pre-wrap;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	&:hover,
	&:focus {
		background-color: rgba(119, 173, 220, 0.1);
		border-color: #003d79;
		color: #000;
		text-shadow: none;
	}
	// @media (max-width: 576px) {

	// }
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
