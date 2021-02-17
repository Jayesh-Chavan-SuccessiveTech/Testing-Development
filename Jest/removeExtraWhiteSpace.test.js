const removeWhiteSpace = require('./removeExtraWhiteSpace');

test('test on 0', () => {
  expect(removeWhiteSpace).toBeDefined();
})

test('test no 1', () => {
  expect(removeWhiteSpace('I   am jayesh')).toEqual('I am jayesh');
})

test('test no 2', () => {
  expect(removeWhiteSpace('I am jayesh')).toEqual('I am jayesh');
})

test('test no 3', () => {
  expect(removeWhiteSpace('  I am  jayesh')).toEqual('I am jayesh');
})