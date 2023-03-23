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

  calculaNota(): number {
    return [...this._prova, ...this._trabalho].reduce((acc, nota) => acc + nota, 0)
  }

  mediaDasNotas(): number {
    const tamanho = [...this._prova, ...this._trabalho].length;
    return Math.round(this.calculaNota() / +tamanho);
  }
}

const personOne = new School('20220328859', 'Beatriz Mediato');

personOne.prova = [25, 20, 23, 23];
personOne.trabalho = [45, 45];


console.log(personOne);
console.log(`Soma de todas as notas: ${personOne.calculaNota()}`);
console.log(`Media das notas: ${personOne.mediaDasNotas()}`)