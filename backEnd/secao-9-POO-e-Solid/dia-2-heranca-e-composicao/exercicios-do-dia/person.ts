// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  private validateName(name: string): void {
    if (name.length < 3) {
      throw new Error("o nome deve ter pelo menos 3 letras");
    }
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  private validateBirthDate(birthDate: Date): void {
    const today = new Date();
    const birthDateInM = birthDate.getTime();
    const todayInM = today.getTime();

    if (birthDateInM > todayInM) {
      throw new Error("data de nascimento invalida");
    }
    if (this.getAge(birthDate) > 120) {
      throw new Error('A pessoa não pode ter mais de 120 anos');
    }
  }

  private getAge(date: Date): number {
    const ageInMs: number = new Date().getTime() - date.getTime();
    const oneYearInMs: number = 31536000000;
    return Math.floor(ageInMs / oneYearInMs);
  }
}