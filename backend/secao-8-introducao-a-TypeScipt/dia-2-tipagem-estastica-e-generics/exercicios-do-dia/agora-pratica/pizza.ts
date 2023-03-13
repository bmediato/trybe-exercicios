type Slices = 4 | 6 | 8;
type Common = 'Calabresa' | 'Frango' | 'Pepperoni';
type Vegetarian = 'Marguerita' | 'Palmito' | 'Cogumelos';
type Sugar = 'Nutella' | 'Goiabada com Queijo' | 'Marshmallow';


interface Pizza {
  flavor: string;
  slices: Slices;
}

interface PizzaComum extends Pizza {
  flavor: Common
}

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}

interface PizzaSugar extends Pizza {
  flavor: Sugar
  slices: 4
}

export {
  Pizza,
  PizzaComum,
  PizzaVegetarian,
  PizzaSugar
};