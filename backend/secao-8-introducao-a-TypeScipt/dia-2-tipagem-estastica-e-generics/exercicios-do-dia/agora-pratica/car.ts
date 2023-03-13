class Car {
  brand: string;
  color: string;
  door: number;
  constructor(brand: string, color: string, door: number) {
    this.brand = brand;
    this.color = color;
    this.door = door;
  }
  turnOn(): void {
    console.log('Carro ligado');
  }
  honk(): void {
    console.log('Bibi');
  }
  speedUp(): void {
    console.log('acelerando');
  }
  speedDown(): void {
    console.log('desacelerando');
  }
  stop(): void {
    console.log('pare!')
  }
  turn(direction: string): void {
    console.log(`Virando para a ${direction}`);
  }
  turnOff(): void {
    console.log('Carro desligado');
  }
}

export default Car;