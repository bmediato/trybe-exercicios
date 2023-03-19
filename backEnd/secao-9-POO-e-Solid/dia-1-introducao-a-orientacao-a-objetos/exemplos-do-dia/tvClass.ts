class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn() {
    console.log(`brand: ${this._brand}, size: ${this._size}, resolution: ${this._resolution}, connections: ${this._connections}`)
  }

  get connectTo(): string | undefined {
    return this._connectTo;
  }

  set connectTo(value: string | undefined) {
    if (!value || this._connections.includes(value)) {
      this._connectTo = value;
      console.log(this.connectTo);
    } else {
      console.log('Sorry, connection unavailable');
    }
  }
}

const tv = new Tv('lg', 32, '4K', ['HDMI', 'Wifi', 'Ethernet'],)
tv.turnOn();
tv.connectTo = 'Wifi';
console.log('connected to:', tv.connectTo);