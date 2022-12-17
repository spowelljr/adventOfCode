const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	const rows = []
	const visited = new Set()
	lines.forEach(line => {
		const chars = line.split('')
		rows.push(chars)
	})
	const queue = [{x: 0, y: 21, count: 0, track: ''}]
	while (true) {
		let {x, y, count, track} = queue.shift()
		console.log(count)
		if (visited.has(x+','+y)) continue
		const value = rows[y][x]
		if (value === 'E') {
			console.log(track)
			return count
		}
		visited.add(x+','+y)
		count++
		if (isValid(rows, x-1, y, x, y)) {
			queue.push({x: x-1, y, count, track: track + '<'})
		}
		if (isValid(rows, x+1, y, x, y)) {
			queue.push({x: x+1, y, count, track: track + '>'})
		}
		if (isValid(rows, x, y-1, x, y)) {
                        queue.push({x, y: y-1, count, track: track + '^'})
                }
		if (isValid(rows, x, y+1, x, y)) {
                        queue.push({x, y: y+1, count, track: track + 'v'})
                }
	}
}

const isValid = (rows, x, y, oldX, oldY) => {
	if (x < 0) return false
	if (x >= rows[0].length) return false
	if (y < 0) return false
	if (y >= rows.length) return false
	let newVal = rows[y][x]
	if (newVal === 'E') newVal = 'z'
	let oldVal = rows[oldY][oldX]
	if (oldVal === 'S') oldVal = 'a'
	return newVal.charCodeAt(0) - oldVal.charCodeAt(0) <= 1
}

console.log(solve())
