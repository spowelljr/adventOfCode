const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let total = 0
	for (let i = 0; i < lines.length; i++) {
		const coords = lines[i].split(',')
		const first = coords[0].split('-')
		const second = coords[1].split('-')
		const p0 = parseInt(first[0])
		const p1 = parseInt(first[1])
		const d0 = parseInt(second[0])
		const d1 = parseInt(second[1])
		const max = Math.max(p0, d0)
		const min = Math.min(p1, d1)
		if (max > min) continue
		total++
	}
	return total
}

console.log(solve())
