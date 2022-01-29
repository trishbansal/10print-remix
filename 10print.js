/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"

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

//rn i have 0, 01, 012 
// i need mid, mid-1 mid mid +1 etc 