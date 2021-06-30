import { sum } from '../src'

describe('add', () => {
  test('2 + 5 가 7이 나온다.', () => {
    expect(sum(2, 5)).toEqual(7)
  })
})

describe('add', () => {
  test('2 + 5 + 10 이 17이 나온다.', () => {
    expect(sum(2, 5)).toEqual(7)
  })
})

describe('add', () => {
  test('1~10을 다 더하면 55가 나온다.', () => {
    expect(sum(...[...Array(11).keys()])).toEqual(55)
  })
})
