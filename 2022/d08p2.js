const { readLines } = require('../input')

const solve = () => {
	const lines = readLines()
	let maxCount = 0
	const rows = lines.map(line => line.split('').map(n => parseInt(n)))
	for (let i = 0; i < rows.length; i++) {
		for (let j = 0; j < rows[0].length; j++) {
			const value = rows[i][j]
			let count = 1
			let k = i-1
			let count2 = 0
			while (k >= 0) {
				const val2 = rows[k][j]
				count2++
				k--
				if (val2 >= value) break
			}
			count *= count2
			k = i+1
			count2 = 0
			while (k < rows.length) {
                                const val2 = rows[k][j]
                                count2++
				k++
                                if (val2 >= value) break
                        }
			count *= count2
			k = j-1
                        count2 = 0
                        while (k >= 0) {
                                const val2 = rows[i][k]
                                count2++
				k--
                                if (val2 >= value) break
                        }
			count *= count2
			k = j+1
                        count2 = 0
                        while (k < rows[i].length) {
                                const val2 = rows[i][k]
                                count2++
				k++
                                if (val2 >= value) break
                        }
			count *= count2
			maxCount = Math.max(maxCount, count)
		}
	}
	return maxCount
}

console.log(solve())
