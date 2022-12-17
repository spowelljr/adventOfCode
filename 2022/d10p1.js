const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let count = 0
	let reg = 1
	let op = ''
	let num = 0
	let second = false
	for (let i = 1; i <= 220; i++) {
		if (op === '') {
			const line = lines.shift()
			const parts = line.split(' ')
			op = parts[0]
			if (op === 'addx') num = parseInt(parts[1])
		}
		if (i === 20 || (i-20)%40 === 0) {
			count += i*reg
		}
		if (op === 'noop') {
			op = ''
			continue
		}
		if (!second) {
			second = true
			continue
		}
		reg += num
		op = ''
		second = false
	}
	return count
}

console.log(solve())
