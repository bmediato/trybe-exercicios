class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }

  turnOn() {
    console.log(`brand: ${this.brand}, size: ${this.size}, resolution: ${this.resolution}, connections: ${this.connections}`)
  }
}

const tv = new Tv('lg', 32, '4K', ['HDMI', 'Wifi', 'Ethernet'],)
tv.turnOn();