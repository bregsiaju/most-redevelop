<template>
	<li class="accordion__item">
		<div
			class="accordion__trigger"
			:class="{ accordion__trigger_active: visible }"
		>
			<slot name="accordion-trigger"></slot>
			<i
				class="sub-icon"
				:class="visible ? `bzi-angle-up` : `bzi-angle-down`"
				@click="open"
			></i>
		</div>

		<transition
			name="accordion"
			@enter="start"
			@after-enter="end"
			@before-leave="start"
			@after-leave="end"
		>
			<div v-show="visible" class="accordion__content">
				<ul class="mb-0 pl-0">
					<slot name="accordion-content"></slot>
				</ul>
			</div>
		</transition>
	</li>
</template>

<script>
export default {
	name: 'AccordionItem',
	inject: ['Accordion'],
	data() {
		return {
			index: null
		}
	},
	computed: {
		visible() {
			return this.index === this.Accordion.active
		}
	},
	created() {
		this.index = this.Accordion.count++
	},
	methods: {
		open() {
			if (this.visible) {
				this.Accordion.active = null
			} else {
				this.Accordion.active = this.index
			}
		},
		start(el) {
			el.style.height = el.scrollHeight + 'px'
		},
		end(el) {
			el.style.height = ''
		}
	}
}
</script>

<style lang="scss" scoped>
.accordion__item {
	position: relative;
	flex-direction: column;
}

.accordion__trigger {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}

.accordion-enter-active,
.accordion-leave-active {
	will-change: height, opacity;
	transition: height 0.3s ease, opacity 0.3s ease;
	overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
	height: 0 !important;
	opacity: 0;
}

.sub-icon {
	padding: 0 8px;

	&:hover {
		cursor: pointer;
	}
}

.accordion__content {
	width: 100%;
}
</style>
