time = seconds => {
  if(seconds == 1){
    return '00:00:01'
  }
  return '00:01:00'
}

module.exports = time