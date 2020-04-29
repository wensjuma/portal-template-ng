import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-multiple-image-upload',
  templateUrl: './multiple-image-upload.component.html',
  styleUrls: ['./multiple-image-upload.component.scss']
})
export class MultipleImageUploadComponent implements OnInit {
  images = [];
  displayImages = []
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient) { }
  ngOnInit() {

  }

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
         let img = {}
          console.log(event.target.result);
          img['image'] = event.target.result.split(',')[1]
          this.images.push(img);
          this.displayImages.push(event.target.result)
         console.log(this.images);
        
          this.myForm.patchValue({
            fileSource: this.images
          });
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  remove(imageurl: string){
    console.log(imageurl);
    
    imageurl = "";
  }

  submit() {
    console.log(this.myForm.value);
    this.http.post('http://localhost:8001/upload.php', this.myForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }


}
