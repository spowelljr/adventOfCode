const { readLines } = require('../input')

const solve = () => {
        const lines = readLines()
	const arr = []
	lines.forEach(line => {
		const lineToArr = line.split('')
		arr.push(lineToArr)
	})
	let sum = 0
	arr.forEach((line, x) => {
		let num = ''
		let isAdjacent = false
		line.forEach((c, y) => {
			if (isNaN(c)) {
				if (num != '' && isAdjacent) {
					sum += parseInt(num)
				}
				num = ''
				isAdjacent = false
			} else {
				num += c
				if (isAdjacentToSymbol(arr, x, y)) {
					isAdjacent = true
				}
			}
		})
		if (num != '' && isAdjacent) {
                	sum += parseInt(num)
                }
	})
	return sum
}

const isAdjacentToSymbol = (arr, x, y) => {
	if (x > 0 && isSymbol(arr[x-1][y])) return true
	if (y > 0 && isSymbol(arr[x][y-1])) return true
	if (x < arr.length-1 && isSymbol(arr[x+1][y])) return true
	if (y < arr[x].length-1 && isSymbol(arr[x][y+1])) return true
	if (x > 0 && y > 0 && isSymbol(arr[x-1][y-1])) return true
	if (x < arr.length-1 && y < arr[x+1].length-1 && isSymbol(arr[x+1][y+1])) return true
	if (x > 0 && y < arr[x-1].length-1 && isSymbol(arr[x-1][y+1])) return true
	if (x < arr.length-1 && y > 0 && isSymbol(arr[x+1][y-1])) return true
	return false
}

const isSymbol = s => {
	if (s === '.') return false
	return isNaN(s)
}

console.log(solve())
