const { readLines } = require('../input')

const max = 4000000

const solve = () => {
	const lines = readLines()
	const inputs = lines.map(line => {
		let parts = line.replaceAll(/[a-zA-Z ,:]/g, '').split('=')
		parts.shift()
		parts = parts.map(n => parseInt(n))
		const dist = getDistance(parts[0], parts[1], parts[2], parts[3])
		return {
			x: parts[0],
			y: parts[1],
			dist
		}
	})
	for (let i = 0; i < inputs.length; i++) {
		const {x, y, dist} = inputs[i]
		for (let j = 0; j <= dist; j++) {
			const reach = dist - j + 1
			isAnswer(inputs, x+j, y+reach)
			isAnswer(inputs, x+j, y-reach)
			isAnswer(inputs, x-j, y+reach)
			isAnswer(inputs, x-j, y-reach)
		}
	}
}

const isAnswer = (inputs, x, y) => {
	if (!isValid(x)) return
	if (!isValid(y)) return
	for (let i = 0; i < inputs.length; i++) {
		const input = inputs[i]
		const distToSensor = getDistance(x, y, input.x, input.y)
		if (distToSensor <= input.dist) return
	}
	console.log(x*4000000+y)
}

const getDistance = (x1, y1, x2, y2) => {
        const minX = Math.min(x1, x2)
        const maxX = Math.max(x1, x2)
        const distanceX = maxX - minX
        const minY = Math.min(y1, y2)
        const maxY = Math.max(y1, y2)
        const distanceY = maxY - minY
        return distanceX + distanceY
}

const isValid = num => num >= 0 && num <= max
