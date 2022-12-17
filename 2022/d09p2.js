const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let o = []
	let n = []
	lines.forEach(line => {
		let [dir, num] = line.split(' ')
		num = parseInt(num)
		for (let i = 0; i < num; i++) {
			switch (dir) {
				case 'R':
                                   	o.push([1,0])
                                        break
                                case 'U':
                                        o.push([0,1])
                                        break
                                case 'L':
                                        o.push([-1,0])
                                        break
                                case 'D':
                                        o.push([0,-1])
                                        break
			}
		}
	})
	for (let i = 0; i < 9; i++) {
	let count = 1
	const set = new Set()
	set.add('0,0')
	let x = 0
	let y = 0
	let xOffset = 0
	let yOffset = 0
	o.forEach(line => {
		let [xInt, yInt] = line
		xOffset += xInt
		yOffset += yInt
			if (Math.abs(xOffset) !== 2 && Math.abs(yOffset) !== 2) return
			let newX = 0
			let newY = 0
			if (xOffset > 0) {
				xOffset--
				newX++
				x++
			}
			if (xOffset < 0) {
				xOffset++
				newX--
				x--
			}
			if (yOffset > 0) {
				yOffset--
				newY++
				y++
			}
			if (yOffset < 0) {
				yOffset++
				newY--
				y--
			}
			n.push([newX, newY])
			const coord = x+','+y
			if (set.has(coord)) return
			set.add(coord)
			count++
	})
	console.log(count)
	o = n
	n = []
	}
}

console.log(solve())
