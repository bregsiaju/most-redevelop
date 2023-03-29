export function divideArray(array) {
	const result = []
	for (let i = 0; i < array.length; i += 3) {
		const chunk = array.slice(i, i + 3)
		result.push(chunk)
	}
	return result
}
