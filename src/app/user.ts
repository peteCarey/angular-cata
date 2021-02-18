export class User {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public street: string,
    public suite: string,
    public city: string,
    public zipcode: string,
    public geo: string,
    public phone: string,
    public website: string,
    public company: string
  ) {}
}
