const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let max = 0
	let count = 0
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i]
		if (line !== '') {
			count += parseInt(line)
			continue
		}
		if (count > max) max = count
		count = 0
	}
	return max
}

console.log(solve())
