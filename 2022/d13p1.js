const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let count = 0
	let index = 1
	for (let i = 0; i < lines.length; i+=3) {
		const left = JSON.parse(lines[i])
		const right = JSON.parse(lines[i+1])
		const val = isValid(left, right)
		if (val === 1) count += index
		index++
	}
	return count
}

const isValid = (left, right) => {
	if (!Array.isArray(left) && !Array.isArray(right)) {
		if (left < right) return 1
		if (left > right) return -1
		if (left === right) return 0
		return 0
	}
	if (!Array.isArray(left)) left = [left]
	if (!Array.isArray(right)) right = [right]
	for (let i = 0; i < left.length; i++) {
		if (i === right.length) return -1
		const val = isValid(left[i], right[i])
		if (val !== 0) return val
	}
	if (left.length < right.length) return 1
	return 0
}

console.log(solve())
