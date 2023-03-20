class SuperClass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  private sayHello(): void {
    console.log('Olá mundo!');
  }
  public sayHello2(): void {
    this.sayHello();
  }
}

class SubClass extends SuperClass { }

const myFunc = (object: SubClass) => {
  object.sayHello2();
}

// const sup = new SuperClass();
const sub = new SubClass();


// myFunc(sup);
myFunc(sub);