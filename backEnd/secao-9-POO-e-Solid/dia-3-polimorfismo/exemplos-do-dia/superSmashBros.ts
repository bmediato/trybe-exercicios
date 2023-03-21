abstract class Character {
  abstract talk(): void;
  abstract specialMode(): void;
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
  talk(): void {
    console.log(`Olá, eu sou ${this._name}`);
  }

  specialMode(): void {
    console.log(`${this._name} used ${this._specialMoveName}`);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _sprecialMoveName: string) {
    super()
  }
  talk(): void {
    console.log(`Olá, eu sou ${this._name}`);
  }

  specialMode(): void {
    console.log(`${this._name} used ${this._sprecialMoveName}`);
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

console.log(yoshi.talk());
console.log(yoshi.specialMode());

console.log(samus.specialMode());
console.log(samus.talk());