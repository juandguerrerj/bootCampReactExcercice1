export class Contact {
  name = '';
  lastName = '';
  email = '';
  onLine = false;

  constructor(name, lastName, email, onLine){
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.onLine = onLine;
  }
}