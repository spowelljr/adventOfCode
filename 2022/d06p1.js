const { readLines } = require('../input')

const solve = () => {
	const line = readLines()[0]
	const unique = []
	const set = new Set()
	for (let i = 0; i < line.length; i++) {
		const char = line[i]
		if (!set.has(char)) {
			set.add(char)
			unique.push(char)
			if (unique.length === 4) return i+1
			continue
		}
		while (set.has(char)) {
			const removed = unique.shift()
			set.delete(removed)
		}
		set.add(char)
		unique.push(char)
	}
}

console.log(solve())
