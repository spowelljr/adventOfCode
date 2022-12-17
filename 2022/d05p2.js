const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	const numOfStacks = (lines[0].length+1)/4
	const stacks = new Array(numOfStacks)
	for (let i = 0; i < stacks.length; i++) {
		stacks[i] = new Array()
	}
	let i = 0
	for (; i < lines.length; i++) {
		const line = lines[i]
		if (line[1] === '1') break
		for (let j = 1; j < line.length; j += 4) {
			const crate = line[j]
			if (crate === ' ') continue
			const stack = (j-1)/4
			stacks[stack].unshift(crate)
		}
	}
	i += 2
	for (; i < lines.length; i++) {
		const line = lines[i]
		const partsOfLine = line.split(' ')
		const numToMove = parseInt(partsOfLine[1])
		const from = parseInt(partsOfLine[3])-1
		const to = parseInt(partsOfLine[5])-1
		const tmp = []
		for (let j = 0; j < numToMove; j++) {
			const crate = stacks[from].pop()
			tmp.push(crate)
		}
		while (tmp.length) {
			stacks[to].push(tmp.pop())
		}
	}
	let topOfEach = ''
	stacks.forEach(stack => {
		if (!stack.length) return
		topOfEach += stack.pop()
	})
	return topOfEach
}

console.log(solve())
