export class User {
  private name: string;
  private lastName: string;
  private email: string;
  private password: string;

  constructor(userObject) {
    this.name = userObject.name;
    this.lastName = userObject.lastName;
    this.email = userObject.email;
    this.password = userObject.password;
  }

  paramsParser() {
    return {
      first_name: this.name,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirmation: this.password,
      locale: "en"
    }
  }
}
