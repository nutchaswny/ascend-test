const findPairNumber = (nums, input) => {
  const diffToNumHashmap = new Map()
  const result = []

  nums.forEach((num) => {
    if (diffToNumHashmap.has(num)) {
      result.push(`${num}+${diffToNumHashmap.get(num)}`)
    }
    const diff = input - num
    diffToNumHashmap.set(diff, num)
  })

  console.log(`expected result >>>>> ${result.join(',')}`)
}

console.time()
const nums = [1, 2, 3, 4, 5]
findPairNumber(nums, 7)
console.timeEnd()
