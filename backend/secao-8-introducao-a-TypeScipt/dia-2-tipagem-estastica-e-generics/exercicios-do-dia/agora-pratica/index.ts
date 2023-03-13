// classe Car
import Car from './car';
import { Pizza, PizzaComum, PizzaSugar, PizzaVegetarian } from './pizza';

const gol = new Car("Volkswagen", "prata", 4);

gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn('esquerda');
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();


// Interface Pizza
const calabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8
}

console.log(calabresa);

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6
}

console.log(marguerita);

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4
}

console.log(nutella);

const commun1: PizzaComum = {
  flavor: 'Frango',
  slices: 8
}

const commum2: PizzaComum = {
  flavor: 'Calabresa',
  slices: 4,
}

const commum33: PizzaComum = {
  flavor: 'Pepperoni',
  slices: 6,
}

const vegetarian1: PizzaVegetarian = {
  flavor: 'Cogumelos',
  slices: 8,
}

const vegetarian2: PizzaVegetarian = {
  flavor: 'Palmito',
  slices: 6
}

const doce: PizzaSugar = {
  flavor: 'Goiabada com Queijo',
  slices: 4
}