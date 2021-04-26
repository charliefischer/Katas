time = seconds => {
  let s = 0
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
  return `0${h}:0${m}:0${s}`
}

module.exports = time