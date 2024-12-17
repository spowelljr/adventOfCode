const { readLines } = require('../input')

const solve = () => {
        const lines = readLines()
        let sum = 0
        lines.forEach(line => { 
                const arr = line.split(' ')
		let curr = parseInt(arr[0])
		let badLevel = false
		let growing, shrinking = 0
		for (let i = 1; i < arr.length; i++) {
			const next = parseInt(arr[i])
			if (Math.abs(curr - next) > 3 || curr === next) {
                                if (badLevel) {
                                        return                                                                                                                                                                                                                                       }
                                badLevel = true
                                continue
                        }

			if (curr < next) {
				growing++
				if (growing === 1 && shrinking > 0) {
					if (badLevel) {
						return
					}
					badLevel = true
				}
			} else {
				shrinking++
				if (shrinking === 1 && growing > 0) {
					if (badLevel) {
						return
					}
					badLevel = true
				}
			}
			if (growing > 1 && shrinking > 1) {
				return
			}
			curr = next
		}
		sum++
        })
        return sum
}

console.log(solve())
