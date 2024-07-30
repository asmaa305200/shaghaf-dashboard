import { Component } from '@angular/core';

interface UserData {

  gender: string;
  title: string; // Added title field
  price: number; // Added price field
  imageSrc?: string; // Optional property for image source
}

interface ImageData {
  src: string | ArrayBuffer | null;
  name: string;
  size: number;
}

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css'],
})
export class BirthdayComponent {
  gender: string = '';
  title: string = ''; // Added title field
  price: number = 0; // Added price field
  users: UserData[] = [];
  genderOptions: string[] = ['Male', 'Female', 'Other']; // Gender options

  imageSrc: string | ArrayBuffer | null = null;
  imageName: string = '';
  imageSize: number = 0;
  images: ImageData[] = [];

  submitUser() {
    if (
      
      this.gender &&
      this.title &&
      this.price
    ) {
      this.users.push({
        gender: this.gender,
        title: this.title, // Added title field
        price: this.price, // Added price field
        imageSrc: this.imageSrc as string, // Convert to string if necessary
      });

      // Clear the input fields after submission
   

      this.gender = '';
      this.title = ''; // Clear title
      this.price = 0; // Clear price
      this.imageSrc = null; // Reset image
    } else {
      alert('Please fill out all required fields.');
    }
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.imageName = file.name;
      this.imageSize = Math.round(file.size / 1024); // size in KB
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
  }
}
