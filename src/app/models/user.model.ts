export class User {
  public name: string;
  public firstName: string;
  public age: number;
  public quote: string;
  public photo: string;

  constructor(
    name: string,
    firstName: string,
    age: number,
    quote: string,
    photo: string
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
  }
}
