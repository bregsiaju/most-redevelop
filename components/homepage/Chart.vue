<template>
	<LineChart
		:chart-options="chartOptions"
		:chart-data="chartData"
		:chart-id="chartId"
		:dataset-id-key="datasetIdKey"
		:plugins="plugins"
		:css-classes="cssClasses"
		:styles="styles"
		:width="width"
		:height="height"
	/>
</template>

<script>
export default {
	name: 'Chart',
	props: {
		chartId: {
			type: String,
			default: 'line-chart'
		},
		datasetIdKey: {
			type: String,
			default: 'label'
		},
		width: {
			type: Number,
			default: 400
		},
		height: {
			type: Number,
			default: 400
		},
		cssClasses: {
			default: '',
			type: String
		},
		styles: {
			type: Object,
			default: () => {}
		},
		plugins: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			chartData: {
				labels: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July'
				],
				datasets: [
					{
						label: 'Data One',
						backgroundColor: '#f87979',
						data: [40, 39, 10, 40, 39, 80, 40]
					}
				]
			},
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false
			}
		}
	}
}
</script>
