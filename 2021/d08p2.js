const { readLines } = require('../input')

const getNumber = (map, length, digit, match) => {
	const vals = map.get(length)
	if (vals.length === 1) return vals[0]
	for (let i = 0; i < vals.length; i++) {
		const curr = vals[i]
		let matches = 0
		for (let j = 0; j < digit.length; j++) {
			if (curr.includes(digit[j])) matches++
		}
		if (matches !== match) continue
		vals.splice(i, 1)
		map.set(length, vals)
		return curr
	}
}

const getDigit = (numbers, digit) => {
	for (let i = 0; i < numbers.length; i++) {
		const num = numbers[i]
		if (num.length !== digit.length) continue
		for (let j = 0; j < num.length; j++) {
			if (!digit.includes(num[j])) break
			if (j+1 === num.length) return i
		}
	}
}

const solve = () => {
	const input = readLines()
	let count = 0
	for (let i = 0; i < input.length; i++) {
		const line = input[i].split(' | ')
		const signals = line[0].split(' ')
		const lengths = new Map()
		for (let j = 0; j < signals.length; j++) {
			const curr = signals[j]
			const thing = lengths.get(curr.length) || []
			thing.push(curr)
			lengths.set(curr.length, thing)
		}
		const output = line[1].split(' ')
		const numbers = new Array(10)
		numbers[1] = lengths.get(2)[0]
		numbers[7] = lengths.get(3)[0]
		numbers[4] = lengths.get(4)[0]
		numbers[8] = lengths.get(7)[0]
		numbers[6] = getNumber(lengths, 6, numbers[1], 1)
		numbers[0] = getNumber(lengths, 6, numbers[4], 3)
		numbers[9] = getNumber(lengths, 6, numbers[4], 4)
		numbers[2] = getNumber(lengths, 5, numbers[4], 2)
		numbers[3] = getNumber(lengths, 5, numbers[1], 2)
		numbers[5] = getNumber(lengths, 5, numbers[1], 1)
		const ddd = line[1].split(' ')
		let d = ''
		d += getDigit(numbers, ddd[0])
		d += getDigit(numbers, ddd[1])
		d += getDigit(numbers, ddd[2])
		d += getDigit(numbers, ddd[3])
		count += parseInt(d)
	}
	return count
}

console.log(solve())

