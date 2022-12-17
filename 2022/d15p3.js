const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	const set = new Set()
	const inputs = lines.map(line => {
		const parts = line.replaceAll(/[a-zA-Z ,:]/g, '').split('=')
		set.add(parseInt(parts[1])+','+parseInt(parts[2]))
		set.add(parseInt(parts[3])+','+parseInt(parts[4]))
		return {
			sX: parseInt(parts[1]),
			sY: parseInt(parts[2]),
			bX: parseInt(parts[3]),
			bY: parseInt(parts[4])
		}
	})
	const max = 4000000
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
			const left = sX - reach
			const right = sX + reach
			set.add(left+','+upY)
			set.add(right+','+upY)
			set.add(left+','+downY)
                        set.add(right+','+downY)
		}
	})
	for (let i = 0; i <= max; i++) {
		for (let j = 0; j <= max; j++) {
			if (!set.has(i-1+','+j)) continue
                        if (!set.has(i+1+','+j)) continue
                        if (!set.has(i+','+(j-1))) continue
                        if (!set.has(i+','+(j+1))) continue
			console.log(set.has('7,15'))
			console.log(set.has('9,15'))
			console.log(set.has('8,14'))
			console.log(set.has('8,16'))
			return i*4000000+j
		}
	}
}

console.log(solve())
