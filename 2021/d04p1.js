const { readLines } = require('../../input')

const solve = () => {
	const input = readLines()
	const callNums = input[0].split(',').map(n => parseInt(n))

	const cards = []
	let card = new Map()
	card.set('rows', [0,0,0,0,0])
	card.set('columns', [0,0,0,0,0])
	let row = 0
	let count = 0
	for (let i = 2; i <= input.length; i++) {
		const line = input[i] || ''
		if (!line.length) {
			card.set('count', count)
			cards.push(card)
			card = new Map()
			card.set('rows', [0,0,0,0,0])
        		card.set('columns', [0,0,0,0,0])
			row = 0
			count = 0
			continue
		}
		const nums = line.split(' ')
		let column = 0
		for (let j = 0; j < nums.length; j++) {
			const curr = nums[j]
			if (!curr.length) continue
			const num = parseInt(curr)
			count += num
			card.set(num, {row: row, column: column})
			column++
		}
		row++
	}

	for (let i = 0; i < callNums.length; i++) {
		const num = callNums[i]
		for (let j = 0; j < cards.length; j++) {
			const curr = cards[j]
			if (!curr.has(num)) continue
			let currCount = curr.get('count')
			currCount -= num
			const cords = curr.get(num)
			const currRow = curr.get('rows')
			const currColumn = curr.get('columns')
			if (++currRow[cords.row] === 5) return currCount*num
			if (++currColumn[cords.column] === 5) return currCount*num
			curr.set('count', currCount)
			curr.set('rows', currRow)
			curr.set('columns', currColumn)
		}
	}
}

console.log(solve())
