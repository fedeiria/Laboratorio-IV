import { Component } from '@angular/core';

export class Register {
  name: string = "";
  surname: string = "";
  email: string = "";
  username: string = "";
  password: string = "";

  constructor(name: string, surname: string, email: string, username: string, password: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.username = username;
    this.password = password;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  name: string = "";
  surname: string = "";
  email: string = "";
  username: string = "";
  password: string = "";

  saveRegister() {
    if (this.name.length != 0 && this.surname.length != 0 && this.email.length != 0 && this.username.length != 0 && this.password.length != 0) {
      const register = new Register(this.name, this.surname, this.email, this.username, this.password);
      localStorage.setItem("register", JSON.stringify(register));
    }
  }
}
