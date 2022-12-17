const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	const set = new Set()
	let maxY = 0
	lines.forEach(line => {
		const parts = line.split(' -> ')
		for (let i = 1; i < parts.length; i++) {
			const [x1, y1] = parts[i-1].split(',').map(n => parseInt(n))
			const [x2, y2] = parts[i].split(',').map(n => parseInt(n))
			const largerY = Math.max(y1, y2)
			maxY = Math.max(largerY, maxY)
			if (x1 === x2) {
				let curr = Math.min(y1, y2)
				const max = Math.max(y1, y2)
				while (curr <= max) {
					set.add(x1+','+curr++)
				}
			} else {
				let curr = Math.min(x1, x2)
				const max = Math.max(x1, x2)
				while (curr <= max) {
					set.add(curr++ +','+y1)
				}
			}
		}
	})
	let count = 0
	while (true) {
		let x = 500
		let y = 0
		while (true) {
			if (y === maxY+1) {
				set.add(x+','+y)
                                count++
                                break
			}
			if (!set.has(x+','+(y+1))) y++
			else if (!set.has(x-1+','+(y+1))) {
				y++
				x--
			} else if (!set.has(x+1+','+(y+1))) {
				y++
				x++
			} else {
				set.add(x+','+y)
				count++
				if (x === 500 && y === 0) return count
				break
			}
		}
	}
}

console.log(solve())
