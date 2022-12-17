const { readLines } = require('../input')

const solve = () => {
	let total = 0
	const lines = readLines().map(i => {
		const values = i.split(' ')
		const opp = values[0]
		const me = values[1]
		total += outcomeValue(me)
		total += tieValue(opp, me)
		total += loseValue(opp, me)
		total += winValue(opp, me)
	})
	return total
}

const outcomeValue = shape => {
	if (shape === 'X') return 0
	if (shape === 'Y') return 3
	return 6
}

const tieValue = (opp, me) => {
	if (me !== 'Y') return 0
	switch (opp) {
		case 'A':
			return 1
		case 'B':
			return 2
		case 'C':
			return 3
	}
}

const loseValue = (opp, me) => {
	if (me !== 'X') return 0
	switch (opp) {
		case 'A':
			return 3
		case 'B':
			return 1
		case 'C':
			return 2
	}
}

const winValue = (opp, me) => {
	if (me !== 'Z') return 0
	switch (opp) {
		case 'A':
			return 2
		case 'B':
			return 3
		case 'C':
			return 1
	}
}

console.log(solve())
