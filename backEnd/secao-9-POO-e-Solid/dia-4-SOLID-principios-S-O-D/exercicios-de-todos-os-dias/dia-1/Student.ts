class School {
  private _nome: string;
  private _matricula: string;
  private _prova: number[];
  private _trabalho: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._prova = [];
    this._trabalho = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get prova(): number[] {
    return this._prova;
  }

  set prova(value: number[]) {
    if (value.length > 4) throw new Error('Só é permitido 4 notas de prova');
    this._prova = value;
  }

  get trabalho(): number[] {
    return this._trabalho;
  }

  set trabalho(value: number[]) {
    if (value.length > 2) throw new Error('Só é permitido 2 notas de trabalho');
    this._trabalho = value;
  }
}

const personOne = new School('20220328859', 'Beatriz Mediato');

console.log(personOne);