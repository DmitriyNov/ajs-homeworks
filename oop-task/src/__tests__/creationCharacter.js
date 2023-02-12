import Bowman from '../js/bowman';
import Swordsman from '../js/swordsman';
import Magician from '../js/magicain';
import Daemon from '../js/daemon';
import Undead from '../js/undead';
import Zombie from '../js/zombie';

test('Testing the creation of class instances', () => {
  // Имена персонажей взяты с рандомайзера https://randomall.ru/fantasy_name
  const bowman = new Bowman('Исьа');
  const swordsman = new Swordsman('Стиенс');
  const magicain = new Magician('Трастронун');
  const daemon = new Daemon('Еран');
  const undead = new Undead('Гагаллим');
  const zombie = new Zombie('Бертрам');
  const result = [bowman, swordsman, magicain, daemon, undead, zombie];
  expect(result).toEqual([
    {
      name: 'Исьа', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
    },
    {
      name: 'Стиенс', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
    },
    {
      name: 'Трастронун', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
    },
    {
      name: 'Еран', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
    },
    {
      name: 'Гагаллим', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
    },
    {
      name: 'Бертрам', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
    },
  ]);
});

test('Testing an illiquid name', () => {
  function result() {
    const test = new Bowman('1');
  }
  expect(result).toThrow(new Error('Имя не соответствует условиям (длинна от 2 до 10 символов)'));
});

test('Testing an illiquid type', () => {
  function result() {
    const test = new Bowman('Исьа', 'Barbarian');
  }
  expect(result).toThrow(new Error('Задан несуществующий тип персонажа'));
});
