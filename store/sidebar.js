export const state = () => ({
	isOpen: false
})

export const mutations = {
	toggle(state) {
		state.isOpen = !state.isOpen
	},
	toggleClose(state) {
		state.isOpen = false
	}
}
