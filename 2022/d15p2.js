const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	const max = 4000000
	const set = new Array(max)
	for (let i = 0; i <= max; i++) {
		set[i] = new Array(max).fill(false)
	}
	const inputs = lines.map(line => {
		const parts = line.replaceAll(/[a-zA-Z ,:]/g, '').split('=')
		set[parseInt(parts[1])][parseInt(parts[2])] = true
		set[parseInt(parts[3])][parseInt(parts[4])] = true
		return {
			sX: parseInt(parts[1]),
			sY: parseInt(parts[2]),
			bX: parseInt(parts[3]),
			bY: parseInt(parts[4])
		}
	})
	inputs.forEach(n => {
		const {sX, sY, bX, bY} = n
		const minX = Math.min(sX, bX)
		const maxX = Math.max(sX, bX)
		const distanceX = maxX - minX
		const minY = Math.min(sY, bY)
                const maxY = Math.max(sY, bY)
                const distanceY = maxY - minY
		const distance = distanceX + distanceY
		for (let j = 0; j <= distance; j++) {
			const upY = sY - j
			const downY = sY + j
			const reach = distance - j
			for (let i = 0; i <= reach; i++) {
				const left = sX - i
				const right = sX + i
				set[left][upY] = true
                                set[right][upY] = true
			}
			for (let i = 0; i <= reach; i++) {
                                const left = sX - i
                                const right = sX + i
                                set[left][downY] = true
                                set[right][downY] = true
                        }
		}
	})
	for (let i = 0; i <= max; i++) {
		for (let j = 0; j <= max; j++) {
			if (set[i][j] === true) continue
			return i*max+j
		}
	}
}

console.log(solve())
