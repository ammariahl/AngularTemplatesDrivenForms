export class Form {
  public contact: string;
  public firstname: string;
  public lastname: string;
  public password: string;

  constructor(
    contact: string,
    firstname: string,
    lastname: string,
    password: string
  ) {
    this.contact = contact;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
  }
}
