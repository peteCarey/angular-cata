export class User {
  constructor(
    public id: number,
    public name: string,
    public userName: string,
    public eMail: string,
    public address: string,
    public phone: string,
    public website?: string,
    public company?: string
  ) {}
}
