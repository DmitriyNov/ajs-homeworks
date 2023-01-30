import showHealthStatus from '../js/clear';

const dataList = [
  [90, { name: 'Маг', health: 90 }, 'healthy'],
  [30, { name: 'Лучник', health: 30 }, 'wounded'],
  [10, { name: 'Мечник', health: 10 }, 'critical'],
];

const handler = test.each(dataList);

handler('Testing the showHealthStatus function with %i healths', (value, input, expected) => {
  const result = showHealthStatus(input);
  expect(result).toBe(expected);
});
