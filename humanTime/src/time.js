time = seconds => {
  if(seconds < 10) {
    return '00:00:0' + seconds
  }
  if(seconds < 60) {
    return '00:00:' + seconds
  }
  return '00:01:00'
}

module.exports = time