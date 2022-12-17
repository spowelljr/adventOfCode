const { readLines } = require('../input')

const solve = () => {
	const lines2 = readLines()
	let lines = []
	for (let i = 0; i < lines2.length; i++) {
		const line = lines2[i]
		if (line === '') continue
		lines.push(JSON.parse(line))
	}
	lines.push(JSON.parse('[[2]]'))
	lines.push(JSON.parse('[[6]]'))
	lines.sort((a,b) => isValid(b,a))
	lines.forEach(line => console.log(line.toString()))
	return lines
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
