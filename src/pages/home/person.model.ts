export class Person {

  private nickname: any;
  private numbers: number[] = [];

  constructor (
    private name: string,
    private age: number,
    public isSingle: boolean = false
  ) {
    this.numbers.push(1);
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