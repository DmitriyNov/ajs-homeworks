import Bowman from '../js/bowman';

test('Testing damage function', () => {
  const bowman = new Bowman('Исьа');
  bowman.damage(20);
  expect(bowman).toEqual({
    name: 'Исьа',
    type: 'Bowman',
    health: 85,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Testing the damage function on a character with health 0', () => {
  function result() {
    const bowman = new Bowman('Исьа');
    bowman.damage(200);
    bowman.damage(1);
  }
  expect(result).toThrow(new Error('Нельзя атаковать умершего'));
});
