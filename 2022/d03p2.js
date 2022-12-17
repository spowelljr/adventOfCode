const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let total = 0
	for (let i = 0; i < lines.length; i += 3) {
		const map = new Map()
		for (let j = 0; j < 3; j++) {
			const set = new Set()
			const index = i+j
			const line = lines[index]
			for (let k = 0; k < line.length; k++) {
				set.add(line[k])
			}
			set.forEach(value => {
				if (!map.has(value)) {
                                        map.set(value, 1)
					return
                                }
                                const curr = map.get(value)
                                if (curr !== 2) {
					map.set(value, 2)
					return
				}
				if (value.toUpperCase() === value) total += value.charCodeAt(0) - 38
                        	else total += value.charCodeAt(0) - 96
			})
		}
	}
	return total
}

console.log(solve())
