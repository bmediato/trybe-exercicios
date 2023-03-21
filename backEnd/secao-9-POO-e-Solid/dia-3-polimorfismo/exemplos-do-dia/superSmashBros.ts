abstract class Character {
  abstract talk(): void;
  abstract specialMode(): void;
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('Olá kiki');
  }

  specialMode(): void {
    console.log('Voando');
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('Buenos dias');
  }

  specialMode(): void {
    console.log('super visão');
  }
}