const time = require('../src/time')

describe('seconds', () => {
  test('1 second returns 00:00:01', () => {
    expect(time(1)).toEqual('00:00:01')
  })
})