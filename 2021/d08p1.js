const { readLines } = require('../input')

const solve = () => {
	const input = readLines()
	let count = 0
	for (let i = 0; i < input.length; i++) {
		const vals = input[i].split(' | ')[1].split(' ')
		for (let j = 0; j < vals.length; j++) {
			switch (vals[j].length) {
				case 2:
				case 3:
				case 4:
				case 7:
					count++
			}
		}
	}
	return count
}

console.log(solve())

