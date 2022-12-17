const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	const set = new Set()
	const inputs = lines.map(line => {
		const parts = line.replaceAll(/[a-zA-Z ,:]/g, '').split('=')
		set.add(parseInt(parts[3])+','+parseInt(parts[4]))
		return {
			sX: parseInt(parts[1]),
			sY: parseInt(parts[2]),
			bX: parseInt(parts[3]),
			bY: parseInt(parts[4])
		}
	})
	let count = 0
	const row = 2000000
	inputs.forEach(n => {
		const {sX, sY, bX, bY} = n
		const minX = Math.min(sX, bX)
		const maxX = Math.max(sX, bX)
		const distanceX = maxX - minX
		const minY = Math.min(sY, bY)
                const maxY = Math.max(sY, bY)
                const distanceY = maxY - minY
		const distance = distanceX + distanceY
		if (sY + distance < row) return
		const distanceToY = Math.abs(row - sY)
		const reach = distance - distanceToY
		for (let i = 0; i <= reach; i++) {
			const left = sX - i
			const right = sX + i
			if (!set.has(left+','+row)) {
				count++
				set.add(left+','+row)
			}
			if (!set.has(right+','+row)) {
                                count++
                                set.add(right+','+row)
                        }
		}
	})
	return count
}

console.log(solve())
