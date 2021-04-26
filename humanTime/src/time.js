time = seconds => {
  let hrs = parseInt((seconds / 3600)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  let mins = parseInt(((seconds / 60) % 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  let secs = parseInt((seconds % 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

  return `${hrs}:${mins}:${secs}`
}

module.exports = time