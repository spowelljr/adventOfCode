const { readLines } = require('./input')

const solve = () => {
	const input = readLines()
	let count = 0
	for (let i = 0; i < input.length; i++) {
		const line = input[i]
		const stack = []
		for (let j = 0; j < line.length; j++) {
			const curr = line[j]
			if (isOpening(curr)) {
				stack.push(curr)
				continue
			}
			if (isMatching(stack.pop(), curr)) continue
			count += getPoints(curr)
			break
		}
	}
	return count
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
		case ')':
			return 3
		case ']':
			return 57
		case '}':
			return 1197
		case '>':
			return 25137
	}
}

console.log(solve())

