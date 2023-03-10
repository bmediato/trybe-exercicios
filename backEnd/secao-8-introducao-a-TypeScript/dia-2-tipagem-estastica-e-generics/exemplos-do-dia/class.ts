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