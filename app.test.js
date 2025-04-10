const add = require('./app');

test('adds 2 + 3 + 5 to equal 10', () => {
  expect(add(2, 3, 5)).toBe(10);
});
