const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let total = 0
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i]
		const middle = line.length/2
		const first = line.substr(0, middle)
		const second = line.substr(middle, line.length)
		const set = new Set()
		for (let i = 0; i < first.length; i++) {
			set.add(first[i])
		}
		for (let i = 0; i < second.length; i++) {
			const value = second[i]
			if (!set.has(value)) continue
			if (value.toUpperCase() === value) total += second.charCodeAt(i) - 38
			else total += second.charCodeAt(i) - 96
			break
		}
	}
	return total
}

console.log(solve())
