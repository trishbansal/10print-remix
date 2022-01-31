/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const sw = process.stdout.columns
let w = 0
const cols = ["\x1b[31m", "\x1b[32m", "\x1b[33m", "\x1b[34m", "\x1b[35m", "\x1b[36m", "\x1b[37m"]
function draw () {
  setTimeout(draw, 1000/12)
  let r = Math.random() * cols.length
  r = Math.floor(r)
  let output = cols[r]
  let i = 0
  while (i < (process.stdout.columns / 2) - w) {
    if (Math.random() > 0.5) {
      output += '╣'
    } else {
      output += '╗'
    }
    i++
  }
  while (i < (process.stdout.columns / 2) + w) {
    output += ' '
    i+=1
  }
  while (i < process.stdout.columns) {
    if (Math.random() > 0.5) {
      output += '╠'
    } else {
      output += '╚'
    }
    i++
  }
  console.log(output)
  if (w >= sw /2) {
    w = 0
  } else {
    w++
  }
}

draw()