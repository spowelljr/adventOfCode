const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let totalSum = 0
	const dirTotals = new Map()
	const pwd = []
	lines.forEach(line => {
		const parts = line.split(' ')
		if (parts[0] === 'dir') return
		if (parts[0] === '$') {
			if (parts[1] === 'ls') return
			if (parts[2] === '..') {
				const dirTotal = dirTotals.get(pwd.join('')) || 0
				if (dirTotal <= 100000) totalSum += dirTotal
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
                if (dirTotal <= 100000) totalSum += dirTotal
                pwd.shift()
                const parentTotal = dirTotals.get(pwd.join('')) || 0
                dirTotals.set(pwd.join(''), parentTotal + dirTotal)
	}
	return totalSum
}

console.log(solve())
