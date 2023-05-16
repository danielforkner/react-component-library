const sum = (a: number, b: number): number => {
  return a + b;
};

test('sum adds', () => {
  expect(sum(1, 1)).toBe(2);
});
