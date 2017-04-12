export class Person {

  private name: string;
  private age: number;
  private nickname: any;
  private numbers: number[] = [];
  public isSingle: boolean;

  constructor (name: string, age: number, isSingle: boolean = false) {
    this.name = name;
    this.age = age;
    this.numbers.push(1);
    this.isSingle = isSingle;
  }

  setName(newName: string): void{
    this.name = newName;
  }

  getName(): string{
    return this.name;
  }

  getAge(): number{
    return this.age;
  }
}