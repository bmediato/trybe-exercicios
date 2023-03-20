interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`
  }
}

const obj = new MyClass(2);

console.log(obj.myNumber);
console.log(obj.myFunc(2));