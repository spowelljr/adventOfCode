const { readLines } = require('../input')

const solve = () => {
        const lines = readLines()
	let sum = 0
	lines.forEach(line => {
		let arry = line.split('')
		let first = arry.find(char => !isNaN(char))
		let last = arry.findLast(char => !isNaN(char))
		let num = first + last
		sum += parseInt(num)
	})
	return sum
}

console.log(solve())
