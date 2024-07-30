import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


interface ImageData {
  src: string | ArrayBuffer | null;
  name: string;
  size: number;
}
@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css'],
})
  
export class AdsComponent {
  imageSrc: string | ArrayBuffer | null = null;
  imageName: string = '';
  imageSize: number = 0;
  images: ImageData[] = [];

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

  submitImage() {
    if (this.imageSrc) {
      this.images.push({
        src: this.imageSrc,
        name: this.imageName,
        size: this.imageSize
      });
      // Clear the input field and preview
      this.imageSrc = null;
      this.imageName = '';
      this.imageSize = 0;
    } else {
      alert('No image to submit.');
    }
  }

}
