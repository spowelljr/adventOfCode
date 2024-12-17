const { readLines } = require('../input')

const solve = () => {
        const lines = readLines()
	let sum = 0
	const map = new Map()
	lines.forEach((line, i) => {
		const nums = line.replaceAll(/Card *[0-9]*: /g, '')
		let [winning, your] = nums.split('|')
		winning = winning.replaceAll(/  /g, ' ').trim().split(' ')
		your = your.replaceAll(/  /g, ' ').trim().split(' ')
		const set = new Set()
		winning.forEach(num => set.add(parseInt(num)))
		let card = []
		your.forEach(num => {
			if (set.has(parseInt(num))) card.push(parseInt(num))
		})
		map.set(i+1, card)
	})
	const dp = new Map()
	for (let i = 1; i <= 6; i++) {
		if (dp.has(i)) {
			sum += dp.get(i)
			continue
		}
		const total = getTotal(dp, map.get(i), map)
		dp.set(i, total)
		sum += total
	}
	return sum
}

console.log(solve())
