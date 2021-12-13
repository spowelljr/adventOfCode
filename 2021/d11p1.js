const { readLines } = require('../input')

const solve = () => {
	const input = readLines()
	const grid = []
	let count = 0
	for (let i = 0; i < input.length; i++) {
		grid.push(input[i].split('').map(i => parseInt(i)))
	}
	for (let i = 0; i < 100; i++) {
		count += step(grid)	
	}
	return count
}

const step = grid => {
	const ready = increment(grid)
	return flash(grid, ready)
}

const increment = grid => {
	const flash = []
	for (let i = 0; i < grid.length; i++) {
		const row = grid[i]
		for (let j = 0; j < row.length; j++) {
			if (++row[j] === 10) flash.push([i,j])
		}
	}
	return flash
}

const flash = (grid, ready) => {
	let count = 0
	while (ready.length) {
		const curr = ready.shift()
		const x = curr[0]
		const y = curr[1]
		if (grid[x][y] === 0) continue
		if (++grid[x][y] < 10) continue
		count++
		grid[x][y] = 0
		ready.push(...getValid(grid,x,y))
	}
	return count
}

const getValid = (grid, x, y) => {
	const top = x > 0
	const bottom = x+1 < grid.length
	const left = y > 0
	const right = y+1 < grid[x].length
	const valid = []
	if (top) valid.push([x-1,y])
	if (bottom) valid.push([x+1,y])
	if (left) valid.push([x,y-1])
	if (right) valid.push([x,y+1])
	if (top && left) valid.push([x-1,y-1])
	if (top && right) valid.push([x-1,y+1])
	if (bottom && left) valid.push([x+1,y-1])
	if (bottom && right) valid.push([x+1,y+1])
	return valid
}

console.log(solve())

