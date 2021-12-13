const { readLines } = require('../../input')

const solve = () => {
	const input = readLines()
	const val = new Array(input[0].length).fill(0)
	for (let i = 0; i < input.length; i++) {
		const curr = input[i].split('')
		for (let j = 0; j < curr.length; j++) {
			const c = curr[j] === '0' ? -1 : 1
			val[j] += c
		}
	}
	let gammaBinary = ''
	let epsilonBinary = ''
	for (let i = 0; i < val.length; i++) {
		gammaBinary += val[i] > 0 ? '1' : '0'
		epsilonBinary += val[i] > 0 ? '0' : '1'
	}
	const gamma = parseInt(gammaBinary, 2)
	const epsilon = parseInt(epsilonBinary, 2)
	return gamma*epsilon
}

console.log(solve())
