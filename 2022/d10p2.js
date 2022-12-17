const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let reg = 1
	let op = ''
	let num = 0
	let second = false
	let output = ''
	for (let i = 0; i < 240; i++) {
		if (op === '') {
			const line = lines.shift()
			const parts = line.split(' ')
			op = parts[0]
			if (op === 'addx') num = parseInt(parts[1])
		}
		if (i >= 40 && i%40 === 0) {
			output += '\n'
		}
		const pos = i%40
                if (Math.abs(pos-reg) < 2) {
                        output += '#'
                } else {
                        output += '.'
                }
		if (op === 'noop') {
			op = ''
		} else {
			if (!second) {
				second = true
			} else {
				reg += num
				op = ''
				second = false
			}
		}
	}
	return output
}

console.log(solve())
