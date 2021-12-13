const { readLines } = require('../../input')

const solve = () => {
	const input = readLines()[0].split(',').map(l => parseInt(l))
	let min = Number.MAX_VALUE
	let pos = 0
	while (true) {
		let total = 0
		for (let i = 0; i < input.length; i++) {
			total += Math.abs(input[i] - pos)
		}
		if (total > min) return min
		min = total
		pos++
	}
}

console.log(solve())
