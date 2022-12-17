const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	const totals = []
	count = 0
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i]
		if (line !== '') {
			count += parseInt(line)
			continue
		}
		totals.push(count)
		count = 0
	}
	totals.sort((a, b) => b - a)
	return totals[0] + totals[1] + totals[2]
}

console.log(solve())
