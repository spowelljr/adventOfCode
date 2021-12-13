const { readLines } = require('../../input')

const solve = () => {
	const input = readLines()[0].split(',').map(l => parseInt(l))
	const vals = new Array(9).fill(0)
	for (let i = 0; i < input.length; i++) {
		vals[input[i]]++
	}
	for (let i = 0; i < 256; i++) {
		const newFish = vals.shift()
		vals.push(newFish)
		vals[6] += newFish
	}
	return vals.reduce((t, i) => t + i)
}

console.log(solve())
