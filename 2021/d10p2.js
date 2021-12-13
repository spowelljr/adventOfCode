const { readLines } = require('./input')

const solve = () => {
	const input = readLines()
	let counts = []
	for (let i = 0; i < input.length; i++) {
		const line = input[i]
		const stack = []
		let corrupt = false
		for (let j = 0; j < line.length; j++) {
			const curr = line[j]
			if (isOpening(curr)) {
				stack.push(curr)
				continue
			}
			if (!isMatching(stack.pop(), curr)) {
				corrupt = true
				break
			}
		}
		if (corrupt) continue
		counts.push(processStack(stack))
	}
	counts.sort((a,b) => a-b)
	const mid = Math.floor(counts.length/2)
	return counts[mid]
}

const isOpening = (c) => {
	switch (c) {
		case '(':
		case '[':
		case '{':
		case '<':
			return true
	}
	return false
}

const isMatching = (o, c) => {
        switch (o) {
                case '(':
			return c === ')'
                case '[':
			return c === ']'
                case '{':
			return c === '}'
                case '<':
                        return c === '>'
        }
        return false
}

const getPoints = (c) => {
	switch (c) {
		case '(':
			return 1
		case '[':
			return 2
		case '{':
			return 3
		case '<':
			return 4
	}
}

const processStack = stack => {
	let count = 0
	while (stack.length) {
		count *= 5
		count += getPoints(stack.pop())
	}
	return count
}

console.log(solve())

