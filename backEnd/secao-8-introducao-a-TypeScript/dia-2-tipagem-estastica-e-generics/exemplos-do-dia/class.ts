class Dog {
  nome: string;
  cor: string;
  idade: number;

  constructor(nome: string, cor: string, idade: number) {
    this.nome = nome;
    this.cor = cor;
    this.idade = idade;
  }

  bark(): void {
    console.log('au au');
  }
}

class House {
  owner: string;
  address: string;
  color: string;
  area: number;

  constructor(owner: string, address: string, color: string, area: number) {
    this.owner = owner;
    this.address = address;
    this.color = color;
    this.area = area;
  }
}

class Flight {
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  passengers: number;


  constructor(origin: string, destination: string, departureDate: Date, arrivalDate: Date, passengers: number) {
    this.origin = origin;
    this.destination = destination;
    this.departureDate = departureDate;
    this.arrivalDate = arrivalDate;
    this.passengers = passengers;
  }
}