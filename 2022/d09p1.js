const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let count = 1
	const set = new Set()
	set.add('0,0')
	let x = 0
	let y = 0
	let xOffset = 0
	let yOffset = 0
	lines.forEach(line => {
		let [dir, num] = line.split(' ')
		num = parseInt(num)
		for (; num > 0; num--) {
			switch (dir) {
				case 'R':
					xOffset++
					break
				case 'U':
					yOffset++
					break
				case 'L':
					xOffset--
					break
				case 'D':
					yOffset--
					break
			}
			if (Math.abs(xOffset) !== 2 && Math.abs(yOffset) !== 2) continue
			if (xOffset > 0) {
				xOffset--
				x--
			}
			if (xOffset < 0) {
				xOffset++
				x++
			}
			if (yOffset > 0) {
				yOffset--
				y--
			}
			if (yOffset < 0) {
				yOffset++
				y++
			}
			const coord = x+','+y
			if (set.has(coord)) continue
			set.add(coord)
			count++
		}
	})
	return count
}

console.log(solve())
