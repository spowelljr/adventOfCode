const { readLines } = require('../../input')

const solve = () => {
	const input = readLines()
	let horizontal = 0
	let depth = 0
	let aim = 0
	for (let i = 0; i < input.length; i++) {
		const curr = input[i].split(' ')
		const command = curr[0]
		const num = parseInt(curr[1])
		switch (command) {
			case 'forward':
				horizontal += num
				depth += num*aim
				break
			case 'up':
				aim -= num
				break
			case 'down':
				aim += num
				break
		}
	}
	return horizontal*depth
}

console.log(solve())
