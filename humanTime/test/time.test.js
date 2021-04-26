const time = require('../src/time')

describe('seconds', () => {
  test('1 second returns 00:00:01', () => {
    expect(time(1)).toEqual('00:00:01')
  })
})

describe('minutes', () => {
  test('60 returns 00:01:00', () => {
    expect(time(60)).toEqual('00:01:00')
  })
})

describe('hours', () => {
  test('3600 returns 01:00:00', () => {
    expect(time(3600)).toEqual('01:00:00')
  })
})