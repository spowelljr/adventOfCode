const { readLines } = require('../input')

const solve = () => {
        const lines = readLines()
        let sum = 0
        lines.forEach(line => { 
                const arr = line.split(' ')
		let curr = parseInt(arr[0])
		const growing = parseInt(arr[1]) - curr > 0
		for (let i = 1; i < arr.length; i++) {
			const next = parseInt(arr[i])
			if (growing && next < curr) {
				return
			}
			if (!growing && next > curr) {
				return
			}
			if (Math.abs(curr - next) > 3 || curr === next) {
				return
			}
			curr = next
		}
		sum++
        })
        return sum
}

console.log(solve())
