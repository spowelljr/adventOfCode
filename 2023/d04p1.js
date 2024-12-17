const { readLines } = require('../input')

const solve = () => {
        const lines = readLines()
	let sum = 0
	lines.forEach(line => {
		const nums = line.replaceAll(/Card *[0-9]*: /g, '')
		let [winning, your] = nums.split('|')
		winning = winning.replaceAll(/  /g, ' ').trim().split(' ')
		your = your.replaceAll(/  /g, ' ').trim().split(' ')
		const set = new Set()
		winning.forEach(num => set.add(parseInt(num)))
		let card = 0
		your.forEach(num => {
			if (set.has(parseInt(num))) card = card === 0 ? 1 : card * 2
		})
		sum += card
	})
	return sum
}

console.log(solve())
