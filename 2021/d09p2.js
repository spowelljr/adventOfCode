const { readLines } = require('../input')

const solve = () => {
	const input = readLines()
	const heights = []
	const queue = []
	const counts = []
	for (let i = 0; i < input.length; i++) {
		heights.push(input[i].split('').map(c => parseInt(c)))
	}
	for (let i = 0; i < heights.length; i++) {
		const row = heights[i]
		for (let j = 0; j < row.length; j++) {
			const curr = row[j]
			if (curr === '-' || curr === 9) continue
			queue.push([i, j])
			counts.push(processQueue(queue, heights))
		}
	}
	counts.sort((a,b) => b-a)
	return counts[0]*counts[1]*counts[2]
}

const processQueue = (queue, heights) => {
	count = 0
	while (queue.length) {
		const curr = queue.shift()
		const i = curr[0]
		const j = curr[1]
		if (heights[i][j] === '-') continue
		count++
		heights[i][j] = '-'
		if (isGood(heights, i-1, j)) queue.push([i-1, j])
                if (isGood(heights, i+1, j)) queue.push([i+1, j])
                if (isGood(heights, i, j-1)) queue.push([i, j-1])
                if (isGood(heights, i, j+1)) queue.push([i, j+1])
	}
	return count
}

const isGood = (heights, i, j) => {
	if (i < 0 || j < 0 || i >= heights.length || j >= heights[i].length) return false
	const curr = heights[i][j]
	if (curr === '-' || curr === 9) return false
	return true
}

console.log(solve())

