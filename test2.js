function findMinMax(arr) {
  console.time()
  let sum = 0
  let minNumber = Infinity
  let maxNumber = 0
  arr.forEach((element) => {
    sum += element
    minNumber = Math.min(minNumber, element)
    maxNumber = Math.max(maxNumber, element)
  })

  const minValue = sum - maxNumber
  const maxValue = sum - minNumber
  return [minValue, maxValue]
}

function splitWords(s) {
  return s == '' ? [] : s.split(' ')
}

function* main() {
  const arr = splitWords(yield).map((v) => parseInt(v))
  const res = findMinMax(arr)
  console.log(res.join(' '))
  console.timeEnd()
}

const gen = main()
const next = (line) => gen.next(line).done && process.exit()
let buf = ''
next()
process.stdin.setEncoding('utf8')
process.stdin.on('data', (data) => {
  const lines = (buf + data).split('\n')
  buf = lines.pop()
  lines.forEach(next)
})
process.stdin.on('end', () => {
  buf && next(buf)
})
