import fetchData from '../js/http';
import getLevel from '../js/mocking';

jest.mock('../js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Testing the getLevel function without response', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});

test('Testing the getLevel function with response', () => {
  fetchData.mockReturnValue(JSON.stringify({ status: 'ok', level: 80 }));
  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 80');
});
