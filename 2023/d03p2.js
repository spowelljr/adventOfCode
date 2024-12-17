const { readLines } = require('../input')

const solve = () => {
        const lines = readLines()
	const arr = []
	const visited = []
	lines.forEach(line => {
		const lineToArr = line.split('')
		const v = Array(lineToArr.length).fill(false)
		arr.push(lineToArr)
		visited.push(v)
	})
	let sum = 0
	arr.forEach((line, x) => {
		line.forEach((c, y) => {
			if (!isGear(c)) return
			sum += adjacentNumbers(arr, x, y, visited)
		})
	})
	return sum
}

const adjacentNumbers = (arr, x, y, visit) => {
	let count = 0
	let sum = 1
	if (x > 0 && !isNaN(arr[x-1][y]) && !isVisited(visit, x-1, y)) {
		const num = getFullNumber(arr, x-1, y, visit)
		sum *= num
		if (num != 0) {
			count++
		}
	}
	if (y > 0 && !isNaN(arr[x][y-1]) && !isVisited(visit, x, y-1)) {
		const num = getFullNumber(arr, x, y-1, visit)
                sum *= num
                if (num != 0) {
                        count++
                }
	}
	if (x < arr.length-1 && !isNaN(arr[x+1][y]) && !isVisited(visit, x+1, y)) {
		const num = getFullNumber(arr, x+1, y, visit)
                sum *= num
                if (num != 0) {
                        count++
                }
	}
	if (y < arr[x].length-1 && !isNaN(arr[x][y+1]) && !isVisited(visit, x, y+1)) {
		const num = getFullNumber(arr, x, y+1, visit)
                sum *= num
                if (num != 0) {
                        count++
                }
	}
	if (x > 0 && y > 0 && !isNaN(arr[x-1][y-1]) && !isVisited(visit, x-1, y-1)) {
		const num = getFullNumber(arr, x-1, y-1, visit)
                sum *= num
                if (num != 0) {
                        count++
                }
	}
	if (x < arr.length-1 && y < arr[x+1].length-1 && !isNaN(arr[x+1][y+1]) && !isVisited(visit, x+1, y+1)) {
		const num = getFullNumber(arr, x+1, y+1, visit)
                sum *= num
                if (num != 0) {
                        count++
                }
	}
	if (x > 0 && y < arr[x-1].length-1 && !isNaN(arr[x-1][y+1]) && !isVisited(visit, x-1, y+1)) {
		const num = getFullNumber(arr, x-1, y+1, visit)
                sum *= num
                if (num != 0) {
                        count++
                }
	}
	if (x < arr.length-1 && y > 0 && !isNaN(arr[x+1][y-1]) && !isVisited(visit, x+1, y-1)) {
		const num = getFullNumber(arr, x+1, y-1, visit)
                sum *= num
                if (num != 0) {
                        count++
                }
	}
	return count === 2 ? sum : 0
}

const getFullNumber = (arr, x, y, visit) => {
	let num = ''
	let tmp = y-1
	while (tmp >= 0) {
		digit = arr[x][tmp]
		if (isNaN(digit)) break
		visit[x][tmp] = true
		num = digit + num
		tmp--

	}
	visit[x][y] = true
	num += arr[x][y]
	tmp = y+1
	while (tmp <= arr[x].length-1) {
		digit = arr[x][tmp]
                if (isNaN(digit)) break
		visit[x][tmp] = true
                num += digit
		tmp++
	}
	return parseInt(num)
}

const isGear = s => s === '*'

const isVisited = (a, x, y) => {
	return a[x][y]
}

console.log(solve())
