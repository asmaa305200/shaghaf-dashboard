import { Component } from '@angular/core';

interface UserData {
  name: string;
  birthday: string;
  phone: number;
  password: string;
  email: string;
  gender: string; // Updated from usertype to gender
}

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent {
  name: string = '';
  email: string = '';
  birthday: string = '';
  password: string = '';
  phone: number = 0;
  gender: string = ''; // Updated from usertype to gender
  users: UserData[] = [];
  genderOptions: string[] = ['Male', 'Female', 'Other']; // Gender options

  submitUser() {
    if (this.name && this.email && this.birthday && this.gender) {
      this.users.push({
        name: this.name,
        email: this.email,
        birthday: this.birthday,
        phone: this.phone,
        password: this.password,
        gender: this.gender, // Updated from usertype to gender
      });
      // Clear the input fields after submission
      this.name = '';
      this.email = '';
      this.birthday = '';
      this.phone = 0;
      this.password = '';
      this.gender = ''; // Updated from usertype to gender
    } else {
      alert('Please fill out all required fields.');
    }
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
