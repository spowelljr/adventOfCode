const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let curr = 0
	let max = 0
	lines.forEach(line => {
		if (line !== '') {
			curr += parseInt(line)
			return
		}
		max = Math.max(curr, max)
		curr = 0
	})
	return max
}

console.log(solve())
