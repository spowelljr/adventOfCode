const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	const map = new Map()
	const valvesToOpen = new Set()
	lines.forEach(n => {
		n = n.substring(1)
		n = n.replaceAll(/[a-z ]/g, '')
		n = n.replaceAll(/[;=]/g, ',')
		const parts = n.split(',')
		const key = parts.shift()
		const value = {
			flow: parseInt(parts.shift()),
			rooms: parts
		}
		if (value.flow > 0) valvesToOpen.add(key)
		map.set(key, value)
	})
	let totalPressure = 0
	let pressurePerMin = 0
	let position = 'AA'
	for (let i = 1; i <= 30; i++) {
		console.log(i, position, pressurePerMin)
		console.log(totalPressure)
		totalPressure += pressurePerMin
		if (valvesToOpen.length === 0) continue
		let max = 0
		let maxFlow = 0
		let maxValve = ''
		let maxDist = 0
		valvesToOpen.forEach(curr => {
			const {flow} = map.get(curr)
			const dist = findMinDistance(position, curr, map)
			const flowTilEnd = (30 - i - dist - 1) * flow
			if (flowTilEnd > max) {
				max = flowTilEnd
				maxFlow = flow
				maxDist = dist
				maxValve = curr
			}
		})
		i += maxDist
		valvesToOpen.delete(maxValve)
		totalPressure += (maxDist - 1) * pressurePerMin
		pressurePerMin += maxFlow
		position = maxValve
	}
	return totalPressure
}

const findMinDistance = (origin, dest, map) => {
	const queue = [[origin, 0]]
	const visited = new Set()
	while (true) {
		const [curr, count] = queue.shift()
		if (visited.has(curr)) continue
		visited.add(curr)
		const val = map.get(curr)
		const {flow, rooms} = val
		if (rooms.includes(dest)) return count+1
		for (let i = 0; i < rooms.length; i++) {
			queue.push([rooms[i], count+1])
		}
	}
}

console.log(solve())
