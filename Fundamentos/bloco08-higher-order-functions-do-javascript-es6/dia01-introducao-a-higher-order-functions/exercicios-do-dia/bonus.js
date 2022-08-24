const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragao = () => {
  let dano = dragon.strength;
  let danoAlet = Math.floor((Math.random() * dano) + 15);
  return danoAlet;
}

const danoWarrior = () => {
  let danoMin = warrior.strength;
  let danoMax = danoMin * dano.weaponDmg;
  let danoAlet = Math.floor((Math.random() * danoMax) + danoMin);
  return danoAlet;
}

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    mageDmg = minDmg < maxDmg ? maxDmg : minDmg
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

const gameActions = {
  
};