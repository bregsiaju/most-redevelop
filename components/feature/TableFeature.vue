<template>
	<div class="table mb-24">
		<div class="bzg bzg--no-gutter heading v-center">
			<div class="bzg_c" data-col="s2">
				<h5>Fitur</h5>
			</div>
			<div class="bzg_c" data-col="s2">
				<h5 class="text-center">MOST Web</h5>
			</div>
			<div class="bzg_c" data-col="s2">
				<h5 class="text-center">MOST App</h5>
			</div>
			<div class="bzg_c" data-col="s2">
				<h5 class="text-center">MOST Mobile</h5>
			</div>
			<div class="bzg_c" data-col="s4">
				<h5>Remarks</h5>
			</div>
		</div>
		<ul class="list-nostyle list-stripped">
			<li v-for="(list, i) in featureList" :key="i" class="list-feature">
				<div class="bzg bzg--no-gutter v-center">
					<div class="bzg_c" data-col="s2">
						<p>{{ list.name }}</p>
					</div>
					<div class="bzg_c text-center" data-col="s2">
						<img
							:src="`/assets/img/feature/${
								list.web ? 'correct.svg' : 'wrong.svg'
							}`"
						/>
					</div>
					<div class="bzg_c text-center" data-col="s2">
						<img
							:src="`/assets/img/feature/${
								list.app ? 'correct.svg' : 'wrong.svg'
							}`"
						/>
					</div>
					<div class="bzg_c text-center" data-col="s2">
						<img
							:src="`/assets/img/feature/${
								list.mobile ? 'correct.svg' : 'wrong.svg'
							}`"
						/>
					</div>
					<div class="bzg_c" data-col="s4">
						<p>{{ list.remarks }}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'TableFeature',
	props: {
		featureList: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.list-feature {
	p {
		margin-bottom: 0px;
	}
}

.bzg.heading {
	border-bottom: 1px solid #e2e2e2;
}

@media #{$medium} {
	.bzg_c {
		padding-left: 24px;
	}
}

.list-stripped {
	p {
		margin-bottom: 0;
		font-size: 1.2em;
		padding: 16px 0;

		@media #{$md} {
			padding: 8px 0;
		}
	}

	& > li:nth-child(even) {
		background-color: #f5f5f5;
	}
}
</style>
