const time = require('../src/time')

describe('seconds', () => {
  test('1 second returns 00:00:01', () => {
    expect(time(1)).toEqual('00:00:01')
  })
  test('2 seconds returns 00:00:02', () => {
    expect(time(2)).toEqual('00:00:02')
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
  test('3601 returns 01:00:01', () => {
    expect(time(3601)).toEqual('01:00:01')
  })
  test('3611 returns 01:00:11', () => {
    expect(time(3611)).toEqual('01:00:11')
  })
})