// classe Car
import Car from './car';
import Pizza from './pizza';

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

const marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6
}

const nutella: Pizza = {
  flavor: 'Nutella',
  slices: 4
}