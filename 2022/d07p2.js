const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	const dirTotals = new Map()
	const pwd = []
	lines.forEach(line => {
		const parts = line.split(' ')
		if (parts[0] === 'dir') return
		if (parts[0] === '$') {
			if (parts[1] === 'ls') return
			if (parts[2] === '..') {
				const dirTotal = dirTotals.get(pwd.join('')) || 0
				pwd.shift()
				const parentTotal = dirTotals.get(pwd.join('')) || 0
				dirTotals.set(pwd.join(''), parentTotal + dirTotal)
			}
			else pwd.unshift(parts[2])
		} else {
			const currTotal = dirTotals.get(pwd.join('')) || 0
			const value = parseInt(parts[0])
			dirTotals.set(pwd.join(''), currTotal + value)
		}
	})
	while (pwd.length) {
		const dirTotal = dirTotals.get(pwd.join('')) || 0
                pwd.shift()
                const parentTotal = dirTotals.get(pwd.join('')) || 0
                dirTotals.set(pwd.join(''), parentTotal + dirTotal)
	}
	const totalUsed = dirTotals.get('/')
	const requiredToDelete = totalUsed - 40000000
	let min = totalUsed
	dirTotals.forEach(value => {
		if (value < requiredToDelete) return
		min = Math.min(min, value)
	})
	return min
}

console.log(solve())
