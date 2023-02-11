import Bowman from '../js/bowman';

test('Testing levelUp function', () => {
  const bowman = new Bowman('Исьа');
  bowman.levelUp();
  expect(bowman).toEqual({
    name: 'Исьа',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('Testing the damage function on a character with health 0', () => {
  function result() {
    const bowman = new Bowman('Исьа');
    bowman.damage(200);
    bowman.levelUp();
  }
  expect(result).toThrow(new Error('Нельзя повысить уровень умершего'));
});
