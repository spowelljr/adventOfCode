const { readLines } = require('../../input')

const solve = () => {
	const input = readLines()
	const map = new Map()
	let totalCount = 0
	for (let i = 0; i < input.length; i++) {
		const cords = input[i].split(' -> ')
		const start = cords[0].split(',')
		let startX = parseInt(start[0])
		let startY = parseInt(start[1])
		const end = cords[1].split(',')
		let endX = parseInt(end[0])
		let endY = parseInt(end[1])
		if (startX === endX || startY === endY) {
                	if (endX < startX) [startX, endX] = [endX, startX]
                	if (endY < startY) [startY, endY] = [endY, startY]
                	for (let x = startX; x <= endX; x++) {
                        	for (let y = startY; y <= endY; y++) {
                                	const curr = x+','+y
                                	let count = map.get(curr) || 0
                                	if (count === 1) totalCount++
                                	map.set(curr, ++count)
                        	}
                	}
			continue
		}
		if (endX < startX) [startX, endX, startY, endY] = [endX, startX, endY, startY]
		iterate = startY < endY ? 1 : -1
		let y = startY
		for (let x = startX; x <= endX; x++) {
			const curr = x+','+y
			let count = map.get(curr) || 0
			if (count === 1) totalCount++
			map.set(curr, ++count)
			y += iterate
		}
	}
	return totalCount
}

console.log(solve())
