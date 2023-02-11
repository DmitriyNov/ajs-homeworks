import Character from './character';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}
