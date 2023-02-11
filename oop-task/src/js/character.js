export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя не соответствует условиям (длинна от 2 до 10 символов)');
    }
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health < 1) {
      throw new Error('Нельзя повысить уровень умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health < 1) {
      throw new Error('Нельзя атаковать умершего');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
