time = seconds => {
  let s = (0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  let m = 0
  let h = 0

  for(let i = 0; i < seconds; i++){
    if(s >= 59){
      s = 0
      if(m >= 59) {
        m = 0
        h++
      } else {
        m++
      }
    } else {
      s++
    }
  }
  // (6).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  let secs = (s).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  let mins = (m).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  let hrs = (h).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

  return `${hrs}:${mins}:${secs}`
}

module.exports = time