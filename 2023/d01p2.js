const { readLines } = require('../input')

const solve = () => {
        const lines = readLines()
	let sum = 0
	lines.forEach(line => {
		const matches = line.match(/[1-9]|one|two|three|four|five|six|seven|eight|nine/g)
		const first = toNum(matches[0])
		const last = lastNum(line)
		console.log(first, last)
		sum += parseInt(first*10+last)
	})
	return sum
}

const lastNum = line => {
	const matches = line.match(/[1-9]/g)
	let value = 0
	let index = 0
	if (matches) {
		value = parseInt(matches[matches.length-1])
		index = line.lastIndexOf(value)
	}
	const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	words.forEach(word => {
		const i = line.lastIndexOf(word)
		if (i > -1 && i > index) {
			value = toNum(word)
			index = i
		}
	})
	return value
}

const toNum = value => {
	switch (value) {
		case 'one': return 1
		case 'two': return 2
		case 'three': return 3
		case 'four': return 4
		case 'five': return 5
		case 'six': return 6
		case 'seven': return 7
		case 'eight': return 8
		case 'nine': return 9
		default: return parseInt(value)
	}
}

console.log(solve())
