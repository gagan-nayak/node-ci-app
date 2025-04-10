const add = require('./app');

test('adds 2 + 3 + 5 to equal 10', () => {
  expect(add(2, 3, 5)).toBe(10);
});

test('adds 8 + 3 + 4 to equal 15', () => {
  expect(add(8, 3, 4)).toBe(15);
});

test('adds 2 + 6 + 5 to equal 13', () => {
  expect(add(2, 6, 5)).toBe(13);
});
