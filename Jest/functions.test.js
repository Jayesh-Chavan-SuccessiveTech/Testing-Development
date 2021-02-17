const functions = require('./functions');

test('should add', () => {
  expect(functions.add(2,4)).toBe(6)
})

test('should be null', () => {
  expect(functions.isNull()).toBeNull()
})

test('shold be falsy', () => {
  expect(functions.isfalsy(false)).toBeFalsy()
})

test('fetching user', async () => {
  expect.assertions(1);
  const data =  await functions.fetchUser()
  expect(data.id).toEqual(1)
})