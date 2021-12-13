const { readLines } = require('../../input')

const getCommonBits = input => {
	const val = new Array(input[0].length).fill(0)
        for (let i = 0; i < input.length; i++) {
                const curr = input[i].split('')
                for (let j = 0; j < curr.length; j++) {
                        const c = curr[j] === '0' ? -1 : 1
                        val[j] += c
                }
        }
        let first = ''
        let second = ''
        for (let i = 0; i < val.length; i++) {
                first += val[i] >= 0 ? '1' : '0'
                second += val[i] >= 0 ? '0' : '1'
        }
	return [first, second]
}

const solve = () => {
	const input = readLines()
	const input2 = [...input]
	for (let i = 0; input2.length != 1; i++) {
		const first = getCommonBits(input2)[0]
		for (let j = 0; j < input2.length; j++) {
			const curr = input2[j]
			if (first[i] === curr[i]) continue
			input2.splice(j, 1)
			i--
		}
	}
	const input3 = [...input]
	for (let i = 0; input3.length != 1; i++) {
		const second = getCommonBits(input3)[1]
		for (let j = 0; j < input3.length; j++) {
		        const curr = input3[j]
                        if (second[i] === curr[i]) continue
                        input3.splice(j, 1)
		        j--
		}
	}
	const a = parseInt(input2[0], 2)
	const b = parseInt(input3[0], 2)
	return a*b
}

console.log(solve())
