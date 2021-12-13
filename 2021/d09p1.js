const { readLines } = require('../input')

const solve = () => {
	const input = readLines()
	let count = 0
	const heights = []
	for (let i = 0; i < input.length; i++) {
		heights.push(input[i].split('').map(c => parseInt(c)))
	}
	for (let i = 0; i < heights.length; i++) {
		const row = heights[i]
		for (let j = 0; j < row.length; j++) {
			const curr = row[j]
			if (i-1 >= 0 && curr >= heights[i-1][j]) continue
			if (i+1 < heights.length && curr >= heights[i+1][j]) continue
			if (j-1 >= 0 && curr >= heights[i][j-1]) continue
			if (j+1 < row.length && curr >= heights[i][j+1]) continue
			count += curr+1
		}
	}
	return count
}

console.log(solve())

