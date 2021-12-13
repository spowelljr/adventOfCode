const { readLines } = require('../input')

const solve = () => {
	const input = readLines()
	const map = new Map()
	for (let i = 0; i < input.length; i++) {
		const [p1, p2] = input[i].split('-')
		add(map, p1, p2)
		add(map, p2, p1)
	}
	return traverse(map)
}

const add = (map, p1, p2) => {
	if (p2 === 'start') return
	const existing = map.get(p1) || []
	existing.push(p2)
	map.set(p1, existing)
}

const traverse = map => {
	const start = map.get('start')
	let count = 0
	for (let i = 0; i < start.length; i++) {
		count += followPath(map, [start[i]])
	}
	return count
}

const followPath = (map, path) => {
	const curr = map.get(path[0])
	let count = 0
	for (let i = 0; i < curr.length; i++) {
		const next = curr[i]
		if (next === 'end') {
			count += 1
			continue
		}
		if (next === next.toLowerCase() && path.includes(next)) continue
		const copy = [...path]
		copy.unshift(next)
		count += followPath(map, copy)
	}
	return count
}

console.log(solve())
